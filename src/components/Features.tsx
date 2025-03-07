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
    <div className="bg-white py-24 sm:py-32" id="services">
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
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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