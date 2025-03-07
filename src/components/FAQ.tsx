'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiMail } from 'react-icons/hi';
import { CodeBracketIcon, WalletIcon, ClockIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const faqCategories = [
  {
    title: 'Services',
    icon: CodeBracketIcon,
    questions: [
      {
        question: 'What web development services do you offer?',
        answer: 'We specialize in custom web application development, e-commerce solutions, mobile app development, UI/UX design, and digital transformation services.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer comprehensive maintenance packages including security updates, performance optimization, and feature enhancements.'
      }
    ]
  },
  {
    title: 'Pricing',
    icon: WalletIcon,
    questions: [
      {
        question: 'What is your pricing model?',
        answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team options tailored to your needs.'
      },
      {
        question: 'Do you provide free consultations?',
        answer: 'Yes, we offer free initial consultations to understand your project requirements and provide accurate estimates.'
      }
    ]
  },
  {
    title: 'Timeline',
    icon: ClockIcon,
    questions: [
      {
        question: 'How long does a typical web development project take?',
        answer: 'Project timelines vary based on complexity, but most projects range from 4-12 weeks. We provide detailed timelines during project planning.'
      },
      {
        question: 'What factors affect project timelines?',
        answer: 'Factors include project scope, feature complexity, client feedback cycles, and third-party integrations.'
      }
    ]
  },
  {
    title: 'Support',
    icon: ChatBubbleOvalLeftEllipsisIcon,
    questions: [
      {
        question: 'What support options do you provide after launch?',
        answer: 'We offer 24/7 technical support, regular maintenance packages, and dedicated account managers for enterprise clients.'
      },
      {
        question: 'How quickly do you respond to support requests?',
        answer: 'Our average response time is under 1 hour for critical issues, with most requests resolved within 4 hours.'
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Common Inquiries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential information about our development process and client collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {faqCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              {category.questions.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.005 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="shrink-0"
        >
          <HiChevronDown className="w-6 h-6 text-indigo-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;