import React, { useState } from 'react';
import { Facebook, X as XIcon, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PrivacyPolicyModal from './PrivacyPolicyModal';

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-white text-lg font-bold hover:text-gray-300 transition-colors duration-200">
              Golicit
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Transforming Operations with Intelligent Cloud Solutions. Delivering advanced Learning Management Systems, Hospital & Diagnostic Center Management, and Lawyer Management Platforms — all powered by our scalable SaaS and PaaS-based cloud architecture. Empowering institutions with streamlined, secure, and future-ready ERP solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com/golicit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/golicit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <XIcon className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/golicit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:support@golicit.in" className="hover:text-white transition-colors duration-200">support@golicit.in</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+916289203262" className="hover:text-white transition-colors duration-200">6289203262</a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>256, West Ghosh Para Road<br />Shyamnagar<br />West Bengal</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</Link>
              </li>
              {/* <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Case Studies</Link>
              </li> */}
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</Link>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Golicit. All rights reserved.
          </p>
        </div>
      </div>

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </footer>
  );
}