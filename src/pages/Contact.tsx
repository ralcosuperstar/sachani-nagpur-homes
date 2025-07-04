
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleCall = () => {
    window.location.href = 'tel:+918265011135';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:sachanigroup@gmail.com';
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+918262011135';
    const message = 'Hello! I am visiting from your website and would like more information about your projects.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call Button */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-2 border-green-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Now</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for your queries</p>
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-green-700">+91 8262011135</p>
                <p className="text-lg font-semibold text-green-700">+91 8265011135</p>
              </div>
              <button
                onClick={handleCall}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold w-full"
              >
                Call Now
              </button>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-2 border-green-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat for instant support</p>
              <p className="text-lg font-semibold text-green-700 mb-6">+91 8262011135</p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold w-full"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Email Button */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-2 border-purple-200 text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <p className="text-lg font-semibold text-purple-700 mb-6 break-all">sachanigroup@gmail.com</p>
              <button
                onClick={handleEmail}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold w-full"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 p-8 bg-orange-50 rounded-xl border-2 border-orange-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              For urgent queries or immediate support, call us directly at any time.
            </p>
            <button
              onClick={handleCall}
              className="bg-[#684a47] text-white px-8 py-4 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 font-semibold text-lg inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now: +91 8265011135
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
