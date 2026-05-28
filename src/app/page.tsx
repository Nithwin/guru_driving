"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
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
      {/* Custom cursor */}
      <CustomCursor />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderDone} />

      {/* Main site */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <SmoothScroll>
              <main style={{ overflowX: "hidden", background: "var(--bg)" }}>
                <SiteHeader />

                {/* Hero */}
                <div className="container">
                  <HeroSection />
                </div>

                {/* Marquee ticker between hero and content */}
                <MarqueeTicker />

                {/* Main content sections */}
                <div className="container" style={{ paddingBottom: "4rem" }}>
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