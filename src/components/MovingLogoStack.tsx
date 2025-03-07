'use client';

import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiStrapi, 
  SiTailwindcss, 
  SiReact, 
  SiPrisma, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiNpm 
} from 'react-icons/si';

type Technology = {
  name: string;
  Icon?: React.ComponentType<{ className?: string }>;
  logo?: string;
};

const technologies: Technology[] = [
  { name: 'NextJS', Icon: SiNextdotjs },
  { name: 'Strapi', Icon: SiStrapi },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'React.js', Icon: SiReact },
  { name: 'Prisma', Icon: SiPrisma },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express.js', Icon: SiExpress },
  { name: 'npm', Icon: SiNpm },
  { name: 'Three.js', logo: '/logos/threejs.svg' },
  { name: 'FastAPI', logo: '/logos/fastapi.svg' },
];

export default function MovingLogoStack() {
  return (
    <div className="relative overflow-hidden w-full py-8">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center space-x-4">
            {tech.Icon ? (
              <tech.Icon className="h-12 w-12 text-white" />
            ) : (
              <img src={tech.logo} alt={tech.name} className="h-12 w-12" />
            )}
            <span className="text-lg font-semibold text-white">{tech.name}</span>
          </div>
        ))}
        {/* Duplicate the list for seamless looping */}
        {technologies.map((tech, index) => (
          <div key={`${index}-duplicate`} className="flex items-center space-x-4">
            {tech.Icon ? (
              <tech.Icon className="h-12 w-12 text-white" />
            ) : (
              <img src={tech.logo} alt={tech.name} className="h-12 w-12" />
            )}
            <span className="text-lg font-semibold text-white">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
} 