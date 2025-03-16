'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaFacebookF, 
  FaInstagram, 
  FaDribbble, 
  FaTiktok 
} from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#mission-vision' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/nemesis',
      icon: FaLinkedinIn
    },
    {
      name: 'GitHub',
      href: 'https://github.com/nemesis',
      icon: FaGithub
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/nemesis',
      icon: FaFacebookF
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/nemesis',
      icon: FaInstagram
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/nemesis',
      icon: FaDribbble
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@nemesis',
      icon: FaTiktok
    }
  ],
};

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'contact@nemesis.com',
    link: 'mailto:contact@nemesis.com'
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+639288988692',
    link: 'tel:+639288988692'
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    content: 'Naga City, Philippines',
    link: 'https://maps.google.com/place/Naga+City+Philippines'
  },
  {
    icon: GlobeAltIcon,
    title: 'Website',
    content: 'www.nemesis.com',
    link: 'https://www.nemesis.com'
  }
];

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 lg:py-20 bg-[#0A0A0A]">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-5 xl:col-span-4"
          >
            <div className="flex flex-col space-y-4 lg:space-y-6">
              <div className="relative flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <Image
                  src="/logo.png"
                  alt="Nemesis"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-md">
                Transforming businesses through innovative web solutions and cutting-edge technology.
              </p>
              {/* Social Icons for larger screens */}
              <div className="hidden lg:block">
                <ul className="flex flex-wrap gap-3">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 text-gray-400 hover:bg-primary-purple hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 xl:col-span-2"
          >
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">Navigation</h3>
              <ul className="space-y-2 lg:space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">Contact</h3>
              <ul className="space-y-3 lg:space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.title}>
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 lg:gap-3 text-sm sm:text-base text-gray-300 hover:text-white transition-colors group"
                    >
                      <span className="flex-shrink-0 p-2 rounded-lg bg-gray-800/50 group-hover:bg-primary-purple/20 transition-colors">
                        <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="hover:translate-x-1 inline-block transform transition-transform">
                        {info.content}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social - Only visible on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-white">Social</h3>
            <ul className="flex flex-wrap gap-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800/50 text-gray-400 hover:bg-primary-purple hover:text-white transition-all duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Nemesis. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 