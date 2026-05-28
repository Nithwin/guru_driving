import { Mail, Share2 } from "lucide-react";

const footerLinks = ["Privacy Policy", "Terms of Service", "Instructor Login", "Contact"];

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "#ffffff",
        borderTop: "4px solid var(--accent)",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2.25rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div>
          <p style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.01em" }}>Sri Guru Driving School</p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.3rem" }}>
            © 2024 Sri Guru Driving School. Drive with Confidence.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem 1.75rem" }}>
          {footerLinks.map((item) => (
            <a
              key={item}
              href="#home"
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="button"
            aria-label="Share"
            style={{
              width: 38,
              height: 38,
              border: "1.5px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            <Share2 size={16} />
          </button>
          <button
            type="button"
            aria-label="Mail"
            style={{
              width: 38,
              height: 38,
              border: "1.5px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            <Mail size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}