'use client';

import { useEffect, useRef } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: 'iot' | 'network' | 'ict';
}

interface NetworkAnimationProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  lineColor?: string;
  dotColor?: string;
  lineWidth?: number;
  dotSize?: number;
  particleCount?: number;
}

const NetworkAnimation = ({
  mouseX,
  mouseY,
  lineColor = 'rgba(129, 140, 248, 0.1)',
  dotColor = 'rgba(165, 180, 252, 0.2)',
  lineWidth = 1.5,
  dotSize = 2,
  particleCount = 50,
}: NetworkAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Node[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize nodes
    const initNodes = () => {
      const nodeTypes: ('iot' | 'network' | 'ict')[] = ['iot', 'network', 'ict'];
      nodes.current = Array.from({ length: particleCount }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * dotSize + 1,
        type: nodeTypes[i % 3],
      }));
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.current.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.current.forEach((otherNode, j) => {
          if (i === j) return;
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    initNodes();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mouseX, mouseY, lineColor, dotColor, lineWidth, dotSize, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default NetworkAnimation; 