"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Plans", href: "#plans" },
  { label: "Instructor", href: "#trainer" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function MagneticBtn({ children, href, className, style, onClick }: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
  };
  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1)";
    setTimeout(() => { if (ref.current) ref.current.style.transition = ""; }, 500);
  };
  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map(n => n.href.replace("#", ""));
    const obs: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: scrolled ? "0" : "0",
      }}
    >
      <div style={{
        margin: scrolled ? "0" : "clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 3vw, 1.5rem)",
        borderRadius: scrolled ? "0" : "16px",
        background: scrolled ? "rgba(8,8,8,0.95)" : "rgba(15,15,15,0.85)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: scrolled ? "none" : "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: "clamp(56px, 7vw, 68px)",
          gap: "1rem",
        }}>
          {/* Logo */}
          <a href="#home" onClick={() => setActive("home")} style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, position: "relative", flexShrink: 0 }}>
              <Image src="/logo-icon.png" alt="Guru Driving School" fill sizes="32px" style={{ objectFit: "contain" }} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Mettur, TN</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>Guru Driving</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)", alignItems: "center", flex: 1, justifyContent: "center" }}>
            {NAV.map(item => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(id)}
                  className={`nav-link${active === id ? " active" : ""}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
            <MagneticBtn
              href="tel:+917092063335"
              className="hidden sm:inline-flex btn-shimmer"
              style={{
                gap: "0.4rem",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.85)",
                padding: "0.48rem 1rem",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "background 0.2s, border-color 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={11} strokeWidth={2.5} />
              Call Now
            </MagneticBtn>
            <MagneticBtn
              href="#contact"
              className="hidden md:flex btn-shimmer"
              style={{
                gap: "0.4rem",
                background: "var(--accent)",
                color: "#fff",
                padding: "0.48rem 1.1rem",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 8,
                border: "none",
                whiteSpace: "nowrap",
              }}
            >
              Enroll Now
              <ArrowRight size={11} />
            </MagneticBtn>
            <motion.button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "0.48rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                color: "#fff",
              }}
              aria-label={open ? "Close" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.07)" }}
              className="md:hidden"
            >
              <div style={{ padding: "1rem clamp(1rem, 4vw, 1.5rem) 1.25rem", display: "flex", flexDirection: "column", gap: "0rem" }}>
                {NAV.map((item, i) => {
                  const id = item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => { setActive(id); setOpen(false); }}
                      style={{
                        padding: "0.85rem 0",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        color: active === id ? "#fff" : "rgba(255,255,255,0.5)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        display: "flex",
                        justifyContent: "space-between",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.label}
                      {active === id && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", display: "block", alignSelf: "center" }} />}
                    </motion.a>
                  );
                })}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "1rem" }}>
                  <a href="tel:+917092063335" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", background: "rgba(255,255,255,0.06)", color: "#fff", padding: "0.85rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Phone size={13} /> Call
                  </a>
                  <a href="#contact" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", background: "var(--accent)", color: "#fff", padding: "0.85rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8, border: "none" }}>
                    Enroll
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}