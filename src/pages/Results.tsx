import React from "react";
import { Trophy, Star, Award, TrendingUp } from "lucide-react";
import { useRequestCall } from "../contexts/RequestCallContext";

const Results: React.FC = () => {
  const { openModal } = useRequestCall();

  const previousResults = [
    {
      year: "2023",
      achievements: [
        "JEE Main - Top 5000 rank achieved by 3 students",
        "NEET - Top 10000 rank achieved by 5 students",
        "95%+ Board exam scores - 15 students",
      ],
    },
    {
      year: "2022",
      achievements: [
        "JEE Advanced qualification - 2 students",
        "NEET Top 15000 - 4 students",
        "State board toppers in Science - 3 students",
      ],
    },
    {
      year: "2021",
      achievements: [
        "Record 98% in Class 12 boards",
        "Multiple NEET qualifications",
        "JEE Main success stories",
      ],
    },
  ];

  const achievers = [
    { name: "Student A", achievement: "JEE Main 2023", rank: "Top 3000" },
    { name: "Student B", achievement: "NEET 2023", rank: "Top 8000" },
    { name: "Student C", achievement: "Board Exam 2023", score: "96%" },
    { name: "Student D", achievement: "NEET 2022", rank: "Top 12000" },
    { name: "Student E", achievement: "JEE Main 2022", rank: "Top 5000" },
    { name: "Student F", achievement: "Board Exam 2022", score: "94%" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
              Student Results
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the outstanding achievements of our students in
              academics and competitive examinations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Student */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                  <div>
                    <h2 className="text-3xl font-bold">Featured Achievement</h2>
                    <p className="text-primary-dark">Latest Success Story</p>
                  </div>
                </div>

                <h3 className="text-4xl font-bold mb-4">
                  NEET 2024 — Archi Raj
                </h3>

                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-bold mb-3">Top Performer</h4>
                  <blockquote className="text-lg italic opacity-90">
                    "The guidance and support I received at Momentum Institute
                    was exceptional. The conceptual clarity and consistent
                    practice sessions helped me achieve this success. Thank you,
                    Vivek Sir and the entire team!"
                  </blockquote>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">Excellence in Biology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm">Consistent Performer</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src="/assets/archi_raj_neet_2024.jpg"
                  alt="Archi Raj - NEET 2024 Top Performer"
                  className="w-80 h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Our Success Timeline
            </h2>
            <p className="text-lg text-gray-600">
              A journey of consistent excellence over the years
            </p>
          </div>

          <div className="space-y-8">
            {previousResults.map((yearData, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    {yearData.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent">
                      Academic Year {yearData.year}
                    </h3>
                    <p className="text-gray-600">
                      Outstanding achievements and milestones
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {yearData.achievements.map(
                    (achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-accent">
                            Achievement
                          </span>
                        </div>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Wall */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Wall of Achievers
            </h2>
            <p className="text-lg text-gray-600">
              Proud moments and success stories of our brilliant students
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievers.map((achiever, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-accent">
                      {achiever.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-accent mb-1">
                    {achiever.achievement}
                  </h4>
                  <p className="text-primary font-bold">
                    {achiever.rank || achiever.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you achieve your academic goals and create your own
            success story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Request a Call
            </button>
            <a
              href="tel:8340118918"
              className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: 8340118918
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
