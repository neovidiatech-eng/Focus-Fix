import { Smartphone, Battery, Camera, Cpu, ShieldCheck ,CheckCircle2} from "lucide-react";
import { motion } from "framer-motion";
import { SubtleGrid } from "./ui/hero-background";

export const CommonProblems = () => {
  const categories = [
    {
      title: "مشاكل شاشة الـ IPhone",
      icon: <Smartphone className="text-indigo-600" size={24} />,
      items: ["كسر أو شرخ فى الشاشة", "ألوان الشاشة بايظة", "الباغة أتكسرت", "التاتش مش شغال"]
    },
    {
      title: "مشاكل البطاريات",
      icon: <Battery className="text-emerald-600" size={24} />,
      items: ["البطارية بتسخن", "البطارية منفوخة", "البطارية بتخلص بسرعة"]
    },
    {
      title: "مشاكل الظهر",
      icon: <ShieldCheck className="text-purple-600" size={24} />,
      items: ["الظهر أتكسر", "الظهر اتشرخ", "الـ Wireless Charge مش شغال"]
    },
    {
      title: "مشاكل الكاميرات",
      icon: <Camera className="text-rose-600" size={24} />,
      items: ["الكاميرا فاصلة", "الكاميرا مزغللة"]
    },
    {
      title: "مشاكل الـ Motherboard",
      icon: <Cpu className="text-amber-600" size={24} />,
      items: [
        "الموبايل وقع فى الماية",
        "الموبايل بيعمل Restart",
        "الموبايل بيفصل شاشة كل شوية",
        "الموبايل بيسخن فى الشاحن",
        "الموبايل فصل صوت",
        "الشبكة ضعيفة أو فاصة",
        "الموبايل مش بيلقط Wifi",
        "الـ Face ID مش شغال"
      ],
      className: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100 mask-[linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold mb-4">الأعطال الشائعة</h2>
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight whitespace-pre-wrap">أهم مشاكل الـ IPhone اللى بنصلحها</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/20 hover:border-indigo-500/30 transition-all group ${cat.className || ""}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900">{cat.title}</h4>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
