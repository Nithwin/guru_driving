"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function NightDrive() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} style={{ marginTop: "6rem", position: "relative", height: "80vh", overflow: "hidden", background: "#000" }}>
      
      {/* Background Image Parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: -40,
          y: imageY,
          backgroundImage: "url('https://images.unsplash.com/photo-1542382103-605bb1bf7286?q=80&w=2074&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          filter: "grayscale(100%) contrast(1.2)",
        }}
      />

      {/* Noise Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.25,
        mixBlendMode: "overlay",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      }} />

      {/* Overlay Gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, transparent 0%, #0d0d0d 100%)",
      }} />

      {/* Kinetic Typography */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          y: textY,
        }}
      >
        <h2 style={{
          fontSize: "clamp(4rem, 12vw, 15rem)",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "-0.04em",
          lineHeight: 0.85,
          color: "transparent",
          WebkitTextStroke: "2px rgba(255,255,255,0.15)",
          textAlign: "center",
        }}>
          OWN THE <br />
          <span style={{ color: "#fff", WebkitTextStroke: "0" }}>NIGHT</span>
        </h2>
        
        <p style={{
          color: "var(--accent)",
          fontSize: "0.85rem",
          fontWeight: 800,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginTop: "2rem",
        }}>
          Advanced Defensive Driving
        </p>
      </motion.div>
    </section>
  );
}
