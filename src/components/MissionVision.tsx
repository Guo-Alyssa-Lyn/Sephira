'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineChartSquareBar } from 'react-icons/hi';
import { useEffect } from 'react';

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl opacity-10"
        style={{
          x: useMotionTemplate`calc(${mouseX}px - 150px)`,
          y: useMotionTemplate`calc(${mouseY}px - 150px)`,
        }}
      />
    </div>
  );
};

const ValueCard = ({ 
  icon: Icon,
  title,
  children,
  color
}: {
  icon: React.ElementType,
  title: string,
  children: React.ReactNode,
  color: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`relative overflow-hidden rounded-3xl p-px backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-${color}-500/20`}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
    <div className="relative h-full bg-gradient-to-b from-white/5 to-white/2 rounded-3xl p-8">
      <div className="flex flex-col items-center text-center">
        <div className={`relative mb-8`}>
          <div className={`absolute inset-0 bg-${color}-500/10 blur-3xl`} />
          <div className={`relative w-20 h-20 rounded-2xl bg-${color}-500/5 flex items-center justify-center border border-${color}-500/10`}>
            <Icon className={`w-10 h-10 text-${color}-500`} />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        
        <div className="text-base leading-relaxed text-gray-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const MissionVision = () => {
  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guiding principles that shape our digital craftsmanship and client relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ValueCard
            icon={HiOutlineChartSquareBar}
            title="Strategic Mission"
            color="indigo"
          >
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                Empower businesses through innovative digital solutions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                Drive measurable growth through user-centric design
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                Deliver cutting-edge technologies with precision
              </li>
            </ul>
          </ValueCard>

          <ValueCard
            icon={HiOutlineLightBulb}
            title="Visionary Outlook"
            color="purple"
          >
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                Redefine industry standards for digital excellence
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                Pioneer transformative web experiences
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                Create universal access to strategic web solutions
              </li>
            </ul>
          </ValueCard>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;