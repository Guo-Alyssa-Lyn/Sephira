'use client';

import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { Marquee } from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    image: '/testimonials/person1.jpg',
    content: 'The team delivered an exceptional website that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, InnovateCo',
    image: '/testimonials/person2.jpg',
    content: 'Working with this team was a game-changer for our online presence. They understood our vision and brought it to life perfectly.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    image: '/testimonials/person3.jpg',
    content: 'Incredible work on our e-commerce platform. The site is fast, responsive, and our sales have increased significantly.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div
      className={cn(
        "relative h-full w-[280px] sm:w-[350px] lg:w-[400px] cursor-pointer overflow-hidden rounded-xl border p-4 sm:p-7 lg:p-8 mx-0.5",
        "border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10",
      )}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white">
            {testimonial.name}
          </h3>
          <p className="text-[10px] sm:text-sm lg:text-base text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex">
        {[...Array(testimonial.rating)].map((_, i) => (
          <HiStar key={i} className="h-3 w-3 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-500" />
        ))}
      </div>
      <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-gray-300">
        "{testimonial.content}"
      </p>
    </motion.div>
  );
};

const firstRow = testimonials;
const secondRow = [...testimonials].reverse();

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
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

      <div className="relative mx-auto max-w-[2000px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-400"
          >
            Hear from our satisfied clients about their experience working with us
          </motion.p>
        </div>

        <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden relative left-1/2 right-1/2 -translate-x-1/2">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
} 