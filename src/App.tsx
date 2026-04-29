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
    
    // Close mobile menu if open
    if (callback) callback();

    const targetId = href.replace("#", "");
    
    // Use a small timeout to ensure the state change (closing menu) 
    // doesn't interfere with the scroll animation
    setTimeout(() => {
      if (targetId === "home" || targetId === "" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }, 100);
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
        <Slider />
        <Contact />
      </main>
      <Footer onScrollTo={handleScrollTo} />
      <FloatingWhatsApp />
    </div>
  );
}
