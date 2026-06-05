"use client";

import { StatsSection } from "./StatsSection";
import { CinematicShowroom } from "./CinematicShowroom";
import { InstructorPhilosophy } from "./InstructorPhilosophy";
import { PricingPlans } from "./PricingPlans";
import { ReviewsAndFaq } from "./ReviewsAndFaq";
import { CtaSection } from "./CtaSection";

export function MainContent() {
  return (
    <>
      <StatsSection />
      <CinematicShowroom />
      <InstructorPhilosophy />
      <PricingPlans />
      <ReviewsAndFaq />
      <CtaSection />
    </>
  );
}
