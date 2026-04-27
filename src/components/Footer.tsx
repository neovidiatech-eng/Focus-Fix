import React from "react";
export const Footer = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#home" onClick={(e) => onScrollTo(e, "#home")} className="flex items-center gap-2">
          <img src="/logo1.jpeg" alt="Focus Repair Logo" className="w-40 h-16 object-cover rounded-xl" />
        </a>

        <p className="text-slate-600 text-sm">جميع الحقوق محفوظة © 2026 FOCUS - Fastest Mobile Repair</p>

        <div className="text-sm font-bold text-slate-600">
          تم التصميم والتطوير بواسطة <span className="text-indigo-600">neovidia</span>
        </div>
      </div>
    </footer>
  );
};