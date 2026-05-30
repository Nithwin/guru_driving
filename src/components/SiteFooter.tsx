import Image from "next/image";
import { Mail, Phone, MapPin, Share2, Globe } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Instructor Login", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: Share2, label: "Share", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info@srigurudriving.com" },
];

const quickLinks = [
  { label: "Training Plans", href: "#plans" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Testimonials", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Book Now", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Main footer grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          padding: "clamp(2.5rem, 5vw, 3.5rem) 0 clamp(2rem, 4vw, 2.5rem)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }} className="footer-main-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
              <div style={{ width: 30, height: 30, position: "relative", flexShrink: 0 }}>
                <Image src="/logo-icon.png" alt="Logo" fill sizes="30px" style={{ objectFit: "contain" }} />
              </div>
              <p style={{ fontWeight: 900, fontSize: "clamp(0.9rem, 2vw, 1.05rem)", letterSpacing: "-0.01em" }}>
                Sri Guru Driving School
              </p>
            </div>
            <p style={{
              fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: 270,
              marginBottom: "1.5rem",
            }}>
              Premium driving education built for real roads, real confidence, and lifelong safety.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {[
                { icon: Phone, text: "+91 70920 63335", href: "tel:+917092063335" },
                { icon: Mail, text: "info@srigurudriving.com", href: "mailto:info@srigurudriving.com" },
                { icon: MapPin, text: "Kolathur, Mettur, Salem, TN", href: "#contact" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "clamp(0.68rem, 1.4vw, 0.74rem)",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  <Icon size={13} style={{ flexShrink: 0, color: "var(--yellow)", opacity: 0.75 }} />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <p style={{
              fontSize: "0.62rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "1rem",
            }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.15s, padding-left 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--yellow)";
                    e.currentTarget.style.paddingLeft = "4px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal + Social column */}
          <div>
            <p style={{
              fontSize: "0.62rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "1rem",
            }}>
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "2rem" }}>
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <p style={{
              fontSize: "0.62rem",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "0.75rem",
            }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36, height: 36,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", borderRadius: 3,
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--yellow)";
                    e.currentTarget.style.color = "var(--yellow-ink)";
                    e.currentTarget.style.background = "var(--yellow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 0",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{
            fontSize: "clamp(0.62rem, 1.3vw, 0.72rem)",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.03em",
          }}>
            © 2025 Sri Guru Driving School. All rights reserved. Drive with Confidence.
          </p>
          <p style={{
            fontSize: "clamp(0.6rem, 1.2vw, 0.68rem)",
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.04em",
          }}>
            Salem, Tamil Nadu 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}