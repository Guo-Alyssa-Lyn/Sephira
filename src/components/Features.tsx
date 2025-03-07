'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  SparklesIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Custom Web Development',
    description: 'We build tailored web solutions that perfectly match your business needs and goals.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Responsive Design',
    description: 'Our websites look and work perfectly on all devices, from desktop to mobile.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'E-commerce Solutions',
    description: 'Create powerful online stores with secure payment processing and inventory management.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Modern UI/UX',
    description: 'Beautiful, intuitive interfaces that provide the best user experience.',
    icon: SparklesIcon,
  },
  {
    name: 'Cloud Hosting',
    description: 'Reliable and scalable hosting solutions to keep your website fast and always online.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Security First',
    description: 'Built-in security measures to protect your website and your users\' data.',
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden" id="services">
      {/* Vite.js-like gradient animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0B1120,#131B2C,#1E293B,#131B2C,#0B1120)] animate-rotate-gradient" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your online presence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive web development services to help your business thrive in the digital world.
            Our solutions are modern, scalable, and affordable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col p-8 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50" />
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
                </div>

                {/* Icon animation */}
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </motion.div>

                <dt className="text-xl font-semibold leading-7 text-gray-900 relative z-10">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 relative z-10">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 