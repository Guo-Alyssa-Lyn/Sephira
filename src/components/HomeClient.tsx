'use client';

import MainLayout from './layout/MainLayout';
import Hero from './Hero';
import Features from './Features';
import Stats from './Stats';
import MissionVision from './MissionVision';
import Testimonials from './Testimonials';
import MeetTheFounders from './MeetTheFounders';
import FAQ from './FAQ';
import Newsletter from './Newsletter';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
export default function HomeClient() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Portfolio />
      <Stats />
      <MissionVision />
      <Testimonials />
      <MeetTheFounders />
      <FAQ />
      <Newsletter />
      <ContactForm />
    </MainLayout>
  );
} 