'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiUploadCloud, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';
import lanceAvatar from '@/public/images/lance-avatar.png';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  projectType: string;
  message: string;
  file: File | null;
  subject: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  projectType?: string;
  message?: string;
  file?: string;
}

interface FormField {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  placeholder?: string;
  options?: string[];
}

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
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    content: 'San Francisco, CA',
    link: 'https://maps.google.com'
  },
  {
    icon: GlobeAltIcon,
    title: 'Website',
    content: 'www.nemesis.com',
    link: 'https://www.nemesis.com'
  }
];

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    message: '',
    file: null,
    subject: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const projectTypes = [
    'Custom Web Application Development',
    'E-commerce Platform Development',
    'Progressive Web App (PWA) Development',
    'UI/UX Design & Prototyping',
    'Search Engine Optimization (SEO)',
    'Content Management System (CMS) Development',
    'API Development & Integration',
    'Cloud Migration & Optimization',
    'Digital Marketing Strategy',
    'Social Media Marketing',
    'Artificial Intelligence Solutions',
    'Software Maintenance & Support',
    'Technical Consulting & Strategy'
  ];

  const quotes = [
    {
      text: "A website is the digital storefront of your business - make it count!",
      author: "Web Development Expert"
    },
    {
      text: "In today's digital age, your website is your first impression. Make it unforgettable.",
      author: "Digital Strategist"
    },
    {
      text: "Your website is your 24/7 salesperson - invest in it wisely.",
      author: "Marketing Specialist"
    },
    {
      text: "A great website is not just about design, it's about creating meaningful experiences.",
      author: "UX Designer"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }
      if (!formData.projectType) newErrors.projectType = 'Project type is required';
    }

    if (step === 2) {
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 50) {
        newErrors.message = 'Message must be at least 50 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleFileSelect = (file: File | null) => {
    if (!file) {
      setFormData({ ...formData, file: null });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, file: 'File size exceeds 5MB limit' });
      return;
    }

    setFormData({ ...formData, file });
    setErrors({ ...errors, file: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          budget: '',
          projectType: '',
          message: '',
          file: null,
          subject: '',
        });
        setStep(1);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to start your project? Contact us today and let's discuss how we can
            help bring your vision to life.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                whileHover={{ x: 10 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-purple/10 text-primary-purple">
                  <info.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {info.title}
                  </h3>
                  <p className="text-gray-300">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="Your message"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary magnetic-button w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;