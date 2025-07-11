
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ImageViewer from '../components/ImageViewer';
import { Camera, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/de745a54-5b8f-4963-a84e-91345a3e3ee8.png",
      alt: "Hitesh Imperial - Exterior View",
      category: "Exterior Views"
    },
    {
      id: 2,
      src: "/lovable-uploads/c3a1c9e6-65fe-4899-a476-477cb57e2da9.png",
      alt: "Hitesh Imperial - Evening View",
      category: "Exterior Views"
    },
    {
      id: 3,
      src: "/lovable-uploads/1c47ad93-92ad-482e-ac79-0bbbbb4cd6ca.png",
      alt: "Hitesh Imperial - Side View",
      category: "Exterior Views"
    },
    {
      id: 4,
      src: "/lovable-uploads/8dfdbd46-2fd0-4219-a1da-a0cfd2feabe1.png",
      alt: "2 BHK Floor Plan",
      category: "Floor Plans"
    },
    {
      id: 5,
      src: "/lovable-uploads/d8364319-d45e-41f0-baed-47489f08be14.png",
      alt: "3 BHK Floor Plan",
      category: "Floor Plans"
    },
    {
      id: 6,
      src: "/lovable-uploads/237eee8f-06b7-464a-9312-211a1243d18b.png",
      alt: "Shree Krishna Nagari - Location Map",
      category: "Location Maps"
    },
    {
      id: 7,
      src: "/lovable-uploads/917d38bc-cd1a-4655-bcee-71769eb79668.png",
      alt: "Shree Krishna Nagari - Plot Layout",
      category: "Layout Plans"
    }
  ];

  const categories = [
    "All",
    "Exterior Views",
    "Floor Plans",
    "Location Maps",
    "Layout Plans"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedImage, setSelectedImage] = React.useState<{src: string; alt: string} | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleScheduleVisit = () => {
    window.location.href = 'tel:+918265011135';
  };

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
                onClick={() => setSelectedImage({src: image.src, alt: image.alt})}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#684a47] to-[#5a3e3b]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Schedule a site visit to experience our projects in person and see the quality that sets us apart.
          </p>
          <button
            onClick={handleScheduleVisit}
            className="bg-white text-[#684a47] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
          >
            Schedule Site Visit
          </button>
        </div>
      </section>

      <Footer />
      
      {/* Image Viewer */}
      <ImageViewer
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Gallery;
