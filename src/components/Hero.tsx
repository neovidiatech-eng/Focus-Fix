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

export const Hero = ({ onScrollTo }: { onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-35 overflow-hidden bg-white">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#4f46e520" />
      <SubtleWaves />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

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
              <span>أسرع خدمة صيانة موبايل في مصر</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-slate-900 mb-6 tracking-tighter">
              آيفونك باظ! هنجيلك مكانك <br />
              <span className="gradient-text text-3xl md:text-5xl">ونصلحهولك فى 30 دقيقة فقط!!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              أيًا كانت مشكلة آيفونك، بنجيلك مكانك وبنصلح العطل قدامك بقطع غيار أصلية وأحدث الأدوات، مع ضمان 3 شهور.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/201009911934" target="_blank">
                  <Button
                    variant="solid"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-3 rounded-2xl shadow-lg shadow-green-200"
                  >
                    <MessageSquare size={24} />
                    <span>واتس اب</span>
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
                    className="bg-white text-[#1c1d4f] border-indigo-100 shadow-sm hover:bg-indigo-50 flex items-center gap-3 rounded-2xl backdrop-blur-sm"
                  >
                    <span>إتصل بنا</span>
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