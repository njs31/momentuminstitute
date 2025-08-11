import React from "react";
import { Phone, MapPin, Clock, Mail, ExternalLink } from "lucide-react";

const Contact: React.FC = () => {

  const mapUrl =
    "https://www.google.com/maps/place/Momentum+Institute/@26.5205405,80.2606177,15.73z/data=!4m6!3m5!1s0x399c37901330325d:0x542f3b3b9089b684!8m2!3d26.5202279!4d80.2588709!16s%2Fg%2F11m6388q4y?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for admissions, course information, or any
              academic guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-6 sm:mb-8">
                Get in Touch
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent text-sm sm:text-base">
                      Phone
                    </h3>
                    <a
                      href="tel:8340118918"
                      className="text-base sm:text-lg text-gray-600 hover:text-primary transition-colors"
                    >
                      8340118918
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent text-sm sm:text-base">
                      Address
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">
                      Kanpur, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent text-sm sm:text-base">
                      Operating Hours
                    </h3>
                    <div className="text-base sm:text-lg text-gray-600">
                      <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                <h3 className="font-bold text-accent mb-2 sm:mb-3 text-sm sm:text-base">
                  Quick Contact
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  For immediate assistance, call us directly or visit our center
                  during operating hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="tel:8340118918"
                    className="bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center text-sm sm:text-base"
                  >
                    Call Now
                  </a>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-accent border-2 border-accent px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors text-center flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Form Link */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-accent mb-4 sm:mb-6">
                Request a Call Back
              </h2>

              <div className="mb-6">
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Fill out our form to request a callback from our team. We'll get back to you as soon as possible.
                </p>
                
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdW6iIOxzSYwbyZiV6XLwDgdHnd5hNRuxJ2XJ0fqalZwYTO0Q/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-sm sm:text-base"
                >
                  <span>Open Request Form</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="text-xs text-gray-500">
                <p>You will be redirected to Google Forms to submit your request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-2 sm:mb-4">
              Find Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Visit our center for a personal consultation
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890123!2d80.2588709!3d26.5202279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37901330325d%3A0x542f3b3b9089b684!2sMomentum%20Institute!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Momentum Institute Location"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
