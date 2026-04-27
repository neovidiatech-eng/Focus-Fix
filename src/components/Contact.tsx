import { motion } from "framer-motion";
import { SubtleGrid } from "./ui/hero-background";
import { Button } from "./ui/neon-button";
import {MessageSquare,Phone,Mail,MapPin} from "lucide-react"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  user_name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
  user_phone: z.string().regex(/^01[0125][0-9]{8}$/, "رقم الهاتف المصري غير صحيح"),
  user_email: z.string().email("البريد الإلكتروني غير صحيح"),
  device_type: z.string().min(1, "برجاء اختيار نوع الجهاز"),
  issue_type: z.string().min(1, "برجاء اختيار نوع العطل"),
  message_details: z.string().optional().nullable(),
});

export const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const formRef = useRef<HTMLFormElement>(null);


  const onSubmit = async () => {
    if (!formRef.current) return;
    
    try {
      await emailjs.sendForm(
        'service_o2f2xur', 
        'template_1voervo', 
        formRef.current, 
        'D4j1vTItr2mS_oF-G'
      );
      message.success("تم إرسال طلبك بنجاح!");
      reset();
    } catch (error) {
      message.error("فشل الإرسال، حاول مرة أخرى.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <SubtleGrid color="#00000008" className="opacity-100" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-50/50 rounded-[3rem] overflow-hidden shadow-xl border border-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-indigo-600 font-bold mb-4">تواصل معنا</h2>
              <h3 className="text-4xl font-black mb-10 text-slate-900 tracking-tight">يسعدنا تواصلكم معنا</h3>

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">الإسم</label>
                    <input 
                      type="text" 
                      {...register("user_name")}
                      className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.user_name ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400`} 
                      placeholder="أدخل اسمك" 
                    />
                    {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      {...register("user_phone")}
                      className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.user_phone ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400`} 
                      placeholder="01xxxxxxxxx" 
                    />
                    {errors.user_phone && <p className="text-red-500 text-xs mt-1">{errors.user_phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    {...register("user_email")}
                    className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.user_email ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400`} 
                    placeholder="ادخل ايميل" 
                  />
                  {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">نوع الجهاز</label>
                    <div className="relative">
                      <select 
                        {...register("device_type")}
                        className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.device_type ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all appearance-none`}
                      >
                        <option value="">اختر نوع الجهاز</option>
                        <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                        <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
                        <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
                        <option value="iPhone 12 Pro Max">iPhone 12 Pro Max</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                      {errors.device_type && <p className="text-red-500 text-xs mt-1">{errors.device_type.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">نوع العطل</label>
                    <div className="relative">
                      <select 
                        {...register("issue_type")}
                        className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.issue_type ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all appearance-none`}
                      >
                        <option value="">اختر نوع العطل</option>
                        <option value="كسر في الشاشة">كسر في الشاشة</option>
                        <option value="مشكلة في البطارية">مشكلة في البطارية</option>
                        <option value="كسر في الظهر">كسر في الظهر</option>
                        <option value="مشكلة في الكاميرا">مشكلة في الكاميرا</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                      {errors.issue_type && <p className="text-red-500 text-xs mt-1">{errors.issue_type.message}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">التفاصيل</label>
                  <textarea 
                    {...register("message_details")}
                    rows={4} 
                    className={`w-full px-6 py-4 rounded-2xl bg-white border ${errors.message_details ? 'border-red-500' : 'border-slate-200'} text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400`} 
                    placeholder="اشرح لنا المشكلة بالتفصيل..."
                  ></textarea>
                  {errors.message_details && <p className="text-red-500 text-xs mt-1">{errors.message_details.message}</p>}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
    
                    variant="solid"
                    size="lg"
                    className="w-full bg-[#1c1d4f] text-white hover:bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-100"
                  >
                    إرسال الطلب
                  </Button>
                </motion.div>
              </form>
            </div>

            <div className="bg-[#1c1d4f] p-12 lg:p-20 text-white flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-10">معلومات التواصل</h4>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">واتس اب</div>
                    <a href="https://wa.me/201009911934" className="text-indigo-100 hover:text-white transition-colors">01009911934</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">هاتف</div>
                    <a href="tel:01009911934" className="text-indigo-100 hover:text-white transition-colors">01009911934</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">البريد الإلكتروني</div>
                    <a href="mailto:Info@focus-fastestrepair.com" className="text-indigo-100 hover:text-white transition-colors">info@focus-fastestrepair.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">الموقع</div>
                    <p className="text-indigo-100">عمارة 47 شارع الدقي ميدان الدقي - الجيزة - مصر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};