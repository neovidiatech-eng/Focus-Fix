import {
  Phone,
  MapPin,
  Wrench,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { SubtleGrid } from "./ui/hero-background";

export const Process = () => {
  const steps = [
    {
      title: "تواصل معنا",
      desc: "كلمنا واتس اب أو فون واشرح لنا مشكلة موبايلك.",
      icon: <Phone size={24} />
    },
    {
      title: "بنجيلك مكانك",
      desc: "فني متخصص بيجيلك لحد باب البيت أو شغلك في أسرع وقت.",
      icon: <MapPin size={24} />
    },
    {
      title: "تصليح فوري",
      desc: "بنصلح العطل قدامك في أقل من 30 دقيقة وبأعلى دقة.",
      icon: <Wrench size={24} />
    },
    {
      title: "ضمان حقيقي",
      desc: "بتستلم موبايلك شغال تمام ومعاه ضمان 3 شهور على الصيانة.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <SubtleGrid color="#00000008" className="opacity-100 mask-[linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold mb-4">كيف نعمل؟</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">خطوات بسيطة لموبايل جديد</h3>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-indigo-500/20 text-2xl font-black">
                  {index + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};