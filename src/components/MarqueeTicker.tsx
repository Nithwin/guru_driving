"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ITEMS = [
  "100% First-Time Pass Rate",
  "5000+ Graduates & Counting",
  "15+ Expert Certified Trainers",
  "Dual-Control Safety Vehicles",
  "RTO-Focused Curriculum",
];

export function MarqueeTicker() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let direction = 1; // 1 = forward, -1 = backward
    let xPercent = 0;

    const animate = () => {
      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;
      gsap.set(textRef.current, { xPercent });
      xPercent += 0.05 * direction;
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);

    ScrollTrigger.create({
      onUpdate: (self) => {
        direction = self.direction;
        // Skew text based on scroll velocity (Awwwards style)
        gsap.to(textRef.current, {
          skewX: self.getVelocity() / -150,
          overwrite: true,
          duration: 0.2,
          onComplete: () => {
            gsap.to(textRef.current, { skewX: 0, duration: 0.4 });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Triple the items for smooth infinite wrap
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div ref={container} style={{ 
      overflow: "hidden", 
      whiteSpace: "nowrap", 
      borderTop: "2px solid var(--ink)", 
      borderBottom: "2px solid var(--ink)", 
      background: "var(--yellow)", 
      color: "var(--ink)", 
      padding: "1.2rem 0",
      marginTop: "4rem"
    }}>
      <div ref={textRef} style={{ display: "flex", gap: "4rem", width: "fit-content" }}>
        {tripled.map((item, i) => (
          <span key={i} style={{ 
            fontSize: "1.2rem", 
            fontWeight: 900, 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "2rem" 
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
