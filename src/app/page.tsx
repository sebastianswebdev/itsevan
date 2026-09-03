import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIUseAI } from "@/components/HowIUseAI";
import { Results } from "@/components/Results";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Results />
        <About />
        <HowIUseAI />
        <SelectedWork />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
