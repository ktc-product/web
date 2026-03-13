import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Workflow } from "@/components/Workflow";
import { Integrations } from "@/components/Integrations";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <ProductShowcase />
        <Workflow />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
