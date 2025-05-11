import React from 'react';
import { Users, Award, Target, Globe, Linkedin, Mail, Github } from 'lucide-react';
import Footer from '../components/Footer';

const stats = [
  { label: 'Clients Served', value: '10+', color: 'from-blue-500 to-indigo-500' },
  { label: 'Team Members', value: '4+', color: 'from-indigo-500 to-purple-500' },
  { label: 'Projects Delivered', value: '10+', color: 'from-purple-500 to-pink-500' },
  { label: 'Years of Excellence', value: '3+', color: 'from-pink-500 to-red-500' }
];

const teamMembers = [
  {
    name: 'Bhaskar Gayen',
    designation: 'Chief Technology Officer',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    bio: 'Expert in cloud architecture and enterprise solutions with a passion for innovation.',
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      email: 'john@golicit.in'
    }
  },
  {
    name: 'Bhaskar Gayen',
    designation: 'Lead Software Engineer',
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    bio: 'Full-stack developer specializing in scalable applications and microservices.',
    social: {
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      email: 'jane@golicit.in'
    }
  },
  {
    name: 'Himalaya Mukherjee',
    designation: 'Product Manager',
    experience: '6+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    bio: 'Product strategist with expertise in healthcare and education technology.',
    social: {
      linkedin: 'https://linkedin.com/in/mikejohnson',
      github: 'https://github.com/mikejohnson',
      email: 'mike@golicit.in'
    }
  },
  {
    name: 'Sarah Williams',
    designation: 'UX/UI Designer',
    experience: '5+ years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    bio: 'Creative designer focused on creating intuitive and engaging user experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/sarahwilliams',
      github: 'https://github.com/sarahwilliams',
      email: 'sarah@golicit.in'
    }
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
              Founded in 2023, GoLicit Services Pvt. Ltd. began with a clear mission — to simplify and transform how institutions manage their operations through smart, scalable, and secure technology. What started as a vision to build reliable ERP systems has grown into a full-fledged technology company offering specialized solutions across the education, healthcare, and legal sectors.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From our humble beginnings, we've committed ourselves to delivering excellence in SaaS, PaaS, and custom software development, ensuring that our clients not only meet today's demands but are also ready for tomorrow's growth. Every line of code, every deployment, and every solution is built with precision, integrity, and a user-first approach.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At GoLicit, we believe in empowering organizations with technology that works — reliably, intuitively, and at scale.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative pt-8 px-8">
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition-colors duration-200"
                          >
                            <Linkedin className="h-6 w-6" />
                          </a>
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition-colors duration-200"
                          >
                            <Github className="h-6 w-6" />
                          </a>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-white hover:text-teal-400 transition-colors duration-200"
                          >
                            <Mail className="h-6 w-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-teal-600">
                      {member.designation}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Experience: {member.experience}
                    </p>
                    <p className="mt-4 text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}