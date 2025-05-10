import React from 'react';
import { Lightbulb, Code, TestTube, Rocket } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a comprehensive project roadmap.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our expert team builds your solution using cutting-edge technologies.'
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures high quality and reliable performance.'
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'We handle deployment and provide ongoing maintenance and support.'
  }
];

export default function ProcessSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Development Process</h2>
          <p className="mt-4 text-xl text-gray-600">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-indigo-100 transform -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-lg text-center relative z-10">
                    <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{process.title}</h3>
                    <p className="mt-4 text-gray-600">{process.description}</p>
                  </div>
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-indigo-100 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}