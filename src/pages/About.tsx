import React from 'react';
import { Users, Award, Target, Globe } from 'lucide-react';
import Footer from '../components/Footer';

const stats = [
  { label: 'Clients Served', value: '100+', color: 'from-blue-500 to-indigo-500' },
  { label: 'Team Members', value: '50+', color: 'from-indigo-500 to-purple-500' },
  { label: 'Projects Delivered', value: '200+', color: 'from-purple-500 to-pink-500' },
  { label: 'Years of Excellence', value: '10+', color: 'from-pink-500 to-red-500' }
];

const values = [
  {
    icon: Target,
    title: 'Our Vision',
    description: 'To be the leading technology partner for businesses seeking digital transformation through innovative solutions.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Award,
    title: 'Our Mission',
    description: 'Delivering cutting-edge technology solutions that drive growth and efficiency for our clients across education, healthcare, and legal sectors.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated team of professionals committed to excellence in software development and client service.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Our Reach',
    description: 'Serving clients across India with our headquarters in Kolkata, providing local expertise with global standards.',
    color: 'from-pink-500 to-red-500'
  }
];

export default function About() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            About GoLicit
          </h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Your trusted partner in digital transformation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative p-6 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="prose prose-lg mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Story
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <p className="text-gray-600 mb-6 leading-relaxed">
              GoLicit Services Private Limited is a Kolkata-based technology firm specializing in delivering cutting-edge SaaS and PaaS solutions. We focus on providing comprehensive ERP systems for educational institutions, healthcare facilities, and legal practices.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our expertise spans across custom software development, cloud solutions, and enterprise-level management systems. We take pride in our ability to understand unique industry requirements and deliver tailored solutions that drive business growth and efficiency.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-xl text-center relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                    <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} p-1 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <IconComponent className="h-10 w-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
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