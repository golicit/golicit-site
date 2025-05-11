import React from 'react';
import { Lightbulb, FileText, Code, TestTube, Rocket } from 'lucide-react';

const processes = [
  {
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a comprehensive project roadmap.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Preparation of technical and functional specifications for transparency and planning.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our expert team builds your solution using cutting-edge technologies.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures high quality and reliable performance.',
    color: 'from-pink-500 to-red-500'
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'We handle deployment and provide ongoing maintenance and support.',
    color: 'from-red-500 to-orange-500'
  }
];

export default function ProcessSection() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Development Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Animated connecting line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-red-500 to-orange-500 transform -translate-y-1/2 hidden lg:block rounded-full animate-pulse"></div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {processes.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative group">
                  <div className="bg-white p-8 rounded-xl text-center relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                    <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${process.color} p-1 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <IconComponent className="h-10 w-10 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {/* Connecting arrow */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
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