
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Sachani Group</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Projects</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Gallery</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Blogs</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</Link>
            <a href="tel:7300230028" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</Link>
              <Link to="/gallery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Gallery</Link>
              <Link to="/blogs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blogs</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <a href="tel:7300230028" className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
