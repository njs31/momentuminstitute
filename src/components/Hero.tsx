import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(135, 206, 235, 0.8), rgba(0, 51, 102, 0.7)), url('/assets/hero.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-2 text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in">
              Momentum Institute –{' '}
              <span className="text-primary">Excellence</span> in Science & Math Education
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 animate-slide-up">
              Guiding students from Class 8 to NEET & JEE success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdW6iIOxzSYwbyZiV6XLwDgdHnd5hNRuxJ2XJ0fqalZwYTO0Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Request a Call
              </a>
              <Link
                to="/courses"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-accent transform hover:scale-105 transition-all duration-200"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* Director Card */}
          <div className="lg:col-span-1 animate-slide-up mt-8 lg:mt-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <img
                  src="/assets/director.jpg"
                  alt="Vivek Sir, Director of Momentum Institute"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-accent">Vivek Sir</h3>
                  <p className="text-xs sm:text-sm text-gray-600">M.Tech — IIT Kanpur</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-accent mb-3">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Institute Director</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Leading excellence in Physics, Chemistry, and Math coaching with years of expertise in competitive exam preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;