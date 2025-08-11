import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand and Contact Info */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Momentum Institute</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              Excellence in Science & Math Education. Guiding students from Class 8 to NEET & JEE success with expert coaching and personalized attention.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:8340118918" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  8340118918
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Kanpur, Uttar Pradesh</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">Mon-Sat 9:00 AM – 8:00 PM, Sun Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  Student Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm sm:text-base text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-300">
            © {new Date().getFullYear()} Momentum Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;