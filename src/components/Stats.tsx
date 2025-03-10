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
      className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-purple/20 to-accent-electric/20" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-purple/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-electric/20 blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="section-subtitle">
            Numbers that speak for themselves. We've helped businesses transform their digital presence
            and achieve remarkable results.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
              <div className="relative">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-base text-gray-300">{stat.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}