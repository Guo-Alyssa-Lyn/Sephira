import { useNetworkEngine } from '../NetworkEngine/useNetworkEngine';
import { useTheme } from 'next-themes';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { useReducedMotion } from 'framer-motion';

const NetworkVisualization = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const { canvasRef, nodes, connections } = useNetworkEngine({
    nodeCount: 100,
    connectionThreshold: 150,
    performanceMode: 'balanced',
    physics: {
      tension: 0.1,
      friction: 0.2,
      repulsion: 100,
      gravity: 0.1
    },
    maxVelocity: 10
  });

  // Spring animations with reduced motion support
  const [spring, api] = useSpring(() => ({
    opacity: 1,
    scale: prefersReducedMotion ? 1 : 1.2,
    config: { 
      tension: 170, 
      friction: 26,
      immediate: prefersReducedMotion
    }
  }));

  // Helper function to get coordinates from different event types
  const getEventCoordinates = (event: TouchEvent | PointerEvent | WheelEvent) => {
    if (event instanceof TouchEvent) {
      const touch = event.touches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if (event instanceof PointerEvent) {
      return { x: event.clientX, y: event.clientY };
    }
    if (event instanceof WheelEvent) {
      return { x: event.clientX, y: event.clientY };
    }
    // Fallback to center point if event type is not recognized
    return { x: 0, y: 0 };
  };

  // Gesture handling
  const bind = useGesture({
    onMove: ({ event }) => {
      const { x, y } = getEventCoordinates(event as TouchEvent | PointerEvent | WheelEvent);
      // Handle magnetic hover effect
    },
    onPinch: ({ event }) => {
      const { x, y } = getEventCoordinates(event as TouchEvent | PointerEvent | WheelEvent);
      // Handle zoom
    },
    onDrag: ({ movement: [mx, my], velocity }) => {
      // Handle momentum-based dragging
    },
    onDoubleClick: ({ event }) => {
      const { x, y } = getEventCoordinates(event as TouchEvent | PointerEvent | WheelEvent);
      // Handle zoom focus
    }
  });

  return (
    <animated.div 
      style={spring} 
      className="relative w-full h-full"
      role="img"
      aria-label="Interactive network visualization"
      {...bind()}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {/* Shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>
    </animated.div>
  );
};

export default NetworkVisualization; 