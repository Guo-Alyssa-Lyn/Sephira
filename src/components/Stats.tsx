'use client';

import { motion, useMotionValue } from 'framer-motion';
import NetworkAnimation from './NetworkAnimation';
import { useEffect, useRef } from 'react';

const stats = [
  { id: 1, name: 'Websites Launched', value: '100+' },
  { id: 2, name: 'Satisfied Clients', value: '50+' },
  { id: 3, name: 'Years Experience', value: '5+' },
  { id: 4, name: 'Team Members', value: '10+' },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  };

  return (
    <div 
      className="relative bg-gradient-to-b from-[#0B1120] via-[#131B2C] to-[#1E293B] py-24 sm:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Enhanced Network Animation Background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <NetworkAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/70 to-[#0B1120]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Trusted by businesses across the Philippines
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our track record speaks for itself - we&apos;ve helped numerous businesses establish their online presence
            </motion.p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 p-8 
                         hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-indigo-500/30 
                         transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring', 
                  stiffness: 120 
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut",
                  }
                }}
              >
                {/* Floating Animation */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Dynamic Gradient Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                </div>

                <dt className="text-sm font-semibold leading-7 text-gray-300 mb-2 z-10 text-center">
                  {stat.name}
                </dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-white z-10 text-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.span>
                </dd>

                {/* Subtle Particles */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        scale: 0,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 