import React, { useState } from "react";
import {
  GraduationCap,
  Users,
  Target,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const galleryImages = ["/assets/classroom1.jpg", "/assets/classroom2.jpg"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "IIT Alumni-led Faculty",
      description:
        "Expert guidance from IIT graduates with deep subject knowledge and teaching excellence.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Small Batch Size",
      description:
        "Personalized attention with limited students per batch for maximum individual focus.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Concept-driven Teaching",
      description:
        "Emphasis on fundamental understanding rather than rote learning for lasting knowledge.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Regular Tests & Feedback",
      description:
        "Continuous assessment and detailed feedback to track progress and improvement areas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
              About Momentum Institute
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to fostering academic excellence and nurturing future
              leaders in Science and Mathematics
            </p>
          </div>
        </div>
      </section>

      {/* Institute Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Momentum Institute, we are committed to transforming the
                  educational landscape by providing world-class coaching in
                  Science and Mathematics. Our institute was founded with a
                  singular vision: to bridge the gap between traditional
                  teaching methods and modern educational needs.
                </p>
                <p>
                  We believe that every student possesses unique potential that
                  can be unlocked through proper guidance, conceptual clarity,
                  and consistent practice. Our approach focuses on building
                  strong foundations rather than just preparing for exams,
                  ensuring that students develop critical thinking skills that
                  serve them throughout their academic and professional careers.
                </p>
                <p>
                  Under the expert guidance of our experienced faculty, we have
                  created an environment that encourages curiosity, promotes
                  analytical thinking, and celebrates academic achievements. Our
                  success stories speak for themselves, with students
                  consistently achieving excellent results in board examinations
                  and competitive entrance tests.
                </p>
                <p>
                  We are not just an educational institution; we are partners in
                  your child's journey toward academic excellence and personal
                  growth. Every student who walks through our doors becomes part
                  of the Momentum family, receiving personalized attention and
                  unwavering support throughout their learning journey.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/miai.jpg"
                alt="Momentum Institute classroom environment"
                className="rounded-xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/assets/director.jpg"
                alt="Vivek Sir, Director of Momentum Institute"
                className="w-80 h-80 rounded-xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">
                Meet Our Director
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-2">
                  Vivek Sir
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  M.Tech — IIT Kanpur
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Vivek Sir brings years of exceptional expertise in Physics,
                    Chemistry, and Mathematics coaching to Momentum Institute.
                    As a distinguished alumnus of IIT Kanpur with an M.Tech
                    degree, he combines deep technical knowledge with innovative
                    teaching methodologies.
                  </p>
                  <p>
                    His teaching philosophy centers around making complex
                    concepts accessible through practical examples and
                    real-world applications. With a proven track record of
                    mentoring students for both board examinations and
                    competitive entrance tests, Vivek Sir has helped hundreds of
                    students achieve their academic goals.
                  </p>
                  <p>
                    Under his leadership, Momentum Institute has established
                    itself as a premier coaching center, known for its quality
                    education, ethical practices, and consistent results. His
                    dedication to student success and continuous innovation in
                    teaching methods makes him a beloved mentor and an inspiring
                    leader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Why Choose Momentum Institute?
            </h2>
            <p className="text-lg text-gray-600">
              Discover what makes us the preferred choice for academic
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-accent mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Our Learning Environment
            </h2>
            <p className="text-lg text-gray-600">
              Take a glimpse into our modern classrooms and facilities
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={galleryImages[currentImage]}
                alt={`Classroom ${currentImage + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>

            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-accent p-2 rounded-full shadow-lg transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-accent p-2 rounded-full shadow-lg transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex justify-center mt-4 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImage ? "bg-primary" : "bg-gray-300"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
