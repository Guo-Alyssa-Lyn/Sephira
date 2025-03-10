'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { theme } from '@/lib/theme';

const techStack = [
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Node.js',
  'Vite',
  'Motion',
  'GraphQL'
];

const NetworkSphere = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (event.clientX - centerX) / 50;
    const y = (event.clientY - centerY) / 50;
    
    mouseX.set(x);
    mouseY.set(-y);
    rotateX.set(y);
    rotateY.set(x);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background circles */}
      <motion.div 
        className="absolute w-full h-full"
        style={{ rotateX, rotateY }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${theme.colors.primary}10 0%, transparent 70%)`,
              filter: 'blur(40px)'
            }}
          />
        </motion.div>
      </motion.div>

      {/* Network nodes with connections */}
      <motion.div 
        className="relative"
        style={{ rotateX, rotateY }}
      >
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const radius = 150 + Math.random() * 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: theme.colors.primary,
                left: '50%',
                top: '50%',
                x,
                y,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [x - 10, x + 10, x],
                y: [y - 10, y + 10, y],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </motion.div>

      {/* Tech stack labels */}
      <motion.div 
        className="relative"
        style={{ rotateX, rotateY }}
      >
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * Math.PI * 2;
          const radius = 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech}
              className="absolute cursor-pointer"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x}px, ${y}px)`,
              }}
              onHoverStart={() => setHoveredTech(tech)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <motion.div
                className="relative text-sm font-medium"
                animate={{
                  scale: hoveredTech === tech ? 1.2 : 1,
                  color: hoveredTech === tech ? theme.colors.primary : `${theme.colors.primary}80`,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
                {hoveredTech === tech && (
                  <motion.div
                    className="absolute -inset-2 -z-10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    style={{ background: theme.colors.primary }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center sphere */}
      <motion.div
        className="relative w-40 h-40"
        style={{ rotateX, rotateY }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary}30 0%, transparent 70%)`,
            filter: 'blur(10px)',
          }}
        />
        
        {/* Outer glow */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary}20 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </div>
  );
};

const LoadingFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black">
    <motion.div
      className="relative w-32 h-32"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: theme.effects.gradientText,
        }}
        animate={{
          scale: [1, 0.95, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -inset-2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${theme.colors.primary}20 0%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  </div>
);

const ThreeScene = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
      setIsLoading(true);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LoadingFallback />
          </motion.div>
        ) : (
          <motion.div
            key="scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <NetworkSphere />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThreeScene; 