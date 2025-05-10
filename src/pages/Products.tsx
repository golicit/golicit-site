import React from 'react';
import { Shield, Zap, Code } from 'lucide-react';
import Footer from '../components/Footer';

const products = [
  {
    name: 'SecureShield Pro',
    icon: Shield,
    description: 'Enterprise-grade security solution with advanced threat detection and real-time monitoring.',
    features: ['24/7 Monitoring', 'Threat Detection', 'Automated Response', 'Compliance Reports'],
    price: '$299/month'
  },
  {
    name: 'CloudFlow',
    icon: Zap,
    description: 'Scalable cloud infrastructure management platform for optimal performance and cost efficiency.',
    features: ['Auto-scaling', 'Load Balancing', 'Resource Optimization', 'Cost Analytics'],
    price: '$199/month'
  },
  {
    name: 'DevStack Suite',
    icon: Code,
    description: 'Complete development toolkit for modern software teams with integrated CI/CD pipeline.',
    features: ['Git Integration', 'Automated Testing', 'Deployment Tools', 'Team Collaboration'],
    price: '$399/month'
  }
];

export default function Products() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Our Products</h1>
          <p className="mt-4 text-xl text-blue-100 text-center">
            Cutting-edge solutions for modern businesses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <p className="text-2xl font-bold text-indigo-600">{product.price}</p>
                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}