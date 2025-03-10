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
  lineColor = 'rgba(129, 140, 248, 0.8)',
  dotColor = 'rgba(165, 180, 252, 1)',
  lineWidth = 1.5,
  dotSize = 2,
  particleCount = 50,
}: NetworkAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Node[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    console.log('NetworkAnimation useEffect triggered');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context');
      return;
    }

    console.log('Canvas and context initialized successfully');

    const resizeCanvas = () => {
      console.log('Resizing canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize nodes
    const nodeTypes: ('iot' | 'network' | 'ict')[] = ['iot', 'network', 'ict'];
    nodes.current = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * dotSize + 1,
      type: nodeTypes[i % 3],
    }));

    console.log('Nodes initialized:', nodes.current.length);

    const animate = () => {
      if (!ctx || !canvas) {
        console.error('Canvas or context not available in animation frame');
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let mx = mouseX?.get();
      let my = mouseY?.get();

      nodes.current.forEach((node) => {
        // Update position with continuous movement
        node.x += node.vx;
        node.y += node.vy;

        // Wrap edges instead of bouncing
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Mouse interaction: attraction and size change
        let currentRadius = node.radius;
        if (mx !== undefined && my !== undefined) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const distance = Math.hypot(dx, dy);
          const maxDistance = 120;

          if (distance < maxDistance && distance > 0) {
            const force = (maxDistance - distance) / maxDistance * 0.2;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
            currentRadius *= 1.5;
          }
        }

        // Draw connections between close particles
        nodes.current.forEach((otherNode) => {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth * (1 - distance / 150);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    console.log('Starting animation');
    animate();

    return () => {
      console.log('Cleaning up NetworkAnimation');
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mouseX, mouseY, lineColor, dotColor, lineWidth, dotSize, particleCount]);

  console.log('Rendering NetworkAnimation component');

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        backgroundColor: '#0B1120' // Solid dark background
      }}
    />
  );
};

export default NetworkAnimation;