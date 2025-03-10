'use client';

import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';
import Image from 'next/image';

const technologies = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Three.js', icon: '/icons/threejs.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Framer Motion', icon: '/icons/framer.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Vite', icon: '/icons/vite.svg' },
];

const TechStack = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-black/0 via-black/50 to-black/0 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div
        className="flex gap-16 py-4"
        animate={{
          x: ['-0%', '-50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center gap-2 group"
          >
            <div 
              className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))' }}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span 
              className="text-sm font-medium"
              style={{ color: theme.colors.text.secondary }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack; 