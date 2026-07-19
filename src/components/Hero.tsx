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
      <Spotlight className="-top-40 inset-s-0 md:inset-s-60 md:-top-20" fill="var(--color-brand-100)" />
      <SubtleWaves />

      {/* Background Elements */}
      <div className="absolute top-0 inset-e-0 w-[600px] h-[600px] bg-brand-100/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 rtl:-translate-x-1/2"></div>
      <div className="absolute bottom-0 inset-s-0 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2"></div>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-6xl font-black leading-tight text-slate-900 mb-6 tracking-tighter">
              {t("hero.title1")} <br />
              <span className="gradient-text text-2xl md:text-5xl">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              {t("hero.description")}
            </p>
            <div className="gap-2 mb-12 grid grid-cols-1 sm:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/201009911934" target="_blank">
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 rounded-2xl shadow-lg shadow-green-200 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
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
                    className="bg-slate-100 text-brand-100 border-brand-100/10 shadow-sm hover:bg-brand-100/5 flex items-center gap-3 rounded-2xl backdrop-blur-sm cursor-pointer"
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