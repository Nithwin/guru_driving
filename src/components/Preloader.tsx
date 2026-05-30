"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.83, 0, 0.17, 1] as const;
const DURATION = 2400;
// Max extra time to wait for 3D model after animation finishes (ms)
const MODEL_TIMEOUT = 12000;

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  // Track whether both gates are open before dismissing
  const animDoneRef = useRef(false);
  const modelReadyRef = useRef(false);
  const dismissedRef = useRef(false);

  const tryDismiss = () => {
    if (dismissedRef.current) return;
    if (!animDoneRef.current || !modelReadyRef.current) return;
    dismissedRef.current = true;
    setDone(true);
    setTimeout(onComplete, 1200); // Wait for exit animation
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Gate 1: listen for the 3D model load event
    const onModelLoaded = () => {
      modelReadyRef.current = true;
      tryDismiss();
    };
    window.addEventListener("car-model-loaded", onModelLoaded, { once: true });

    // Safety cap — never wait more than MODEL_TIMEOUT ms for the model
    const safetyTimer = setTimeout(() => {
      modelReadyRef.current = true;
      tryDismiss();
    }, MODEL_TIMEOUT);

    // Gate 2: run the progress bar animation
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const raw = Math.min(elapsed / DURATION, 1);
      const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Brief pause at 100%
        setTimeout(() => {
          animDoneRef.current = true;
          tryDismiss();
        }, 400);
      }
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(safetyTimer);
      window.removeEventListener("car-model-loaded", onModelLoaded);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);


  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader-container"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Main Black Background that slides up */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--yellow)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden"
            }}
          >
            {/* Ambient Red Glow in center */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: DURATION / 1000, ease: "linear" }}
              style={{
                position: "absolute",
                width: "40vw",
                height: "40vw",
                background: "radial-gradient(circle, rgba(204,0,51,0.12) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
              }}
            />

            {/* Giant Background Number */}
            <motion.div
              exit={{ opacity: 0, scale: 1.1, y: -50 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "clamp(12rem, 35vw, 40rem)",
                fontWeight: 900,
                color: "rgba(0, 0, 0, 0.06)",
                fontFamily: "monospace",
                lineHeight: 1,
                zIndex: 0,
                pointerEvents: "none",
                letterSpacing: "-0.05em"
              }}
            >
              {progress}
            </motion.div>

            {/* Content Container */}
            <motion.div 
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {/* Spinning Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: EASE }}
                style={{ position: "relative", width: 56, height: 56, marginBottom: "2rem" }}
              >
                <Image src="/logo-icon.png" alt="" fill sizes="56px" style={{ objectFit: "contain" }} />
              </motion.div>

              {/* Loader Text Mask */}
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--ink)",
                    textAlign: "center",
                    margin: 0,
                    lineHeight: 1.2
                  }}
                >
                  SRI GURU <span style={{ color: "var(--accent)" }}>DRIVING</span>
                </motion.h1>
              </div>

              {/* Changing Text Roles */}
              <div style={{ height: "20px", overflow: "hidden", marginTop: "0.5rem" }}>
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.3em",
                    color: "rgba(0,0,0,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  {progress < 40 ? "IGNITING ENGINE..." : progress < 80 ? "CHECKING MIRRORS..." : progress < 100 ? "READY TO DRIVE" : "LOADING 3D MODEL..."}
                </motion.p>
              </div>

              {/* Sleek Progress Line */}
              <motion.div
                style={{
                  height: 1,
                  background: "rgba(0,0,0,0.12)",
                  width: "min(320px, 70vw)",
                  marginTop: "2.5rem",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    background: "var(--accent)",
                    width: `${progress}%`,
                    boxShadow: "0 0 15px rgba(204,0,51,0.5)",
                  }}
                />
              </motion.div>

              {/* Exact Percentage Readout */}
              <div style={{ display: "flex", justifyContent: "space-between", width: "min(320px, 70vw)", marginTop: "0.75rem" }}>
                <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "rgba(0,0,0,0.45)" }}>LOADING</span>
                <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "var(--accent)", fontWeight: "bold" }}>
                  {progress.toString().padStart(3, "0")}%
                </span>
              </div>
            </motion.div>

            {/* Corner Decorative Elements */}
            {[
              { top: 40, left: 40, borderTop: "2px solid var(--ink)", borderLeft: "2px solid var(--ink)" },
              { top: 40, right: 40, borderTop: "2px solid var(--ink)", borderRight: "2px solid var(--ink)" },
              { bottom: 40, left: 40, borderBottom: "2px solid var(--ink)", borderLeft: "2px solid var(--ink)" },
              { bottom: 40, right: 40, borderBottom: "2px solid var(--ink)", borderRight: "2px solid var(--ink)" },
            ].map((style, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: EASE }}
                style={{
                  position: "absolute",
                  width: 30,
                  height: 30,
                  ...style
                }}
              />
            ))}
          </motion.div>
          
          {/* Overlay yellow shutter that slides up slightly after the black one */}
          <motion.div
            initial={{ y: "100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--accent)",
              zIndex: -1
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
