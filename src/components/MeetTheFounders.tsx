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
    name: "John Smith",
    role: "CEO & Lead Developer",
    image: "/founders/john.jpg",
    bio: "With over 10 years of experience in web development, John leads our technical team with expertise in modern web technologies and architecture.",
    social: {
      email: "john@nemesis.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://johnsmith.dev"
    }
  },
  {
    name: "Sarah Chen",
    role: "CTO & Design Lead",
    image: "/founders/sarah.jpg",
    bio: "Sarah brings a unique blend of technical expertise and creative vision, specializing in UI/UX design and frontend development.",
    social: {
      email: "sarah@nemesis.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      website: "https://sarahchen.design"
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
            Meet Our <span className="text-gradient">Founders</span>
          </h2>
          <p className="section-subtitle">
            The passionate team behind Nemesis, dedicated to delivering exceptional
            web solutions that transform businesses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-accent-electric/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative h-48 w-48 overflow-hidden rounded-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {founder.name}
                    </h3>
                    <p className="mt-2 text-lg text-gray-300">
                      {founder.role}
                    </p>
                    <p className="mt-4 text-gray-300">
                      {founder.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <EnvelopeIcon className="h-5 w-5" />
                      <span className="text-sm">Email</span>
                    </a>
                    <a
                      href={`tel:${founder.social.phone}`}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      <span className="text-sm">Phone</span>
                    </a>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPinIcon className="h-5 w-5" />
                      <span className="text-sm">{founder.social.location}</span>
                    </div>
                    <a
                      href={founder.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <GlobeAltIcon className="h-5 w-5" />
                      <span className="text-sm">Website</span>
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
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary magnetic-button"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 