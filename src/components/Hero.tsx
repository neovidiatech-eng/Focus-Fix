import React from 'react';
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Star
} from "lucide-react";
import { Button } from "./ui/neon-button";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Spotlight } from "./ui/spotlight";
import { SubtleWaves, SubtleGrid } from "./ui/hero-background";

import { useTranslation } from "react-i18next";

export const Hero = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center sm:pt-50 pt-40 overflow-hidden bg-slate-50">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <Spotlight className="-top-40 inset-s-0 md:inset-s-60 md:-top-20" fill="#4f46e520" />
      <SubtleWaves />

      {/* Background Elements */}
      <div className="absolute top-0 inset-e-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 rtl:-translate-x-1/2"></div>
      <div className="absolute bottom-0 inset-s-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2"></div>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-200 backdrop-blur-sm"
            >
              <Star size={16} fill="currentColor" />
              <span>{t("hero.badge")}</span>
            </motion.div>
            <h1 className="text-2xl md:text-6xl font-black leading-tight text-slate-900 mb-6 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="gradient-text text-2xl md:text-5xl">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              {t("hero.description")}
            </p>
            <div className="gap-2 mb-12 grid grid-cols-2 sm:grid-cols-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/201009911934" target="_blank">
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 rounded-2xl shadow-lg shadow-green-200"
                  >
                    <MessageSquare size={24} />
                    <span>{t("hero.whatsapp")}</span>
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact" onClick={(e) => onScrollTo(e, "#contact")}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-slate-100 text-[#1c1d4f] border-indigo-100 shadow-sm hover:bg-indigo-50 flex items-center gap-3 rounded-2xl backdrop-blur-sm"
                  >
                    <span>{t("hero.callUs")}</span>
                    <Phone size={20} />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        }
      >
        <img
          src="./hero.jpeg"
          alt="Premium iPhones"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </ContainerScroll>
    </section>
  );
};