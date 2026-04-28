import React from "react";
import { Navbar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { CommonProblems } from "./components/CommonProblems";
import { Slider } from "./components/Slider";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => {
    e.preventDefault();
    if (callback) callback();

    // For '#home' or empty href, scroll to top
    if (href === "#home" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Update URL hash without jumping
      window.history.pushState(null, "", href);
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const offset = 80; // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", href);
    }
  };

  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900 no-scrollbar relative">
      <Navbar onScrollTo={handleScrollTo} />
      <main className="relative z-10">
        <Hero onScrollTo={handleScrollTo} />
        <Services />
        <Process />
        <About />
        <WhyUs />
        <CommonProblems />
        <Slider/>
        <Contact />
      </main>
      <Footer onScrollTo={handleScrollTo} />
      <FloatingWhatsApp />
    </div>
  );
}
