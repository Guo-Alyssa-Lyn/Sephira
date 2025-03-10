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
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Mission</span> & Vision
          </h2>
          <p className="section-subtitle">
            We're on a mission to transform the digital landscape through innovative web solutions
            that empower businesses to thrive in the modern age.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {/* Mission */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-accent-electric/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-purple/10 text-primary-purple">
                <LightBulbIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-300">
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
            className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-accent-electric/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-electric/10 text-accent-electric">
                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="mt-4 text-gray-300">
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
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
              className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h4 className="text-lg font-semibold text-white">{value.name}</h4>
                <p className="mt-2 text-sm text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}