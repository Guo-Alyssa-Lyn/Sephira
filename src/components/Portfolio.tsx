'use client';

import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';
import Image from 'next/image';
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind CSS',
    image: '/portfolio/project1.jpg',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration',
    image: '/portfolio/project2.jpg',
    tags: ['React', 'Node.js', 'Socket.io'],
  },
  {
    title: 'Portfolio Website',
    description: 'A beautiful portfolio website showcasing creative work',
    image: '/portfolio/project3.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      className={cn(
        "relative h-full w-[300px] sm:w-[350px] lg:w-[400px] cursor-pointer overflow-hidden rounded-xl border p-6 sm:p-7 lg:p-8",
        "border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10",
      )}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const firstRow = projects;
const secondRow = [...projects].reverse();

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${theme.colors.primary}15 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, ${theme.colors.secondary}15 0%, transparent 20%),
            radial-gradient(circle at center, transparent 0%, ${theme.colors.background.darker} 100%)
          `
        }}
      />

      <div className="relative mx-auto max-w-[2000px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Our Recent Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-400"
          >
            Explore our latest work and see how we've helped clients achieve their goals
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 