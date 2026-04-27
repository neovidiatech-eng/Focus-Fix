import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Battery,
  Camera,
  Cpu,
  ShieldCheck,
  ChevronLeft
} from "lucide-react";
import { Button } from "./ui/neon-button";
import { SubtleGrid } from "./ui/hero-background";

export const Services = () => {
  const services = [
    {
      title: "مشاكل الشاشة",
      desc: "شاشتك اتكسرت أو اتشرخت؟ بنغيرلك الشاشة في مكانك بأعلى جودة.",
      icon: <Smartphone className="text-indigo-600" size={32} />,
      color: "bg-indigo-50",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "مشاكل البطارية",
      desc: "بطاريتك بتخلص بسرعة؟ بنغيرلك البطارية بضمان حقيقي وأداء ممتاز.",
      icon: <Battery className="text-emerald-600" size={32} />,
      color: "bg-emerald-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل الظهر",
      desc: "الظهر اتكسر؟ بنغير الظهر بالليزر وبيرجع الموبايل كأنه جديد.",
      icon: <ShieldCheck className="text-purple-600" size={32} />,
      color: "bg-purple-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل الكاميرات",
      desc: "الكاميرا فاصلة أو فيها غباش؟ بنصلحها وبترجع تصور أحلى صور.",
      icon: <Camera className="text-rose-600" size={32} />,
      color: "bg-rose-50",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "مشاكل المذربورد",
      desc: "الموبايل فاصل باور أو فيه قفلة؟ خبرائنا بيصلحوا أعقد مشاكل البوردة.",
      icon: <Cpu className="text-amber-600" size={32} />,
      color: "bg-amber-50",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold mb-4">خدماتنا</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">إيه المشكلة اللي بتواجهك؟</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">نحن متخصصون في صيانة جميع أجهزة آيفون بأحدث التقنيات وقطع الغيار الأصلية.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all bg-white group text-right ${service.className}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed font-medium">{service.desc}</p>
              <div className="flex justify-start">
                <a href="https://wa.me/201009911934">
                  <Button
                    variant="ghost"
                    className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all p-0 border-none hover:bg-transparent"
                  >
                    <span>اطلب الخدمة الآن</span>
                    <ChevronLeft size={18} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};