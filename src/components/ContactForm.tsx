'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiUploadCloud, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';
import lanceAvatar from '@/public/images/lance-avatar.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  projectType: string;
  message: string;
  file: File | null;
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
        });
        setStep(1);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#131B2C] to-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-30 pointer-events-none" />
          
          <div className="absolute -right-96 w-96 h-full hidden xl:block">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl h-full p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-gray-300 mb-6">Our Location</h3>
              
              <div className="h-64 mb-6 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.758179041833!2d121.0143153153001!3d14.5545341898321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830b40c!2sMakati%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1690000000000!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col p-8 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <svg 
                        className="w-6 h-6 text-indigo-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    1234 Makati Avenue,<br />
                    Makati City, Metro Manila,<br />
                    Philippines
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-300">+63 2 1234 5678</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-300">info@yourcompany.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                Start Your Project
              </motion.h2>
              <p className="mt-2 text-sm sm:text-base text-gray-400">We'll respond within 24 hours</p>
            </div>

            <div className="mb-6 sm:mb-8 flex justify-center space-x-2 sm:space-x-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      step >= num 
                        ? 'bg-indigo-500 text-white' 
                        : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-8 h-1 sm:w-12 ${step > num ? 'bg-indigo-500' : 'bg-white/10'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode='wait'>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      {[
                        {
                          label: 'Name *',
                          name: 'name',
                          type: 'text',
                          value: formData.name,
                          error: errors.name,
                        },
                        {
                          label: 'Email *',
                          name: 'email',
                          type: 'email',
                          value: formData.email,
                          error: errors.email,
                        },
                        {
                          label: 'Phone *',
                          name: 'phone',
                          type: 'tel',
                          value: formData.phone,
                          error: errors.phone,
                          placeholder: '+1 (555) 555-5555',
                        },
                        {
                          label: 'Budget',
                          name: 'budget',
                          type: 'text',
                          value: formData.budget,
                          error: errors.budget,
                          placeholder: 'Enter your budget in ₱',
                        },
                      ].map((field: FormField) => (
                        <div key={field.name}>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {field.label}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              value={field.value}
                              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                              className="w-full px-4 py-3 bg-[#1E293B] rounded-lg border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-300"
                            >
                              <option value="" className="bg-[#1E293B] text-gray-300">
                                Select {field.label.toLowerCase()}
                              </option>
                              {field.options?.map((option) => (
                                <option 
                                  key={option} 
                                  value={option}
                                  className="bg-[#1E293B] text-gray-300 hover:bg-indigo-500"
                                >
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              {...field}
                              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                              className={`w-full px-4 py-3 bg-white/5 rounded-lg border ${
                                field.error ? 'border-red-400/50' : 'border-white/10'
                              } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all`}
                            />
                          )}
                          {field.error && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-sm text-red-400 mt-1"
                            >
                              {field.error}
                            </motion.p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-300"
                      >
                        <option value="" className="bg-[#1E293B] text-gray-300">
                          Select your project type
                        </option>
                        {projectTypes.map((type) => (
                          <option 
                            key={type} 
                            value={type}
                            className="bg-[#1E293B] text-gray-300 hover:bg-indigo-500"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-red-400 mt-1"
                        >
                          {errors.projectType}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="mt-4 sm:mt-6">
                      <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 text-sm sm:text-base bg-white/5 rounded-lg border ${
                          errors.message ? 'border-red-400/50' : 'border-white/10'
                        } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all min-h-[120px] sm:min-h-[150px]`}
                        placeholder="Describe your project in detail..."
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-red-400 mt-1"
                        >
                          {errors.message}
                        </motion.p>
                      )}
                      <p className="text-sm text-gray-400 mt-2">Minimum 50 characters</p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                        Attachments (Optional)
                      </label>
                      <div
                        className={`border-2 border-dashed ${
                          errors.file ? 'border-red-400/50' : 'border-white/10'
                        } rounded-lg p-6 sm:p-8 text-center cursor-pointer transition-colors hover:border-indigo-400/50`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className="space-y-2">
                          <FiUploadCloud className="w-8 h-8 text-gray-400 mx-auto" />
                          <p className="text-gray-400">
                            {formData.file ? (
                              <span className="text-indigo-400">
                                {formData.file.name}
                              </span>
                            ) : (
                              <>
                                Drag & drop files or{' '}
                                <span className="text-indigo-400">browse</span>
                              </>
                            )}
                          </p>
                          <p className="text-sm text-gray-500">
                            PDF, DOC, JPG, PNG (max 5MB)
                          </p>
                        </div>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-gray-300 mb-4">
                        Review Information
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Name', value: formData.name },
                          { label: 'Email', value: formData.email },
                          { label: 'Phone', value: formData.phone },
                          { label: 'Project Type', value: formData.projectType },
                          { label: 'Budget', value: formData.budget || 'Not specified' },
                        ].map((item) => (
                          <div key={item.label} className="flex justify-between">
                            <span className="text-gray-400">{item.label}:</span>
                            <span className="text-gray-300">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-gray-300 mb-4">
                        Project Details
                      </h3>
                      <div className="bg-[#1E293B] p-4 rounded-lg max-h-64 overflow-y-auto">
                        <p className="text-gray-300 whitespace-pre-wrap break-words">
                          {formData.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-6">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-2.5 text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                  >
                    Back
                  </motion.button>
                )}
                {step < 3 ? (
                  <motion.button
                    type="button"
                    onClick={() => {
                      if (validateStep(step)) {
                        setStep(step + 1);
                      }
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-indigo-500/20 transition-all"
                  >
                    Continue
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <FiCheckCircle className="w-5 h-5" />
                        Success!
                      </>
                    ) : (
                      'Submit Project'
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl pt-12 sm:pt-16 p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-between"
        >
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-6">
            <img 
              src="/images/lance-avatar.png"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/160'; // Fallback image
              }}
              alt="Lance Valle"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg"
            />
            <div className="text-center">
              <h4 className="text-2xl sm:text-3xl font-semibold text-white">Lance Valle</h4>
              <p className="text-sm sm:text-base text-white/60 mt-2">Web Development Expert</p>
            </div>
          </div>

          {/* Quotes Section with Transition */}
          <div className="flex-1 flex flex-col justify-center my-8">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="relative bg-white/5 rounded-xl p-6">
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-white/5 transform rotate-45" />
                  <p className="text-lg sm:text-xl text-white/80 italic text-center">
                    "{quotes[currentQuoteIndex].text}"
                  </p>
                </div>
                <p className="text-sm sm:text-base text-white/60 text-center">
                  - {quotes[currentQuoteIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Need Guidance Section */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Need Custom Guidance?
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto">
              Let's craft your unique digital solution together
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-sm sm:text-base text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all"
            >
              <HiMail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;