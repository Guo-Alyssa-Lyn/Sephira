'use client';

import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';
import { 
  HiOutlineCode, 
  HiOutlineDeviceMobile, 
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineSupport
} from 'react-icons/hi';

const features = [
  {
    title: 'Modern Web Development',
    description: 'Built with Next.js 14, React 18, and TypeScript for robust, type-safe applications.',
    icon: HiOutlineCode,
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first approach with Tailwind CSS for beautiful, responsive layouts on all devices.',
    icon: HiOutlineDeviceMobile,
  },
  {
    title: 'Performance Optimized',
    description: 'Lightning-fast load times with optimized assets and server-side rendering.',
    icon: HiOutlineLightningBolt,
  },
  {
    title: 'Security First',
    description: 'Built-in security best practices and regular updates to keep your site protected.',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored web solutions that match your brand and business requirements.',
    icon: HiOutlineSparkles,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance for your peace of mind.',
    icon: HiOutlineSupport,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-32">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Our Web Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-400"
          >
            Comprehensive web development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${theme.colors.primary}20` }}
                >
                  <feature.icon 
                    className="h-6 w-6"
                    style={{ color: theme.colors.primary }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 