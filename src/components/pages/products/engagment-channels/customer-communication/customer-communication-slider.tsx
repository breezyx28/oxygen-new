// components/TestimonialSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderCard } from "./customer-communication-components";
import { ArrowLeft, ArrowRight } from "iconsax-react";

export const CustomerCommunicationSlider = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ el: ".swiper-pagination-custom", clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {[1, 2, 3, 4].map((slide, index) => (
            <SwiperSlide key={index}>
              <SliderCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center">
          {/* Custom controls below the swiper */}
          <div className="w-[fit-content] flex items-center justify-center gap-6 mt-12">
            <button className="swiper-button-prev-custom text-xl text-gray-600 hover:text-black cursor-pointer">
              <ArrowLeft />
            </button>

            <div className="swiper-pagination-custom flex justify-center items-center gap-2" />

            <button className="swiper-button-next-custom text-xl text-gray-600 hover:text-black cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
