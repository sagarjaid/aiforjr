/** @format */

import { Suspense } from 'react';
import Header from '@/components/Header';
import HeroAISection from '@/components/HeroAISection';
import WhyAIForKids from '@/components/WhyAIForKids';
import CurriculumSection from '@/components/CurriculumSection';
import PricingSection from '@/components/PricingSection';
import OurExpertSection from '@/components/OurExpertSection';
import SafeHandsSection from '@/components/SafeHandsSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      {/* 1. Header with main color */}
      <Suspense>
        <Header />
      </Suspense>

      {/* 2. Hero Section: Course title, age, duration, CTA */}
      <section id='features'>
        <HeroAISection />
      </section>

      {/* 3. Why AI for Kids? (benefits, stats, testimonials) */}
      <section id='about'>
        <WhyAIForKids />
      </section>

      {/* 5. Course Curriculum (modules, project ideas, tools) */}
      <section id='curriculum'>
        <CurriculumSection />
      </section>

      {/* 6. Pricing Section (group vs 1:1, features, clear CTAs) */}
      <section id='pricing'>
        <PricingSection />
      </section>

      {/* 7. Our Expert AI Educators (credibility, photos, bios) */}
      <section id='testimonials'>
        <OurExpertSection />
      </section>

      {/* 8. Safe Hands Section */}
      <section id='support'>
        <SafeHandsSection />
      </section>

      {/* 9. Join the Revolution (social proof, stats, final CTA) */}
      <section id='contact'>
        <JoinRevolutionSection />
      </section>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default page;
