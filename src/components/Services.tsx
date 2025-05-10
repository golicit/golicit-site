import React from 'react';
import { GraduationCap, Stethoscope, Code, Server, Building2, Smartphone } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'School Management Software',
    description: 'Comprehensive education management system designed for schools, colleges, and universities.',
    features: ['Admission Management', 'Academic Planning', 'Fee Management', 'Student Portal']
  },
  {
    icon: Stethoscope,
    title: 'Software for Hospital Management',
    description: 'Integrated healthcare management solution for hospitals and clinics.',
    features: ['Patient Management', 'Appointment Scheduling', 'Billing System', 'Medical Records']
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your specific business requirements.',
    features: ['Enterprise Applications', 'Workflow Automation', 'Integration Services', 'Legacy Modernization']
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Development',
    description: 'Modern web and mobile applications for enhanced user experience.',
    features: ['Responsive Websites', 'Mobile Apps', 'Progressive Web Apps', 'UI/UX Design']
  },
  {
    icon: Server,
    title: 'Cloud Solutions',
    description: 'IaaS, SaaS, and PaaS infrastructure for scalable business operations.',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Managed Services', 'Security Solutions']
  },
  {
    icon: Building2,
    title: 'Legal Sector Solutions',
    description: 'Specialized software solutions for legal practices and institutions.',
    features: ['Case Management', 'Document Management', 'Client Portal', 'Billing & Time Tracking']
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for your industry needs</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center group transition-all duration-300 hover:-translate-y-2 rounded-xl p-8 bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mx-auto">
                  <IconComponent className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}