import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/neon-button";

export const Navbar = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "لماذا تختارنا", href: "#why-us" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "glass py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo1.jpeg" alt="Focus Repair Logo" className="w-30 h-12 object-cover  rounded-xl" />
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => onScrollTo(e, link.href)}
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 relative z-50">
          <a href="tel:01009911934" className="hidden sm:block">
            <Button
              variant="solid"
              size="sm"
              className="bg-[#1c1d4f] text-white hover:bg-[#1c1d4f] flex items-center gap-2"
            >
              <Phone size={16} />
              <span>01009911934</span>
            </Button>
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900 border-none hover:bg-black/5"
          >
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : "mb-1.5"}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : "mb-1.5"}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onScrollTo(e, link.href, () => setIsMenuOpen(false))}
                  className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:01009911934" className="sm:hidden">
                <Button
                  variant="solid"
                  className="w-full bg-[#1c1d4f] text-white flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  <span>اتصل الآن</span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};