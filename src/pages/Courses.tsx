import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Courses: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const courses = [
    {
      title: 'Class 8-10: Science & Math Foundation',
      description: 'Build strong fundamentals in Physics, Chemistry, Mathematics, and Biology with focus on conceptual understanding and board exam preparation.',
      duration: 'Yearly Program',
      batchSize: '15-20 students',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      features: [
        'Concept-based learning approach',
        'Regular practice sessions',
        'Board exam pattern preparation',
        'Doubt clearing sessions',
        'Monthly progress reports',
        'Parent-teacher meetings'
      ],
      ideal: 'Students seeking strong foundation and board exam excellence'
    },
    {
      title: 'Class 11-12 (PCM) — JEE Focused',
      description: 'Comprehensive JEE preparation with board alignment, covering advanced Physics, Chemistry, and Mathematics concepts.',
      duration: '2-Year Program',
      batchSize: '12-15 students',
      subjects: ['Advanced Physics', 'Organic & Inorganic Chemistry', 'Calculus & Algebra'],
      features: [
        'JEE Main & Advanced preparation',
        'Board exam alignment',
        'Weekly mock tests',
        'Problem-solving workshops',
        'IIT-level question practice',
        'Performance analytics'
      ],
      ideal: 'Aspiring engineers targeting JEE Main/Advanced'
    },
    {
      title: 'Class 11-12 (PCB) — NEET Focused',
      description: 'Intensive NEET coaching with practical sessions, covering Physics, Chemistry, and Biology for medical entrance preparation.',
      duration: '2-Year Program',
      batchSize: '12-15 students',
      subjects: ['Applied Physics', 'Biochemistry', 'Botany & Zoology'],
      features: [
        'NEET pattern questions',
        'Practical & lab sessions',
        'Medical terminology focus',
        'Previous year analysis',
        'Time management techniques',
        'Revision strategies'
      ],
      ideal: 'Future doctors preparing for NEET and medical entrance'
    },
    {
      title: 'NEET Crash Course',
      description: 'Intensive targeted preparation for NEET with focus on high-yield topics, practice tests, and exam strategies.',
      duration: '6-Month Intensive',
      batchSize: '10-12 students',
      subjects: ['High-yield Physics', 'Important Chemistry', 'Scoring Biology'],
      features: [
        'High-yield topic focus',
        'Daily practice tests',
        'Rapid revision techniques',
        'Exam day strategies',
        'Last-minute preparation',
        'Expert guidance'
      ],
      ideal: 'Students needing intensive NEET preparation in limited time'
    }
  ];

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'Admission is based on a counseling session where we assess the student\'s current academic level and goals. We conduct a brief interaction to understand learning needs and recommend the most suitable program.'
    },
    {
      question: 'What are the fee structures?',
      answer: 'Our fee structure varies by program and is highly competitive. We offer flexible payment options and scholarship opportunities for deserving students. Please contact us for detailed fee information.'
    },
    {
      question: 'What are the class timings?',
      answer: 'We offer multiple time slots to accommodate different student schedules. Morning batches (9 AM - 12 PM), Afternoon batches (2 PM - 5 PM), and Evening batches (6 PM - 9 PM) are available. Weekend batches are also offered.'
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, we provide comprehensive study materials including printed notes, practice question banks, previous year papers, and digital resources. All materials are regularly updated to match current exam patterns.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4 sm:mb-6">Our Courses</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to excel in academics and competitive examinations
            </p>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600">Get answers to common questions about admissions, fees, and programs</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-accent pr-2">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Begin Your Academic Journey?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join thousands of successful students who have achieved their dreams with Momentum Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:8340118918"
              className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm sm:text-base"
            >
              Call Now: 8340118918
            </a>
            <a
              href="/contact"
              className="bg-white text-accent px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Visit Our Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;