"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const QUICK = [
  { label: "Training Plans", href: "#plans" },
  { label: "Meet Vignesh", href: "#trainer" },
  { label: "Testimonials", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Get a Callback", href: "#contact" },
];

const CONTACT = [
  { icon: Phone, text: "+91 70920 63335", href: "tel:+917092063335" },
  { icon: Mail, text: "info@gurudriving.in", href: "mailto:info@gurudriving.in" },
  { icon: MapPin, text: "Kolathur, Mettur, Salem, TN", href: "#contact" },
];

function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px,${y}px)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    ref.current.style.transform = "";
    setTimeout(() => { if (ref.current) ref.current.style.transition = ""; }, 500);
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.3rem",
        fontFamily: "var(--font-body)",
        fontSize: "clamp(0.8rem, 1.6vw, 0.88rem)",
        fontWeight: 500,
        color: "rgba(255,255,255,0.42)",
        textDecoration: "none",
        transition: "color 0.18s",
        paddingBottom: "2px",
        borderBottom: "1px solid transparent",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.2)";
      }}
      onFocus={e => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
      }}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            padding: "clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem)",
            borderBottom: "1px solid var(--border)",
          }}
          className="footer-main-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div style={{ width: 30, height: 30, position: "relative", flexShrink: 0 }}>
                <Image src="/logo-icon.png" alt="Logo" fill sizes="30px" style={{ objectFit: "contain" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(0.88rem, 1.8vw, 1rem)", letterSpacing: "-0.01em", color: "#fff" }}>Guru Driving School</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Mettur, TN</p>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.72rem, 1.5vw, 0.8rem)", color: "rgba(255,255,255,0.38)", lineHeight: 1.85, maxWidth: 260, marginBottom: "1.5rem" }}>
              Premium driving education built for real roads, real confidence, and lifelong safety — serving Mettur and surrounding areas.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {CONTACT.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-body)", fontSize: "clamp(0.68rem, 1.4vw, 0.75rem)", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  <Icon size={12} style={{ flexShrink: 0, color: "var(--yellow)", opacity: 0.7 }} />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "1.1rem" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {QUICK.map(item => (
                <MagneticLink key={item.label} href={item.href}>
                  {item.label}
                  <ArrowUpRight size={11} style={{ opacity: 0.4 }} />
                </MagneticLink>
              ))}
            </div>
          </div>

          {/* Hours + CTA */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "1.1rem" }}>
              School Hours
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
              {[["Monday – Friday", "6:00 AM – 7:00 PM"], ["Saturday", "6:00 AM – 5:00 PM"], ["Sunday", "Morning Batch Only"]].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "rgba(255,255,255,0.38)" }}>{day}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{time}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(255,213,0,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                background: "var(--yellow)", color: "var(--yellow-ink)",
                padding: "0.75rem 1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                borderRadius: 8,
              }}
            >
              Enroll Now →
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.1rem 0", flexWrap: "wrap", gap: "0.5rem",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.62rem, 1.3vw, 0.7rem)", color: "rgba(255,255,255,0.2)", letterSpacing: "0.03em" }}>
            © 2025 Guru Driving School. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.6rem, 1.2vw, 0.65rem)", color: "rgba(255,255,255,0.15)", letterSpacing: "0.04em" }}>
            Salem, Tamil Nadu 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-main-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}