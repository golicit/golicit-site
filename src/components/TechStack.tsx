import React from 'react';
import { Code2, Database, Cloud, Cpu } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend Development',
    icon: Code2,
    techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend Development',
    icon: Database,
    techs: ['Node.js', 'Python', 'Java', 'Go', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Cloud Services',
    icon: Cloud,
    techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless']
  },
  {
    category: 'Emerging Tech',
    icon: Cpu,
    techs: ['AI/ML', 'Blockchain', 'IoT', 'Edge Computing', 'Big Data', 'AR/VR']
  }
];

export default function TechStack() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Technology Stack</h2>
          <p className="mt-4 text-xl text-gray-600">
            We use cutting-edge technologies to build modern solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                  <IconComponent className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{tech.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.techs.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    >
                      {t}
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