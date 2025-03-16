'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const founders = [
  {
    name: "Lance Valle",
    role: "CEO & Lead Developer",
    image: "/assets/images/lance.png",
    bio: "With over 10 years of experience in web development, Lance leads our technical team with expertise in modern web technologies and architecture.",
    social: {
      email: "lance@nemesis.com",
      phone: "+639288988692",
      location: "Naga City, Philippines",
      website: "https://nemesis.com"
    }
  },
  {
    name: "Alyssa Lyn Jecomo",
    role: "CTO & Design Lead",
    image: "/assets/images/alyssa.png",
    bio: "Alyssa brings a unique blend of technical expertise and creative vision, specializing in UI/UX design and frontend development.",
    social: {
      email: "alyssa@nemesis.com",
      phone: "+63912345678",
      location: "Baguio, Philippines",
      website: "https://nemesis.com"
    }
  }
];

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

export default function MeetTheFounders() {
  return (
    <section className="py-12 sm:py-20 lg:py-32" id="meet-the-founders">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Meet Our <span className="text-gradient">Founders</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-400">
            The passionate team behind Nemesis, dedicated to delivering exceptional
            web solutions that transform businesses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-8 lg:gap-12 lg:grid-cols-2"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={item}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-accent-electric/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl sm:rounded-2xl" />
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 overflow-hidden rounded-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {founder.name}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-lg text-gray-300">
                      {founder.role}
                    </p>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-xs">
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm">Email</span>
                    </a>
                    <a
                      href={`tel:${founder.social.phone}`}
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm">Phone</span>
                    </a>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300">
                      <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm truncate">{founder.social.location}</span>
                    </div>
                    <a
                      href={founder.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm">Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary magnetic-button text-sm sm:text-base"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 