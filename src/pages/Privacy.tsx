import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Contact us through phone, email, or WhatsApp</li>
                  <li>Visit our office or project sites</li>
                  <li>Inquire about our residential and commercial projects</li>
                  <li>Request information about our properties</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Respond to your inquiries about our projects</li>
                  <li>Provide information about available properties</li>
                  <li>Schedule site visits and meetings</li>
                  <li>Assist with home loan processes and legal documentation</li>
                  <li>Send you updates about new projects and offers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>With your explicit consent</li>
                  <li>To trusted partners who assist us in providing services</li>
                  <li>When required by law or to protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p><strong>Phone:</strong> +91 8262011135, +91 8265011135</p>
                  <p><strong>Email:</strong> sachanigroup@gmail.com</p>
                  <p><strong>Address:</strong> Shop no.18 & 19, Upper Lobby floor, J.B. Wing, NMC Complex, Mangalwari Bazar road, Sadar, Nagpur- 440001</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Last updated: January 4, 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;