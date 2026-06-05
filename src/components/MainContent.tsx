"use client";

import { WhyChoose } from "./WhyChoose";
import { InstructorPhilosophy } from "./InstructorPhilosophy";
import { StatsSection } from "./StatsSection";
import { PricingPlans } from "./PricingPlans";
import { ReviewsAndFaq } from "./ReviewsAndFaq";
import { CtaSection } from "./CtaSection";

export function MainContent() {
  return (
    <>
      {/* 1. Why Choose Bento Grid */}
      <WhyChoose />

      {/* 2. Instructor / School Philosophy */}
      <InstructorPhilosophy />

      {/* 3. Stats Section (CountUp Counter) */}
      <StatsSection />

      {/* 4. Tiered Pricing Plans */}
      <PricingPlans />


      {/* 6. Customer Reviews / Testimonials & FAQ Accordion */}
      <ReviewsAndFaq />

      {/* 7. Call-to-action Lead Form */}
      <CtaSection />
    </>
  );
}
