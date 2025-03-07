'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    body: "Working with Nemesis was a game-changer for our business. They delivered a beautiful website that perfectly represents our brand and has significantly increased our online sales.",
    author: {
      name: 'Maria Santos',
      handle: 'CEO at TechPH',
      imageUrl: '/testimonials/maria.webp'
    },
  },
  {
    body: "The team at Nemesis is incredibly professional and skilled. They understood our requirements perfectly and delivered a website that exceeded our expectations.",
    author: {
      name: 'Juan dela Cruz',
      handle: 'Founder at StartupMNL',
      imageUrl: '/testimonials/juan.webp'
    },
  },
  {
    body: "What impressed me most was their attention to detail and commitment to delivering high-quality work. They're truly experts in web development.",
    author: {
      name: 'Ana Reyes',
      handle: 'Marketing Director',
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
        <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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