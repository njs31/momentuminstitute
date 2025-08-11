import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Users, BookOpen, Phone, MapPin, Star } from "lucide-react";
import Hero from "../components/Hero";
const Home: React.FC = () => {

  const courses = [
    {
      title: "Class 8-10 Foundation",
      description:
        "Strong foundation in Science & Math with focus on concept building and board exam preparation.",
      link: "/courses",
    },
    {
      title: "Class 11-12 (PCM) JEE",
      description:
        "Comprehensive JEE preparation with board alignment and advanced problem-solving techniques.",
      link: "/courses",
    },
    {
      title: "Class 11-12 (PCB) NEET",
      description:
        "Intensive NEET coaching with practical sessions and medical entrance preparation.",
      link: "/courses",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Snapshot */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4 sm:mb-6">
              About Momentum Institute
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Momentum Institute, we believe in nurturing academic excellence
              through personalized attention and expert guidance. Under the
              leadership of Vivek Sir (M.Tech — IIT Kanpur), we provide
              comprehensive coaching for students from Class 8 to competitive
              exam preparation, ensuring conceptual clarity and sustained
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  <h3 className="text-xl sm:text-2xl font-bold">Latest Achievement</h3>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold mb-2">
                  NEET 2024 — Archi Raj
                </h4>
                <p className="text-base sm:text-lg opacity-90 mb-4">
                  Congratulations to Archi Raj for her outstanding performance
                  in NEET 2024. This success reflects our commitment to
                  excellence and personalized coaching approach.
                </p>
                <div className="flex items-center space-x-4">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm">
                    Another proud moment for Momentum Institute
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/archi_raj_neet_2024.jpg"
                  alt="Archi Raj - NEET 2024 Top Performer"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Our Courses</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Comprehensive programs designed for academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-accent mb-2 sm:mb-3">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>
                <Link
                  to={course.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors text-sm sm:text-base"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              to="/courses"
              className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-sm sm:text-base"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Quick Bar */}
      <section className="py-8 sm:py-12 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Get in touch with us today for personalized guidance
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:8340118918"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold">8340118918</span>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdW6iIOxzSYwbyZiV6XLwDgdHnd5hNRuxJ2XJ0fqalZwYTO0Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-accent px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Request a Call
              </a>
            </div>

            <div className="text-center md:text-right">
              <Link
                to="/contact"
                className="flex items-center justify-center md:justify-end space-x-2 text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Visit Our Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
