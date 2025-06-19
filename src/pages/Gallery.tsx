
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Play, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      alt: "Modern building exterior",
      category: "Exterior Views"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
      alt: "Apartment complex",
      category: "Completed Projects"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      alt: "Construction site",
      category: "Under Construction"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Residential area",
      category: "Neighborhoods"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      alt: "Evening view",
      category: "Ambiance"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      alt: "Modern interior",
      category: "Interior Design"
    }
  ];

  const categories = [
    "All",
    "Exterior Views",
    "Completed Projects",
    "Under Construction",
    "Neighborhoods",
    "Ambiance",
    "Interior Design"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Visuals That Speak for Themselves - Explore glimpses of our completed homes, ongoing projects, 
              and proud residents who call Sachani their forever home.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Camera size={20} />
              <span>Coming Soon: Hitesh Imperial walkthrough, site images, and 3D renders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#684a47] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-lg font-semibold">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ImageIcon className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Videos</h2>
            <p className="text-xl text-gray-600">Virtual tours and construction progress videos</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-[#684a47] to-[#5a3e3b] flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hitesh Imperial Walkthrough</h3>
                  <p className="text-orange-100">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Virtual Tour</h4>
                <p className="text-gray-600">Experience our premium project through an immersive virtual walkthrough.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Construction Progress</h3>
                  <p className="text-orange-100">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Time-lapse Videos</h4>
                <p className="text-gray-600">Watch our projects come to life through construction progress videos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Residents</h2>
            <p className="text-xl text-gray-600">Stories from families who made Sachani their home</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Camera className="text-gray-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Family {i}</h3>
                <p className="text-gray-600 mb-4">Proud residents of Sachani Group projects</p>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <p className="text-[#684a47] font-medium">Photo Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#684a47] to-[#5a3e3b]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Schedule a site visit to experience our projects in person and see the quality that sets us apart.
          </p>
          <a 
            href="tel:7300230028" 
            className="bg-white text-[#684a47] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
          >
            Schedule Site Visit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
