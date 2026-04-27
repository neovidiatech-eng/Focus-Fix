import { motion } from "framer-motion";
import { SubtleGrid } from "./ui/hero-background";
import {
  Clock,
  Home,
  ShieldCheck,
  Wrench
} from "lucide-react";

export const WhyUs = () => {
  const features = [
    {
      title: "تصليح في 30 دقيقة",
      desc: "أسرع خدمة تصليح في مصر، بنخلص جهازك في أقل من نص ساعة.",
      icon: <Clock size={28} />
    },
    {
      title: "تصليح في المنزل",
      desc: "بنجيلك لحد باب البيت وبنصلح الموبايل قدام عينيك بكل أمان.",
      icon: <Home size={28} />
    },
    {
      title: "قطع غيار أصلية",
      desc: "بنستخدم قطع غيار أصلية بضمان حقيقي يصل لـ 3 شهور.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "أدوات حديثة",
      desc: "بنستخدم أحدث الماكينات والأدوات لضمان أعلى دقة في الصيانة.",
      icon: <Wrench size={28} />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 text-slate-900 overflow-hidden relative">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold mb-4">لماذا تختارنا؟</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">ليه FOCUS هو الأفضل؟</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all text-center group backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-200 pt-20">
          {[
            { label: "شاشة صلحناها", value: "2178" },
            { label: "بوردة صلحناها", value: "518" },
            { label: "بطارية غيرناها", value: "1540" },
            { label: "ظهر صلحناه", value: "1056" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black mb-2 text-[#1c1d4f]">{stat.value}</div>
              <div className="text-slate-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};