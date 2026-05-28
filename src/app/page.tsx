import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { MainContent } from "@/components/MainContent";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden", background: "#ffffff" }}>
      <SiteHeader />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem 3rem",
        }}
      >
        <HeroSection />
        <MainContent />
      </div>

      <SiteFooter />
    </main>
  );
}