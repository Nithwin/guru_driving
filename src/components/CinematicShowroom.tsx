"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, Car, GraduationCap } from "lucide-react";
import { Reveal } from "./Animations";

const PANELS = [
  {
    icon: GraduationCap,
    label: "Expert Guidance",
    title: "Learn From\nA Certified\nInstructor",
    sub: "Vignesh — certified, patient, and deeply experienced on Mettur roads.",
    bg: "var(--surface-2)",
    accent: "var(--accent)",
  },
  {
    icon: MapPin,
    label: "Doorstep Pickup",
    title: "We Come\nTo You",
    sub: "Free pickup & drop across Mettur, Kolathur, RS, Mecheri & surrounding areas.",
    bg: "var(--accent)",
    accent: "var(--yellow)",
  },
  {
    icon: Clock3,
    label: "Flexible Timing",
    title: "Weekdays\n& Weekends",
    sub: "Morning, afternoon, and weekend slots — we fit your schedule, not the other way.",
    bg: "var(--surface-3)",
    accent: "var(--accent)",
  },
  {
    icon: Car,
    label: "Safe Vehicles",
    title: "Dual-Control\nSafety First",
    sub: "Every lesson in a modern dual-control vehicle — your safety is never compromised.",
    bg: "var(--yellow)",
    accent: "var(--yellow-ink)",
  },
];

export function CinematicShowroom() {
  return (
    <section style={{ padding: "var(--section-py) 0" }}>
      <div className="container">
        <Reveal style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Why Choose Us</p>
          <h2 className="section-title">
            Everything You Need<br />
            <span className="gradient-text-blue">In One Place.</span>
          </h2>
        </Reveal>

        <div className="showroom-grid">
          {PANELS.map((panel, i) => {
            const Icon = panel.icon;
            const isDark = panel.bg === "var(--yellow)";
            return (
              <motion.div
                key={panel.label}
                className="showroom-panel"
                style={{ background: panel.bg }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Always-visible label at top */}
                <div style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  zIndex: 2,
                }}>
                  <div style={{
                    width: 36, height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} color={isDark ? "var(--yellow-ink)" : "#fff"} />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: isDark ? "rgba(26,21,0,0.55)" : "rgba(255,255,255,0.45)",
                    whiteSpace: "nowrap",
                  }}>
                    {panel.label}
                  </span>
                </div>

                {/* Content revealed on expand */}
                <div style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  zIndex: 2,
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    color: isDark ? "var(--yellow-ink)" : "#fff",
                    marginBottom: "0.65rem",
                    whiteSpace: "pre-line",
                  }}>
                    {panel.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(0.72rem, 1.3vw, 0.82rem)",
                    lineHeight: 1.7,
                    color: isDark ? "rgba(26,21,0,0.65)" : "rgba(255,255,255,0.6)",
                    opacity: 0,
                    transition: "opacity 0.3s 0.15s",
                  }} className="panel-sub">
                    {panel.sub}
                  </p>
                </div>

                {/* Hover reveal background pattern */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
                  pointerEvents: "none",
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .showroom-panel:hover .panel-sub { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
