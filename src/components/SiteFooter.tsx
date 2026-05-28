import Image from "next/image";
import { Mail, Share2, Globe } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Instructor Login", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Globe, label: "Website" },
  { icon: Share2, label: "Share" },
  { icon: Mail, label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "2.5rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          gap: "1.5rem",
        }} className="footer-top-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
              <div style={{ width: 32, height: 32, position: "relative", flexShrink: 0 }}>
                <Image src="/logo-icon.png" alt="Logo" fill sizes="32px" style={{ objectFit: "contain" }} />
              </div>
              <p style={{ fontWeight: 900, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>Sri Guru Driving School</p>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 280 }}>
              Premium driving education built for real roads, real confidence, and lifelong safety.
            </p>
          </div>

          {/* Divider accent */}
          <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.08)" }} />

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
            <p style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem 1.5rem", justifyContent: "flex-end" }}>
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {item.label}
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
          padding: "1.25rem 0",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}>
            © 2024 Sri Guru Driving School. All rights reserved. Drive with Confidence.
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {socials.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                style={{
                  width: 36, height: 36,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "transparent", color: "rgba(255,255,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", borderRadius: 3,
                  transition: "border-color 0.15s, color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-top-grid > div:nth-child(2) { display: none; }
          .footer-top-grid > div:last-child { align-items: center !important; }
        }
      `}</style>
    </footer>
  );
}