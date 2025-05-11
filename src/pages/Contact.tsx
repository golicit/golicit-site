import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - GoLicit Technology Solutions</title>
        <meta name="description" content="Get in touch with GoLicit's expert team. We're here to help you transform your business with innovative technology solutions. Contact us today for a consultation." />
        <meta name="keywords" content="contact GoLicit, technology consultation, business solutions, IT support, customer service" />
      </Helmet>
      <div className="pt-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
            <p className="mt-4 text-xl text-blue-100 text-center">
              Get in touch with our team to discuss your needs
            </p>
          </div>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}