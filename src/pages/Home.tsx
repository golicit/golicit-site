import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import ProcessSection from '../components/ProcessSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <TechStack />
      <ProcessSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}