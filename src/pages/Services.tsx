import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Code, Database, Cloud, Users, Cpu, LineChart, Globe, Award, Target } from 'lucide-react';
import Footer from '../components/Footer';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your specific business needs.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy System Modernization']
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Security Training']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Expert cloud services for optimal performance and scalability.',
    features: ['Cloud Migration', 'Cloud Architecture', 'DevOps', 'Cloud Security']
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'End-to-end data solutions for better business insights and decision-making.',
    features: ['Data Analytics', 'Big Data', 'Data Warehousing', 'Business Intelligence']
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive digital transformation.',
    features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'IT Roadmap']
  },
  {
    icon: Server,
    title: 'Infrastructure Services',
    description: 'Robust infrastructure solutions for reliable business operations.',
    features: ['Network Design', 'Server Management', 'Disaster Recovery', 'IT Support']
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions to automate and optimize business processes.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models']
  },
  {
    icon: LineChart,
    title: 'Digital Analytics',
    description: 'Comprehensive analytics solutions for data-driven decision making.',
    features: ['Web Analytics', 'Performance Metrics', 'User Behavior Analysis', 'Conversion Optimization']
  }
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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - GoLicit Technology Solutions</title>
        <meta name="description" content="Explore GoLicit's comprehensive technology services including custom software development, cloud solutions, cybersecurity, and more. Transform your business with our expert services." />
        <meta name="keywords" content="software development, cloud solutions, cybersecurity, data management, IT consulting, infrastructure services, AI solutions" />
      </Helmet>
      <div className="pt-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>
            <p className="mt-4 text-xl text-blue-100 text-center">
              Comprehensive technology solutions for your business
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </>
  );
}