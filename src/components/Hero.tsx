import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Transforming Operations with
              <span className="block text-blue-200">Intelligent Cloud Solutions</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              Delivering advanced Learning Management Systems, Hospital & Diagnostic Center Management, and Lawyer Management Platforms — all powered by our scalable SaaS and PaaS-based cloud architecture. Empowering institutions with streamlined, secure, and future-ready ERP solutions.
            </p>
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-blue-50 transition duration-150">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
    </div>
  );
}