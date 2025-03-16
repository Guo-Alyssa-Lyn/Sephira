'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { id: 1, name: 'Projects Completed', value: 100, suffix: '+' },
  { id: 2, name: 'Happy Clients', value: 50, suffix: '+' },
  { id: 3, name: 'Years Experience', value: 5, suffix: '+' },
  { id: 4, name: 'Support Hours', value: 24, suffix: '/7' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      const interval = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-purple/10 to-accent-electric/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 h-40 sm:h-80 w-40 sm:w-80 rounded-full bg-primary-purple/10 blur-2xl sm:blur-3xl" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 h-40 sm:h-80 w-40 sm:w-80 rounded-full bg-accent-electric/10 blur-2xl sm:blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-400">
            Numbers that speak for themselves. We've helped businesses transform their digital presence
            and achieve remarkable results.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl sm:rounded-2xl bg-white/5 p-3 sm:p-6 lg:p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base text-gray-300">{stat.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}