
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
              <a href="tel:+918265011135" className="bg-[#684a47] text-white px-4 py-2 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 flex items-center gap-2">
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
                <MapPin size={16} className="mt-1 text-[#684a47]" />
                <p className="text-gray-300 text-sm">
                  Shop no.18 & 19, Upper Lobby floor, J.B. Wing, NMC Complex, Mangalwari Bazar road, Sadar, Nagpur- 440001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#684a47]" />
                <div className="flex flex-col">
                  <a href="tel:+918262011135" className="text-gray-300 hover:text-white">+91 8262011135</a>
                  <a href="tel:+918265011135" className="text-gray-300 hover:text-white">+91 8265011135</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#684a47]" />
                <a href="mailto:sachanigroup@gmail.com" className="text-gray-300 hover:text-white">sachanigroup@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#684a47]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://instagram.com/sachanigroup" className="text-gray-300 hover:text-white">@sachanigroup</a>
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
