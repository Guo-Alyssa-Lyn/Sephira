'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const founders = [
  {
    name: 'John Doe',
    title: 'Founder & CEO',
    image: '/images/lance-avatar.png',
    bio: 'A visionary leader with 10+ years of experience in web development and digital transformation. Passionate about creating innovative solutions that drive business growth.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Jane Smith',
    title: 'Co-Founder & CTO',
    image: '/images/Alyssa.png',
    bio: 'A tech enthusiast with expertise in cutting-edge web technologies. Dedicated to building scalable and secure web applications that deliver exceptional user experiences.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  }
];

const MeetTheFounders = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0B1120] via-[#131B2C] to-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Meet the Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 relative group">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Name and Title */}
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {founder.name}
                </h3>
                <p className="text-indigo-400 mb-4">{founder.title}</p>

                {/* Bio */}
                <p className="text-gray-300 mb-6">{founder.bio}</p>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounders; 