"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { MainContent } from "@/components/MainContent";
import { SiteFooter } from "@/components/SiteFooter";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderDone = useCallback(() => {
    setLoaded(true);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderDone} />

      {/* Fixed header — lives outside <main> so position:fixed always works */}
      {loaded && <SiteHeader />}

      {/* Main site fades in after preloader */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <SmoothScroll>
              {/* paddingTop offsets the fixed header */}
              <main style={{ paddingTop: "clamp(60px, 8vw, 72px)" }}>
                {/* Hero */}
                <div className="container">
                  <HeroSection />
                </div>

                {/* Marquee ticker */}
                <MarqueeTicker />

                {/* Main content */}
                <div className="container" style={{ paddingBottom: "5rem" }}>
                  <MainContent />
                </div>

                <SiteFooter />
              </main>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}