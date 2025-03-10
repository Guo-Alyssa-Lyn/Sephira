import { useEffect, useRef, useState, useCallback } from 'react';
import { useDebounce, useDevicePixelRatio, useOrientation } from 'react-use';
import { PhysicsParams, Node, Connection, EngineConfig } from './types';
import { createQuadTree, updateQuadTree } from './quadTree';
import { applyPhysics, clampVelocity } from './physics';
import { renderFrame, initWebGL } from './renderer';

export const useNetworkEngine = (config: EngineConfig) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webglRef = useRef<WebGLRenderingContext | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const pixelRatio = useDevicePixelRatio();
  const orientation = useOrientation();
  const lastTime = useRef(performance.now());
  const quadTree = useRef(createQuadTree());

  // Initialize network with error boundary
  useEffect(() => {
    try {
      const initNetwork = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Initialize WebGL context with fallback
        webglRef.current = initWebGL(canvas) || null;
        
        // Initialize nodes with golden ratio spacing
        const initialNodes = Array.from({ length: config.nodeCount }, (_, i) => {
          const angle = i * Math.PI * (3 - Math.sqrt(5));
          const radius = Math.sqrt(i / config.nodeCount);
          return {
            x: radius * Math.cos(angle),
            y: radius * Math.sin(angle),
            velocity: { x: 0, y: 0 },
            size: 10,
            color: '#ffffff'
          };
        });

        setNodes(initialNodes);
        quadTree.current = createQuadTree(initialNodes);
      };

      initNetwork();
      return () => {
        // Cleanup WebGL resources
        if (webglRef.current) {
          const gl = webglRef.current;
          gl.getExtension('WEBGL_lose_context')?.loseContext();
        }
      };
    } catch (error) {
      console.error('Network initialization failed:', error);
    }
  }, [config.nodeCount]);

  // Animation loop with delta timing
  const animate = useCallback((time: number) => {
    const delta = time - lastTime.current;
    lastTime.current = time;

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Update physics
      const updatedNodes = nodes.map(node => {
        const updated = applyPhysics(node, delta, config.physics);
        return clampVelocity(updated, config.maxVelocity);
      });

      // Update quad tree
      quadTree.current = updateQuadTree(quadTree.current, updatedNodes);

      // Render frame
      if (webglRef.current) {
        renderFrame(webglRef.current, updatedNodes, connections, pixelRatio);
      } else {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Render 2D fallback
        }
      }

      setNodes(updatedNodes);
      requestAnimationFrame(animate);
    } catch (error) {
      console.error('Animation frame error:', error);
    }
  }, [nodes, connections, pixelRatio, config]);

  useEffect(() => {
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  return {
    canvasRef,
    nodes,
    connections,
    // Expose interaction methods
  };
}; 