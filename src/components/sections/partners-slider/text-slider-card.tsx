import { ArrowRight } from "iconsax-react";
import "../../../styles/partners-slider.css";

const TextSliderCard = () => {
  return (
    <div className="relative partner-card-bg md:h-[440px] h-[260px] md:w-[340px] w-[260px] rounded-[16px] overflow-hidden">
      <div className="text-slider-container h-full">
        <div className="">
          <p>
            <img
              src="/assets/icons/partners/YMCA-Logo1.png"
              width={98}
              height={73}
              className="max-h-[50px] mb-[40px] object-contain"
              decoding="async"
              loading="lazy"
            />
          </p>
          <div className="flex flex-col gap-y-1">
            <h3 className="md:text-[44px] text-[32px] font-semibold md:leading-[44px] leading-[38px]">
              860M+
            </h3>
            <p className="text-[#0b1029b2] md:text-[16px] text-[14px] font-[400] md:mb-[24px] mb-0 mt-[5px] leading-[20px]">
              Locations
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <h3 className="md:text-[44px] text-[32px] font-semibold md:leading-[44px] leading-[38px]">
              120
            </h3>
            <p className="text-[#0b1029b2] md:text-[16px] text-[14px] font-[400] md:mb-[24px] mb-0 mt-[5px] leading-[20px]">
              Countries
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 pb-[26px]">
          <a
            href="#"
            className="text-[#0B1029] md:text-[22px] text-[16px] md:leading-[24px] leading-[20px] font-[600]"
          >
            Read the case study
          </a>
          <ArrowRight size={22} className="md:w-[22px] w-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default TextSliderCard;
