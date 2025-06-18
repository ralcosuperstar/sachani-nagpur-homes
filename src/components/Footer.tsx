
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sachani Group</h3>
            <p className="text-gray-300 mb-4">
              25+ years of legacy in delivering quality real estate solutions in Nagpur.
            </p>
            <div className="flex space-x-4">
              <a href="tel:7300230028" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Projects</li>
              <li>Commercial Projects</li>
              <li>Layout Projects</li>
              <li>Home Loan Assistance</li>
              <li>Legal Documentation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-blue-400" />
                <p className="text-gray-300 text-sm">
                  Shop no.18 & 19, Upper Lobby floor, J.B. Wing, NMC Complex, Mangalwari Bazar road, Sadar, Nagpur- 440001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:7300230028" className="text-gray-300 hover:text-white">7300230028</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:abcxyz@gmail.com" className="text-gray-300 hover:text-white">abcxyz@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Sachani Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-gray-300 hover:text-white text-sm">Disclaimer</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
