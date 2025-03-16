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
    <section id="features" className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${theme.colors.primary}10 0%, transparent 15%),
            radial-gradient(circle at 80% 70%, ${theme.colors.secondary}10 0%, transparent 15%),
            radial-gradient(circle at center, transparent 0%, ${theme.colors.background.darker} 100%)
          `
        }}
      />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Our Web Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-400 px-2"
          >
            Comprehensive web development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid gap-3 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl sm:rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 sm:p-6 lg:p-8 hover:bg-cyan-500/10 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl"
                  style={{ backgroundColor: `${theme.colors.primary}20` }}
                >
                  <feature.icon 
                    className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                    style={{ color: theme.colors.primary }}
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">
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
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base lg:text-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 