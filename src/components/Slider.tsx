import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const Slider = () => {
  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
  ];

  return (
    <section className="py-16 px-6"> 
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 space-y-3">
          <h3 className="text-3xl md:text-4x text-[#021026] font-bold">
            جودة نثق بها، نتائج تلمسها
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">
            خدماتنا تتميز بالدقة والإحترافية، ونهتم بأدق التفاصيل لضمان رضا عملائنا وتحويل أجهزتكم لحالتها الأصلية.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-4xl"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="pb-16">
                <div className="px-2">
                  <div className="relative overflow-hidden rounded-3xl border-2 border-[#ad9360]/20 shadow-2xl transition-all hover:border-[#ad9360]/60">
                    <img
                      src={img}
                      alt={`Repair Work ${i + 1}`}
                      className="w-full h-[300px] md:h-[400px] object-cover" 
                    />
                    <div className="absolute bottom-4 right-4 bg-[#021026] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      النتيجة النهائية
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل - يمين ويسار */}
          <button className="swiper-button-prev-custom absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#021026] text-[#021026] rounded-full flex items-center justify-center transition-all z-20 shadow-xl hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-0">
            <ChevronLeft size={24} color="white" />
          </button>
          
          <button className="swiper-button-next-custom absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#021026] text-[#021026] rounded-full flex items-center justify-center transition-all z-20 shadow-xl hover:scale-110 active:scale-95 cursor-pointer disabled:opacity-0">
            <ChevronRight size={24} color="white" />
          </button>

          {/* النقاط المخصصة */}
          <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #021026 !important;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #021026 !important;
          width: 24px !important;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};