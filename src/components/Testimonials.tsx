'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    body: "Working with Nemesis was a game-changer for our business. They delivered a beautiful website that perfectly represents our brand and has significantly increased our online sales.",
    author: {
      name: 'Maria Santos',
      role: 'CEO at TechPH',
      imageUrl: '/testimonials/maria.webp'
    },
  },
  {
    body: "The team at Nemesis is incredibly professional and skilled. They understood our requirements perfectly and delivered a website that exceeded our expectations.",
    author: {
      name: 'Juan dela Cruz',
      role: 'Founder at StartupMNL',
      imageUrl: '/testimonials/juan.webp'
    },
  },
  {
    body: "What impressed me most was their attention to detail and commitment to delivering high-quality work. They're truly experts in web development.",
    author: {
      name: 'Ana Reyes',
      role: 'Marketing Director',
      imageUrl: '/testimonials/ana.webp'
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from our satisfied clients
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.name}
                className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <figure className="text-center">
                  <blockquote className="text-gray-900">
                    <p className="text-lg leading-7">{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex flex-col items-center">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={64}
                      height={64}
                    />
                    <div className="mt-4">
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 