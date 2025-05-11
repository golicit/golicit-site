import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | GoLicit Services</title>
        <meta name="description" content="The page you are looking for could not be found. GoLicit Services - Innovative Technology Solutions." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-600">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="mt-4 text-lg text-gray-600">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
} 