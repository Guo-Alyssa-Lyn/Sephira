'use client';

import { motion } from 'framer-motion';
import { LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-12 sm:py-20 lg:py-32">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Our <span className="text-gradient">Mission</span> & Vision
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-400">
            We're on a mission to transform the digital landscape through innovative web solutions
            that empower businesses to thrive in the modern age.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2"
        >
          {/* Mission */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl sm:rounded-2xl" />
            <div className="relative">
              <div className="mb-3 sm:mb-4 lg:mb-6 inline-flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary-purple/10 text-primary-purple">
                <LightBulbIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Our Mission</h3>
              <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge web solutions that drive growth,
                enhance user experience, and create lasting digital impact. We strive to
                make advanced web technologies accessible and beneficial for businesses
                of all sizes.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl sm:rounded-2xl" />
            <div className="relative">
              <div className="mb-3 sm:mb-4 lg:mb-6 inline-flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-accent-electric/10 text-accent-electric">
                <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Our Vision</h3>
              <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                To be the leading force in web innovation, setting new standards for
                digital excellence. We envision a future where every business has access
                to powerful, user-friendly web solutions that propel them forward in
                the digital economy.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              name: 'Innovation',
              description: 'Pushing boundaries with cutting-edge technologies and creative solutions.',
            },
            {
              name: 'Excellence',
              description: 'Delivering the highest quality work with attention to every detail.',
            },
            {
              name: 'Collaboration',
              description: 'Working closely with clients to achieve their goals together.',
            },
            {
              name: 'Integrity',
              description: 'Maintaining the highest standards of honesty and transparency.',
            },
          ].map((value, index) => (
            <motion.div
              key={value.name}
              variants={item}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white/5 p-3 sm:p-4 lg:p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg sm:rounded-xl" />
              <div className="relative">
                <h4 className="text-base sm:text-lg font-semibold text-white">{value.name}</h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}