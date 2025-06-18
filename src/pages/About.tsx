
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Eye, CheckCircle, Users, Award, Building } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Gourishankar Sachani",
      role: "Founder",
      experience: "25+",
      description: "With over 25 years of experience in the real estate and construction industry, Gourishankar Sachani's deep expertise, commitment to quality, and dedication have been instrumental in shaping the company's legacy across Nagpur. Under his guidance, Sachani Group has delivered numerous residential and commercial projects marked by integrity and excellence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Akash Sachani",
      role: "Director",
      education: "Civil Engineering, MBA",
      description: "Akash Sachani, a Civil Engineering graduate with an MBA from NMIMS Mumbai, brings a unique blend of technical expertise and strategic business insight to Sachani Group. He is focused on expanding the company's legacy through innovation and quality real estate in Nagpur.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sahil Sachani",
      role: "Director",
      education: "CA (Final Stage)",
      description: "Sahil Sachani currently in the final stage of his Chartered Accountancy (CA) qualification, brings a dynamic vision to Sachani Group, focusing on diversifying the business through new collaborations and ideas, helping to expand the group's horizons beyond traditional real estate.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const achievements = [
    { icon: Building, number: "2M+", label: "Sq.ft. Developed", color: "blue" },
    { icon: Users, number: "1,500+", label: "Families Served", color: "green" },
    { icon: Award, number: "500+", label: "Business Clients", color: "purple" },
    { icon: CheckCircle, number: "25+", label: "Years Experience", color: "orange" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Sachani Group</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sachani Group is a diversified real estate and construction enterprise based in Nagpur, 
              with a legacy of over 25 years in delivering high-quality residential and commercial developments.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Legacy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Focused on long-term value creation, the Group has successfully developed over 2 million square feet 
                across central India, earning the trust of 1,500+ families and 500+ businesses.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, Sachani Group has established itself as a reliable, performance-driven developer — 
                committed to timely execution, thoughtful design, and construction excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rooted in strong family values and guided by next-generation leadership, Sachani Group continues 
                to contribute to Nagpur's urban growth story — while exploring new opportunities for regional expansion.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Modern Construction"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="text-blue-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver top-quality, affordable, and sustainable real estate solutions that transform 
                the way people live, work, and invest.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="text-blue-600 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a trusted and innovative real estate developer in Nagpur and beyond, creating sustainable, 
                high-quality spaces that enrich communities and stand the test of time, and pursuing diversification 
                and strategic collaborations to drive growth and innovation of the group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${achievement.color}-100 rounded-full mb-6`}>
                  <achievement.icon className={`text-${achievement.color}-600`} size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">The visionary leaders behind Sachani Group's success</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{founder.role}</p>
                  {founder.experience && (
                    <p className="text-sm text-gray-500 mb-4">{founder.experience} Years Experience</p>
                  )}
                  {founder.education && (
                    <p className="text-sm text-gray-500 mb-4">{founder.education}</p>
                  )}
                  <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sachani Group?</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence sets us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "25+ Years of Legacy",
              "Trusted by 1,500+ Families & Businesses",
              "Transparent Pricing & Ethical Practices",
              "On-Time Delivery, Every Time",
              "Modern Amenities with Vastu-Compliant Design",
              "End-to-End Real Estate Solutions"
            ].map((point, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-lg">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0" size={24} />
                <p className="text-gray-900 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
