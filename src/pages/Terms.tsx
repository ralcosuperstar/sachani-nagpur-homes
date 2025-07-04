import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Terms & Conditions</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using our website, contacting us, or engaging with our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
                <p className="text-gray-600 mb-4">
                  Sachani Group provides the following services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Development and sale of residential properties</li>
                  <li>Development and sale of commercial properties</li>
                  <li>Layout and plotting projects</li>
                  <li>Home loan assistance and guidance</li>
                  <li>Legal documentation support</li>
                  <li>Property consultation services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking and Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  All property bookings are subject to the following terms:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All bookings require execution of a formal agreement</li>
                  <li>Payment schedules are as per the agreed payment plan</li>
                  <li>Delays in payment may result in penalty charges</li>
                  <li>Cancellation terms are as specified in the booking agreement</li>
                  <li>All payments are subject to applicable taxes and charges</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Specifications</h2>
                <p className="text-gray-600">
                  While we strive for accuracy, property specifications, floor plans, amenities, and other details are subject to change based on technical requirements, regulatory approvals, and construction feasibility. Any changes will be communicated to buyers in advance, and final specifications will be as per the executed agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Possession and Delivery</h2>
                <p className="text-gray-600">
                  Possession dates mentioned are tentative and subject to regulatory approvals, weather conditions, and other factors beyond our control. We will make every effort to complete projects on time and will communicate any delays promptly to buyers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Compliance</h2>
                <p className="text-gray-600">
                  All our projects comply with local regulations and have necessary approvals. We are registered under RERA and follow all applicable real estate laws. Buyers are advised to verify all legal documents and clearances independently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                <p className="text-gray-600">
                  We are committed to protecting your privacy and personal information. All data collected is used solely for the purpose of providing our services and is not shared with third parties without your consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600">
                  All content on this website, including text, images, designs, and logos, is the intellectual property of Sachani Group and is protected by copyright laws. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Our liability is limited to the terms specified in individual property agreements. We shall not be liable for any indirect, consequential, or punitive damages arising from the use of our services or this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For any questions regarding these Terms and Conditions, please contact us:
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

export default Terms;