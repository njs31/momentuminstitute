import React from 'react';
import { Clock, Users, BookOpen } from 'lucide-react';
import { useRequestCall } from '../contexts/RequestCallContext';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  batchSize: string;
  subjects: string[];
  features: string[];
  ideal: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  batchSize,
  subjects,
  features,
  ideal
}) => {
  const { openModal } = useRequestCall();

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-accent mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{description}</p>
      
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-600">Duration: {duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-600">Batch Size: {batchSize}</span>
        </div>
        <div className="flex items-start space-x-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm text-gray-600">Ideal for: {ideal}</span>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Subjects Covered:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={openModal}
        className="w-full bg-primary text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200 text-sm sm:text-base"
      >
        Request a Call
      </button>
    </div>
  );
};

export default CourseCard;