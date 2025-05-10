import React from 'react';
import { Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

const positions = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Kolkata, India',
    type: 'Full-time',
    requirements: [
      '5+ years of experience in full stack development',
      'Expertise in React, Node.js, and SQL databases',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong problem-solving skills'
    ]
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Kolkata, India',
    type: 'Full-time',
    requirements: [
      '3+ years of experience in UI/UX design',
      'Proficiency in Figma and Adobe Creative Suite',
      'Portfolio showcasing web and mobile designs',
      'Understanding of user-centered design principles'
    ]
  }
];

export default function Careers() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Join Our Team</h1>
          <p className="mt-4 text-xl text-blue-100 text-center">
            Build your career with a leading technology company
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-xl font-semibold text-gray-900">{position.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  {position.department}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {position.location}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {position.type}
                </span>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Requirements</h4>
                <ul className="mt-4 space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">Don't see a suitable position?</h2>
          <p className="mt-4 text-gray-600">
            We're always looking for talented individuals to join our team. Send us your resume and we'll
            keep you in mind for future opportunities.
          </p>
          <button className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-150">
            Submit Resume
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}