'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NetworkAnimation from './NetworkAnimation';
import Globe from './Globe';
import MovingLogoStack from './MovingLogoStack';
import { 
  CpuChipIcon, 
  GlobeAltIcon, 
  ServerStackIcon 
} from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#0B1120] via-[#131B2C] to-[#1E293B]">
      {/* Background with network animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#131B2C] to-[#1E293B]" />
        <NetworkAnimation />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-16 lg:flex lg:items-center lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-[#4F46E5]/10 px-3 py-1 text-sm font-semibold leading-6 text-[#818CF8] ring-1 ring-inset ring-[#4F46E5]/20">
                  From idea to scale
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <span>Simplified.</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Modern Web Solutions<br />
              <span className="text-[#818CF8]">at Affordable Prices</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            At Nemesis, we specialize in delivering high-quality web development services that won't break the bank. With over 100 successful projects, our team combines modern design with technical expertise to bring your vision to life.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#contact"
                className="rounded-md bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4338CA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5] transition-all duration-300"
              >
                Get started for free
              </Link>
              <Link 
                href="#services" 
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-300 group flex items-center"
              >
                Learn more <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
            <div className="mt-12">
              <MovingLogoStack />
            </div>
          </motion.div>
        </div>

        {/* Right side globe */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:flex-none xl:ml-32">
          <motion.div
            className="relative w-[600px] h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Globe />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4F46E5]/30 via-transparent to-[#818CF8]/30 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
} 