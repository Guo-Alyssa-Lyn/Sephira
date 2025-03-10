'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { theme } from '@/lib/theme';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/#mission-vision' },
  { name: 'Team', href: '/#team' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
] as const;

const Logo = () => (
  <Link href="/">
    <motion.div
      className="relative group cursor-pointer"
      whileHover="hover"
    >
      <motion.span
        className="text-2xl font-bold tracking-tight"
        style={{ 
          background: theme.effects.gradientText,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        variants={{
          hover: {
            scale: 1.05,
            textShadow: "0 0 8px rgba(0, 255, 255, 0.3)",
          }
        }}
      >
        NEMESIS
      </motion.span>
      <motion.div
        className="absolute -inset-x-2 -inset-y-1 rounded-lg"
        variants={{
          hover: {
            background: `radial-gradient(circle, ${theme.colors.primary}10 0%, transparent 70%)`,
          }
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  </Link>
);

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll(); // Set initial scroll state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/') {
      return;
    }
    
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100, // Adjust for navbar height
        behavior: 'smooth'
      });
      setActiveItem(href);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Prevent hydration issues by not rendering motion elements until mounted
  if (!mounted) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                NEMESIS
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex md:hidden">
              <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div 
          className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}
          style={{ 
            background: isScrolled ? theme.colors.background.dark : 'transparent',
            backdropFilter: isScrolled ? 'blur(8px)' : 'none',
            boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          }}
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <motion.span
                      className="relative z-10 px-3 py-2 text-sm font-medium transition-colors duration-200"
                      style={{ 
                        color: activeItem === item.href 
                          ? theme.colors.primary 
                          : theme.colors.text.secondary 
                      }}
                      whileHover={{ color: theme.colors.primary }}
                    >
                      {item.name}
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-md"
                      initial={false}
                      animate={activeItem === item.href ? {
                        backgroundColor: `${theme.colors.primary}10`,
                      } : {
                        backgroundColor: "transparent",
                      }}
                      whileHover={{
                        backgroundColor: `${theme.colors.primary}10`,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: theme.colors.text.primary }}
              >
                <span className="sr-only">Open main menu</span>
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden"
              style={{ 
                background: theme.colors.background.dark,
                backdropFilter: 'blur(8px)'
              }}
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <motion.div
                      className="block rounded-md px-3 py-2 text-base font-medium"
                      style={{ 
                        color: activeItem === item.href 
                          ? theme.colors.primary 
                          : theme.colors.text.secondary 
                      }}
                      whileHover={{
                        color: theme.colors.primary,
                        backgroundColor: `${theme.colors.primary}10`,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 