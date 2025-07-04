
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Looking for your dream home or the right investment? Get in touch with our team 
              and let us help you find the perfect property solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get In Touch</h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#684a47]/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-[#684a47]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Shop no.18 & 19, Upper Lobby floor, J.B. Wing, NMC Complex, 
                      Mangalwari Bazar road, Sadar, Nagpur- 440001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <div className="space-y-1">
                      <a 
                        href="tel:+918262011135" 
                        className="text-gray-600 hover:text-green-600 transition-colors text-lg block"
                      >
                        +91 8262011135
                      </a>
                      <a 
                        href="tel:+918265011135" 
                        className="text-gray-600 hover:text-green-600 transition-colors text-lg block"
                      >
                        +91 8265011135
                      </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Available 24/7 for your queries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <a 
                      href="mailto:sachanigroup@gmail.com" 
                      className="text-gray-600 hover:text-purple-600 transition-colors break-all"
                    >
                      sachanigroup@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Call Button */}
              <div className="mt-8 sm:mt-12 p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Call us directly for immediate support and quick responses to your queries.
                </p>
                <a 
                  href="tel:+918265011135" 
                  className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 inline-flex items-center gap-2 font-semibold w-full sm:w-auto justify-center"
                >
                  <Phone size={20} />
                  Call Now: +91 8265011135
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project of Interest
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a project</option>
                    <option value="hitesh-imperial">Hitesh Imperial</option>
                    <option value="shri-krishna-nagari">Shri Krishna Nagari</option>
                    <option value="yerkheda-layout">Yerkheda Layout</option>
                    <option value="other">Other Projects</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#684a47] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#684a47] text-white py-4 px-6 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg sm:text-xl text-gray-600">Located in the heart of Nagpur for easy accessibility</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#684a47] mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#684a47]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="text-[#684a47]" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Central Location</h4>
                  <p className="text-gray-600 text-sm">Easy access from all parts of Nagpur</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Convenient Hours</h4>
                  <p className="text-gray-600 text-sm">Extended hours for your convenience</p>
                </div>
                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Always Available</h4>
                  <p className="text-gray-600 text-sm">24/7 phone support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
