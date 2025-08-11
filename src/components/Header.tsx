import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
              Momentum Institute
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a
              href="tel:8340118918"
              className="flex items-center space-x-2 text-accent hover:text-primary transition-colors text-sm lg:text-base"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium hidden lg:inline">8340118918</span>
              <span className="font-medium lg:hidden">Call</span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdW6iIOxzSYwbyZiV6XLwDgdHnd5hNRuxJ2XJ0fqalZwYTO0Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Request a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:8340118918"
              className="text-accent hover:text-primary transition-colors p-2"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdW6iIOxzSYwbyZiV6XLwDgdHnd5hNRuxJ2XJ0fqalZwYTO0Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-4 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
