import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { coursesData } from './data/coursesData';
import { LanguageToggle } from './components/LanguageToggle';
import { HeroSection } from './components/HeroSection';
import { CourseGrid } from './components/CourseGrid';
import { WhyOneRupee } from './components/WhyOneRupee';
import { HowItWorks } from './components/HowItWorks';
import { FounderSection } from './components/FounderSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { EnrollModal } from './components/EnrollModal';

function LandingPage() {
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState(null);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSyllabus = (course) => {
    setSelectedCourseForSyllabus(course);
  };

  const handleCloseSyllabus = () => {
    setSelectedCourseForSyllabus(null);
  };

  const handleOpenEnroll = (course) => {
    const courseToEnroll = course || coursesData.find((c) => c.price === 1) || coursesData[0];
    setSelectedCourseForEnroll(courseToEnroll);
  };

  const handleCloseEnroll = () => {
    setSelectedCourseForEnroll(null);
  };

  return (
    <div className="etender-app-root">
      {/* Persistent Floating Language Toggle (Exact Reference Position & Treatment) */}
      <LanguageToggle />

      <main>
        {/* 1. Hero Section (Exact Reference Layout, Spacing, and Founder Cutout) */}
        <HeroSection onExploreCourses={() => scrollTo('courses')} />

        {/* 2. Reusable Course Collection (4 Equal Editorial Cards in a Row) */}
        <CourseGrid
          courses={coursesData}
          onOpenSyllabus={handleOpenSyllabus}
          onEnroll={handleOpenEnroll}
        />

        {/* 3. Why ₹1 Educational Philosophy */}
        <WhyOneRupee onExploreClick={() => scrollTo('courses')} />

        {/* 4. Simple 3-Step Enrollment Journey */}
        <HowItWorks onStartClick={() => scrollTo('courses')} />

        {/* 5. Lead Instructor & Ground Credibility */}
        <FounderSection onExploreClick={() => scrollTo('courses')} />

        {/* 6. ₹1-Specific Accessible FAQ Accordion */}
        <FAQSection />

        {/* 7. Final Compelling Call to Action */}
        <FinalCTA onExploreClick={() => scrollTo('courses')} />
      </main>

      {/* 8. Authentic Upside Down Hero Footer matching reference project */}
      <Footer />

      {/* Course Detailed Syllabus Modal */}
      <CourseModal
        course={selectedCourseForSyllabus}
        isOpen={Boolean(selectedCourseForSyllabus)}
        onClose={handleCloseSyllabus}
        onEnroll={handleOpenEnroll}
      />

      {/* ₹1 Instant Enrollment & Confirmation Modal */}
      <EnrollModal
        course={selectedCourseForEnroll}
        isOpen={Boolean(selectedCourseForEnroll)}
        onClose={handleCloseEnroll}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}
