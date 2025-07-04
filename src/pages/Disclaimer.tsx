import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Disclaimer</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Important information regarding the use of our website and services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
                <p className="text-gray-600">
                  The information on this website is provided for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Information</h2>
                <p className="text-gray-600 mb-4">
                  All property information, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Project specifications and floor plans</li>
                  <li>Pricing and payment schedules</li>
                  <li>Amenities and facilities</li>
                  <li>Construction timelines and possession dates</li>
                  <li>Images and renderings</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  The above information is subject to change without prior notice. We recommend verifying all details directly with our sales team before making any investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">RERA Compliance</h2>
                <p className="text-gray-600">
                  All our projects are registered under the Real Estate Regulation Authority (RERA) as required by law. RERA registration numbers and related documents are available for verification. However, we advise all potential buyers to verify the RERA registration status independently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Advice</h2>
                <p className="text-gray-600">
                  Any reliance you place on the information provided on this website is strictly at your own risk. We do not provide investment advice and recommend that you consult with qualified professionals before making any real estate investment decisions. Past performance of our projects does not guarantee future results.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites or references to third-party services. We do not endorse or assume responsibility for the content, privacy policies, or practices of these third-party sites or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Under no circumstances shall Sachani Group be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of this website or the information contained herein. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For clarifications or questions regarding this disclaimer, please contact us:
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

export default Disclaimer;