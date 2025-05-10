import React from 'react';
import { Users, Award, Target, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const stats = [
  { label: 'Clients Served', value: '100+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Projects Delivered', value: '200+' },
  { label: 'Years of Excellence', value: '10+' }
];

const values = [
  {
    icon: Target,
    title: 'Our Vision',
    description: 'To be the leading technology partner for businesses seeking digital transformation through innovative solutions.'
  },
  {
    icon: Award,
    title: 'Our Mission',
    description: 'Delivering cutting-edge technology solutions that drive growth and efficiency for our clients across education, healthcare, and legal sectors.'
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated team of professionals committed to excellence in software development and client service.'
  },
  {
    icon: Globe,
    title: 'Our Reach',
    description: 'Serving clients across India with our headquarters in Kolkata, providing local expertise with global standards.'
  }
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">About GoLicit</h1>
          <p className="mt-4 text-xl text-blue-100 text-center">
            Your trusted partner in digital transformation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
          <p className="text-gray-600 mb-6">
            GoLicit Services Private Limited is a Kolkata-based technology firm specializing in delivering cutting-edge SaaS and PaaS solutions. We focus on providing comprehensive ERP systems for educational institutions, healthcare facilities, and legal practices.
          </p>
          <p className="text-gray-600 mb-6">
            Our expertise spans across custom software development, cloud solutions, and enterprise-level management systems. We take pride in our ability to understand unique industry requirements and deliver tailored solutions that drive business growth and efficiency.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}