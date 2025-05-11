import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Stethoscope, Scale, Building2, Factory } from 'lucide-react';
import Footer from '../components/Footer';

const industries = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Comprehensive solutions for educational institutions.',
    features: [
      'Student Information System',
      'Learning Management',
      'Administrative Tools',
      'Parent Portal'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Integrated systems for healthcare providers.',
    features: [
      'Patient Management',
      'Electronic Health Records',
      'Pharmacy Management',
      'Insurance Processing'
    ]
  },
  {
    icon: Scale,
    title: 'Legal Sector',
    description: 'Specialized solutions for legal practices.',
    features: [
      'Case Management',
      'Document Management',
      'Time & Billing',
      'Client Portal'
    ]
  },
  {
    icon: Building2,
    title: 'Retail & Inventory',
    description: 'End-to-end retail management solutions.',
    features: [
      'Inventory Management',
      'POS Systems',
      'Supply Chain',
      'Customer Analytics'
    ]
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Smart solutions for manufacturing sector.',
    features: [
      'Production Planning',
      'Quality Control',
      'Resource Management',
      'Supply Chain'
    ]
  }
];

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - GoLicit Technology Solutions</title>
        <meta name="description" content="Discover how GoLicit serves diverse industries including education, healthcare, legal sector, retail, and manufacturing with specialized technology solutions." />
        <meta name="keywords" content="education technology, healthcare solutions, legal tech, retail management, manufacturing software, industry solutions" />
      </Helmet>
      <div className="pt-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white text-center">Industries We Serve</h1>
            <p className="mt-4 text-xl text-blue-100 text-center">
              Specialized solutions for diverse sectors
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{industry.title}</h3>
                    <p className="mt-2 text-gray-600">{industry.description}</p>
                    <ul className="mt-4 space-y-2">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}