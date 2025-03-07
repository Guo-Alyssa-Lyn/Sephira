'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Newsletter = dynamic(() => import('@/components/Newsletter'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
} 