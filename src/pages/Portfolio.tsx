import React from 'react';
import { CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Educational Institute Management System',
    client: 'Leading University',
    description: 'Comprehensive ERP system for managing academic and administrative operations.',
    impact: [
      'Reduced administrative workload by 40%',
      'Improved student enrollment process efficiency by 60%',
      'Streamlined fee collection process'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Hospital Management Solution',
    client: 'Multi-specialty Hospital',
    description: 'Integrated healthcare management system with patient care focus.',
    impact: [
      'Reduced patient wait times by 50%',
      'Improved resource utilization by 35%',
      'Enhanced patient satisfaction scores'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Legal Practice Management Platform',
    client: 'Law Firm Network',
    description: 'Digital transformation of legal practice management.',
    impact: [
      'Increased case handling efficiency by 45%',
      'Reduced document processing time by 60%',
      'Improved client communication'
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export default function Portfolio() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Our Success Stories</h1>
          <p className="mt-4 text-xl text-blue-100 text-center">
            Transforming businesses through technology
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-indigo-600">{project.client}</p>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900">Impact & Results</h4>
                    <ul className="mt-4 space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}