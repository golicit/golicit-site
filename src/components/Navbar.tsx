import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    // { path: '/products', label: 'Products' },
    { path: "/services", label: "Services" },
    { path: "/industries", label: "Industries" },
    // { path: '/portfolio', label: 'Portfolio' },
    { path: "/careers", label: "Careers" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-[200px] h-[80px] bg-white/90 backdrop-blur-sm">
                <img
                  src="/logosvg3.svg"
                  alt="GoLicit Logo"
                  className="w-full h-full object-contain mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-teal-600 px-4 py-2 text-sm font-medium rounded-full hover:bg-white/90 backdrop-blur-sm transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-white/90 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 rounded-full text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-white/90 backdrop-blur-sm transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
