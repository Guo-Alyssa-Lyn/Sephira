'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiUploadCloud, FiCheckCircle, FiAlertCircle, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiMessenger } from 'react-icons/si';
import FeedbackMessages from './magicui/feedback-messages';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  file: File | null;
  facebook: string;
  instagram: string;
  tiktok: string;
  messenger: string;
  linkedin: string;
  twitter: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  file?: string;
}

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'lancevalle0428@nemesis.com',
    link: 'mailto:lancevalle0428@nemesis.com'
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
    link: 'https://maps.google.com'
  },
  {
    icon: GlobeAltIcon,
    title: 'Website',
    content: 'www.nemesis.com',
    link: 'https://www.nemesis.com'
  }
];

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

const socialMediaFields = [
  {
    name: 'linkedin',
    label: 'LinkedIn Profile',
    icon: FaLinkedin,
    placeholder: 'https://linkedin.com/in/your-profile'
  },
  {
    name: 'facebook',
    label: 'Facebook Profile',
    icon: FaFacebook,
    placeholder: 'https://facebook.com/your-profile'
  },
  {
    name: 'twitter',
    label: 'X (Twitter) Profile',
    icon: FaXTwitter,
    placeholder: 'https://twitter.com/your-profile'
  },
  {
    name: 'instagram',
    label: 'Instagram Profile',
    icon: FaInstagram,
    placeholder: 'https://instagram.com/your-profile'
  },
  {
    name: 'tiktok',
    label: 'TikTok Profile',
    icon: FaTiktok,
    placeholder: 'https://tiktok.com/@your-profile'
  },
  {
    name: 'messenger',
    label: 'Messenger Username',
    icon: SiMessenger,
    placeholder: 'your.messenger.username'
  }
];

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    file: null,
    facebook: '',
    instagram: '',
    tiktok: '',
    messenger: '',
    linkedin: '',
    twitter: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  // Calculate form progress
  useEffect(() => {
    const requiredFields = step === 1 
      ? ['name', 'email', 'phone']
      : ['projectType', 'budget', 'message'];
    
    const filledFields = requiredFields.filter(field => 
      formData[field as keyof FormData]?.toString().trim() !== ''
    );
    
    setFormProgress((filledFields.length / requiredFields.length) * 100);
  }, [formData, step]);

  const handleFocus = (field: string) => {
    setIsFocused(field);
  };

  const handleBlur = () => {
    setIsFocused(null);
  };

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Invalid email address';
        return '';
      case 'phone':
        if (value.trim() === '') return 'Phone number is required';
        if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(value)) return 'Invalid phone number';
        return '';
      case 'message':
        if (value.trim() === '') return 'Message is required';
        if (value.trim().length < 50) return 'Message must be at least 50 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field on change
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
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
          projectType: '',
          budget: '',
          message: '',
          file: null,
          facebook: '',
          instagram: '',
          tiktok: '',
          messenger: '',
          linkedin: '',
          twitter: ''
        });
        setStep(1);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
    }
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
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = 'Project type is required';
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 50) {
        newErrors.message = 'Message must be at least 50 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-3 max-w-xl mx-auto w-full px-4">
            <div className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full rounded-lg border ${
                      isFocused === 'name' ? 'border-primary-purple' : 'border-gray-700'
                    } bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple transition-colors duration-200`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <FiAlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                  )}
                  </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
                </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full rounded-lg border ${
                      isFocused === 'email' ? 'border-primary-purple' : 'border-gray-700'
                    } bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple transition-colors duration-200`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <FiAlertCircle className="h-5 w-5 text-red-400" />
                </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
          </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full rounded-lg border ${
                      isFocused === 'phone' ? 'border-primary-purple' : 'border-gray-700'
                    } bg-white/5 px-4 py-2.5 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple transition-colors duration-200`}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <FiAlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  )}
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <FiAlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-base font-medium text-white mb-2 flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-primary-purple" />
                Social Media Profiles (Optional)
              </h4>
              <div className="space-y-2">
                {socialMediaFields.map((field) => (
                        <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-1">
                            {field.label}
                          </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <field.icon className="h-4 w-4 text-gray-400" />
                      </div>
                            <input
                        type="url"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof FormData] as string}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field.name)}
                        onBlur={handleBlur}
                        className={`mt-1 block w-full rounded-lg border ${
                          isFocused === field.name ? 'border-primary-purple' : 'border-gray-700'
                        } bg-white/5 pl-9 pr-4 py-2.5 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple transition-colors duration-200`}
                        placeholder={field.placeholder}
                      />
                    </div>
                        </div>
                      ))}
                    </div>
            </div>

            <motion.button
              type="button"
              onClick={handleNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
            >
              Next Step <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 max-w-xl mx-auto w-full px-4">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-300">
                Project Type
                      </label>
                      <select
                id="projectType"
                name="projectType"
                        value={formData.projectType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple appearance-none"
                required
                      >
                <option value="" className="bg-[#1a1a1a]">Select a project type</option>
                        {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#1a1a1a]">{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>
                      )}
                    </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                Budget Range (Optional)
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  ₱
                </span>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-700 bg-[#1a1a1a] pl-7 pr-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple"
                  placeholder="Enter your budget"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Project Details
                      </label>
                      <textarea
                id="message"
                name="message"
                        value={formData.message}
                onChange={handleChange}
                rows={8}
                className="mt-1 block w-full h-80 rounded-lg border border-gray-700 bg-[#1a1a1a] px-4 py-3 text-white placeholder-gray-400 focus:border-primary-purple focus:outline-none focus:ring-1 focus:ring-primary-purple resize-none"
                placeholder="Tell us about your project requirements, goals, and any specific features you'd like to include."
                required
                      />
                      {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
                    </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Attach Files (Optional)
                      </label>
                      <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg bg-[#1a1a1a]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) handleFileSelect(file);
                }}
              >
                <div className="space-y-1 text-center">
                  <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-primary-purple hover:text-primary-purple/80 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        ref={fileInputRef}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileSelect(file);
                        }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                    </div>
                  <p className="text-xs text-gray-400">
                    PDF, DOC, DOCX up to 5MB
                        </p>
                      </div>
                    </div>
              {errors.file && (
                <p className="mt-1 text-sm text-red-400">{errors.file}</p>
                )}
            </div>

            <div className="flex gap-4">
                  <motion.button
                    type="button"
                onClick={handleBack}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <FiArrowLeft className="w-4 h-4" /> Back
                  </motion.button>
                  <motion.button
                    type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                    <span className="animate-spin">⏳</span> Submitting...
                      </>
                    ) : (
                  <>
                    Submit <FiCheckCircle className="w-4 h-4" />
                  </>
                )}
              </motion.button>
              </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1:
        return "Step 1: Your Information";
      case 2:
        return "Step 2: Project Details & Requirements";
      default:
        return "";
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
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
          {/* Contact Info with Feedback Messages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
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
            </div>

            {/* Feedback Messages */}
            <div className="mt-8">
              <FeedbackMessages className="h-[500px]" />
          </div>
          </motion.div>

          {/* Contact Form */}
              <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm h-[1000px] flex flex-col"
          >
            {/* Progress Label */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                {getStepLabel(step)}
              </h3>
              <div className="flex justify-center gap-2">
                {[1, 2].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      stepNumber === step
                        ? 'bg-primary-purple w-8'
                        : stepNumber < step
                        ? 'bg-primary-purple/50 w-8'
                        : 'bg-gray-700 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center">
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    {renderStep()}
                  </AnimatePresence>
                </div>
          </div>
            </form>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;