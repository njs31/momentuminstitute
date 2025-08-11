import React from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead: React.FC = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    const pageConfig = {
      '/': {
        title: 'Momentum Institute - Excellence in Science & Math Education',
        description: 'Guiding students from Class 8 to NEET & JEE success with expert coaching and personalized attention. Led by Vivek Sir (M.Tech - IIT Kanpur).',
      },
      '/about': {
        title: 'About Us - Momentum Institute',
        description: 'Learn about Momentum Institute\'s mission, vision, and our experienced faculty led by Vivek Sir (M.Tech - IIT Kanpur).',
      },
      '/courses': {
        title: 'Our Courses - Momentum Institute',
        description: 'Explore our comprehensive courses for Class 8-12, NEET preparation, and JEE coaching with expert faculty and proven results.',
      },
      '/results': {
        title: 'Student Results - Momentum Institute',
        description: 'See our students\' outstanding achievements including NEET 2024 Rank 14013 and other success stories.',
      },
      '/contact': {
        title: 'Contact Us - Momentum Institute',
        description: 'Get in touch with Momentum Institute. Call 8340118918 or visit us. Request a callback for personalized guidance.',
      },
    };

    const config = pageConfig[location.pathname as keyof typeof pageConfig] || pageConfig['/'];
    
    document.title = config.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', config.description);
      document.head.appendChild(metaDescription);
    }

    // Structured Data for Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Momentum Institute",
      "description": "Excellence in Science & Math Education from Class 8 to NEET & JEE preparation",
      "telephone": "8340118918",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kanpur",
        "addressRegion": "UP",
        "addressCountry": "IN"
      },
      "founder": {
        "@type": "Person",
        "name": "Vivek Sir",
        "jobTitle": "Director",
        "alumniOf": "IIT Kanpur"
      }
    };

    let script = document.querySelector('#structured-data');
    if (script) {
      script.textContent = JSON.stringify(structuredData);
    } else {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  return null;
};

export default SEOHead;