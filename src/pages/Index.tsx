
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, CheckCircle, Users, Building, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#684a47]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to
                <span className="block text-[#684a47]">Sachani Group</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A family name built on trust, quality, and excellence in real estate development across Nagpur. 
                With a legacy spanning over 25 years, we've been shaping the city's skyline through thoughtfully 
                designed residential and commercial spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+918265011135" 
                  className="bg-[#684a47] text-white px-8 py-4 rounded-lg hover:bg-[#5a3e3b] transition-all duration-300 flex items-center justify-center gap-3 text-lg font-semibold hover:scale-105"
                >
                  <Phone size={20} />
                  Call Now for Site Visit
                </a>
                <Link 
                  to="/projects" 
                  className="border-2 border-[#684a47] text-[#684a47] px-8 py-4 rounded-lg hover:bg-[#684a47] hover:text-white transition-all duration-300 text-center text-lg font-semibold"
                >
                  View Projects
                </Link>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
                 <img 
                   src="/lovable-uploads/de745a54-5b8f-4963-a84e-91345a3e3ee8.png"
                   alt="Modern Infrastructure Development"
                   className="w-full h-80 object-cover rounded-xl mb-6"
                 />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-[#684a47]">25+</h3>
                    <p className="text-gray-600">Years Legacy</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-[#684a47]">1,500+</h3>
                    <p className="text-gray-600">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#684a47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <Building size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">16+ Lakh</h3>
              <p className="text-orange-100">Sq.ft. Developed</p>
            </div>
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">1,100+</h3>
              <p className="text-orange-100">Homes Delivered</p>
            </div>
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">400+</h3>
              <p className="text-orange-100">Commercial Clients</p>
            </div>
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-orange-100">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sachani Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, delivered with excellence - discover what makes us Nagpur's preferred real estate partner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "25+ Years of Legacy", desc: "Trusted experience in real estate development" },
              { icon: Users, title: "1,500+ Satisfied Families", desc: "Building lasting relationships with every project" },
              { icon: CheckCircle, title: "Transparent Pricing", desc: "Ethical practices with no hidden costs" },
              { icon: Clock, title: "On-Time Delivery", desc: "Committed to timelines, every single time" },
              { icon: Building, title: "Vastu-Compliant Design", desc: "Modern amenities with traditional wisdom" },
              { icon: Phone, title: "End-to-End Solutions", desc: "Complete real estate services under one roof" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto">
                  <feature.icon className="text-[#684a47]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Discover our premium developments</p>
          </div>
          
          <div className="space-y-12">
            {/* Hitesh Imperial */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12">
                  <div className="bg-orange-100 text-[#684a47] px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    RERA No. P50500049710
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Hitesh Imperial</h3>
                  <p className="text-gray-600 mb-6">
                    Premium 2 BHK & 3 BHK flats in Om Nagar, Jaripatka, Nagpur. 
                    Experience modern living with thoughtfully designed spaces.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900">Configuration</h4>
                      <p className="text-gray-600">2 BHK & 3 BHK</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Total Units</h4>
                      <p className="text-gray-600">49 Premium Flats</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/projects" 
                    className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 inline-block"
                  >
                    View Details
                  </Link>
                </div>
                
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src="/lovable-uploads/de745a54-5b8f-4963-a84e-91345a3e3ee8.png"
                    alt="Hitesh Imperial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Godhni Layout (Shree Krishna Nagari) */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto lg:order-first">
                  <img 
                    src="/lovable-uploads/237eee8f-06b7-464a-9312-211a1243d18b.png"
                    alt="Godhni Layout - Shree Krishna Nagari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Layout Project
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Godhni Layout (Shree Krishna Nagari)</h3>
                  <p className="text-gray-600 mb-6">
                    Premium residential plots in a strategically planned layout with excellent connectivity 
                    and modern infrastructure facilities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Type</h4>
                      <p className="text-gray-600">Residential Layout</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Status</h4>
                      <p className="text-gray-600">Ongoing</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/projects" 
                    className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#684a47] to-[#5a3e3b]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 1,500+ families who trust Sachani Group for their real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918265011135" 
              className="bg-white text-[#684a47] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Schedule Site Visit
            </a>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#684a47] transition-all duration-200 font-semibold text-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
