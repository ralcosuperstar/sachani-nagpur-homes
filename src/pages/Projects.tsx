
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Home, Building, Calendar, CheckCircle, Phone } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    name: "Hitesh Imperial",
    rera: "P50500049710",
    location: "Om Nagar, Jaripatka, Nagpur",
    type: "2 BHK & 3 BHK Premium Flats",
    units: "35 Luxurious 2 BHK | 14 Spacious 3 BHK",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    facilities: [
      "Modular kitchens in every flat",
      "Vitrified tile flooring",
      "POP finish in all rooms",
      "Maximum usable floor area",
      "Excellent cross ventilation",
      "24x7 water supply",
      "Premium fittings & finishes",
      "Ample parking space"
    ],
    amenities: [
      "Children's play area",
      "Open yoga space on the terrace",
      "Green/Mini gym",
      "Jogging track",
      "Society office",
      "Senior citizens' seating area",
      "CCTV surveillance in parking",
      "2 automatic lifts with ARD systems",
      "Fire extinguishers",
      "Rainwater harvesting",
      "Solar power for common areas",
      "B-secure laminated main doors",
      "Godrej Video Door Phone"
    ]
  };

  const completedProjects = [
    "Hitesh Heights",
    "Hitesh Residency",
    "Satyam Shivam Sundaram Apartment",
    "Hariom Apartment",
    "Hitesh Apartment",
    "Hitesh Palace",
    "Mahesh Apartment",
    "Kailashpati Apartment",
    "Divya Apartment",
    "Hitesh Tower",
    "Hitesh Sankul"
  ];

  const layoutProjects = [
    {
      name: "Shri Krishna Nagari",
      status: "Featured/Ongoing",
      type: "Layout Project"
    },
    {
      name: "Yerkheda Layout",
      status: "Upcoming",
      type: "Layout Project"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Our Projects</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover our portfolio of exceptional residential and commercial developments that showcase 
              our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-[#684a47]/10 text-[#684a47] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Featured Project
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Hitesh Imperial</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  RERA Approved
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="bg-[#684a47]/10 text-[#684a47] px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  RERA No. {featuredProject.rera}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{featuredProject.name}</h3>
                
                <div className="space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#684a47] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{featuredProject.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Home className="text-[#684a47] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Configuration</p>
                      <p className="text-gray-600">{featuredProject.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="text-[#684a47] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Total Units</p>
                      <p className="text-gray-600">{featuredProject.units}</p>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="tel:+918265011135" 
                  className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Phone size={16} />
                  Contact for Details
                </a>
              </div>
            </div>
            
            {/* Facilities & Amenities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-t">
              <div className="p-6 sm:p-8 lg:p-12 lg:border-r border-gray-200">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Key Facilities</h4>
                <div className="space-y-3">
                  {featuredProject.facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-600 text-sm sm:text-base">{facility}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-12">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Modern Amenities</h4>
                <div className="grid grid-cols-1 gap-3">
                  {featuredProject.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-600 text-sm sm:text-base">{amenity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg sm:text-xl text-gray-600">Comprehensive real estate solutions for every need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="bg-[#684a47]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="text-[#684a47]" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Residential Projects</h3>
              <p className="text-gray-600">Affordable to premium housing with thoughtful design and modern amenities.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Commercial Projects</h3>
              <p className="text-gray-600">Business-ready offices, showrooms, and commercial hubs for your success.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center md:col-span-2 lg:col-span-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Layout Projects</h3>
              <p className="text-gray-600">Strategically located residential & investment plots for future growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Completed Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              We take pride in delivering homes and commercial landmarks that stand as a testimony to our workmanship and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{project}</h3>
                <p className="text-gray-600 text-sm sm:text-base">Completed residential project in Nagpur</p>
                <div className="mt-4 pt-4 border-t">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Delivered
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layout Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600">Prime plots for residential and investment purposes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {layoutProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold self-start ${
                    project.status === 'Featured/Ongoing' 
                      ? 'bg-[#684a47]/10 text-[#684a47]' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{project.type}</p>
                <a 
                  href="tel:+918265011135" 
                  className="bg-[#684a47] text-white px-6 py-3 rounded-lg hover:bg-[#5a3e3b] transition-colors duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Phone size={16} />
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#684a47] to-[#5a3e3b]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Interested in Our Projects?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8">
            Schedule a site visit or get detailed information about our ongoing and upcoming projects.
          </p>
          <a 
            href="tel:+918265011135" 
            className="bg-white text-[#684a47] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-base sm:text-lg inline-flex items-center gap-2"
          >
            <Phone size={20} />
            Call Now for Site Visit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
