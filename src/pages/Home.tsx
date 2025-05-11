import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import ProcessSection from '../components/ProcessSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GoLicit Services - Innovative Technology Solutions</title>
        <meta name="description" content="GoLicit Services - Kolkata's leading technology firm specializing in ERP solutions for education, healthcare, and legal sectors. Transform your operations with our intelligent cloud solutions." />
        <meta name="keywords" content="ERP solutions, cloud technology, education management, healthcare management, legal sector solutions, Kolkata technology company" />
      </Helmet>
      <div>
        <Hero />
        <Services />
        <TechStack />
        <ProcessSection />
        {/* <Testimonials /> */}
        <ContactForm />
        
      </div>
    </>
  );
}