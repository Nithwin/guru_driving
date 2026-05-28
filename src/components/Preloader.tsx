"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const DURATION = 1800; // ms

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // slight pause then exit
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 220);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  const letters = "MASTER THE ROAD".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0d0d0d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Animated logo letters */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              style={{
                display: "flex",
                gap: "0.12em",
                fontSize: "clamp(1.8rem, 5vw, 4rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12 + i * 0.035,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{ color: char === " " ? "transparent" : undefined, display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#fff",
              marginTop: "-1.5rem",
            }}
          >
            Sri Guru Driving School
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              width: "min(240px, 60vw)",
              height: 2,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 1,
              overflow: "hidden",
              transformOrigin: "left",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "var(--accent)",
                borderRadius: 1,
                width: `${progress}%`,
                transition: "width 0.04s linear",
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "#fff",
              textTransform: "uppercase",
              marginTop: "-1.5rem",
            }}
          >
            Loading {progress}%
          </motion.p>

          {/* Decorative red line at bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "var(--accent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
