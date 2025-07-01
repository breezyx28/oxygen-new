import Slider from "react-slick";
import TextSliderCard from "./text-slider-card";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useRef, useState } from "react";
import ImgSliderCard from "./img-slider-card";
import "../../../styles/partners-slider.css";
import { useMediaQuery } from "react-responsive";

const PartnersSlider = ({ data }: any) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total number of slides
  const slidesToShow = 4;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= totalSlides - slidesToShow;

  const handlePrevClick = () => {
    if (!isFirstSlide && sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNextClick = () => {
    if (!isLastSlide && sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prev) => Math.min(totalSlides - slidesToShow, prev + 1));
    }
  };

  const CustomPrevArrow = () => (
    <button
      className={`slider-arrow prev-arrow p-6 border rounded-full transition-all duration-200 ${
        isFirstSlide && "border-[#9CA3AF] text-[#9CA3AF]"
      }`}
      onClick={handlePrevClick}
      disabled={isFirstSlide}
    >
      <ArrowLeft size="24" />
    </button>
  );

  const CustomNextArrow = () => (
    <button
      className={`slider-arrow next-arrow p-6 border rounded-full transition-all duration-200 ${
        isLastSlide && "border-[#9CA3AF] text-[#9CA3AF]"
      }`}
      onClick={handleNextClick}
      disabled={isLastSlide}
    >
      <ArrowRight size="24" />
    </button>
  );

  const settings = {
    className: "center max-w-screen",
    infinite: false,
    centerPadding: "20px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return data?.section_6_active ? (
    <section
      id="partner-slider"
      className="w-full md:h-screen h-auto container-narrow"
    >
      <div className="wrapper max-w-full h-full flex flex-col gap-y-[60px]">
        <div className="container-container w-full flex justify-between items-end">
          <div className="w-full">
            <h2 className="text-black md:text-[3.2rem] text-[1.875rem] md:leading-[3.4rem] leading-[1.1] font-[600]">
              {data?.section_6_title ?? "Loading..."}{" "}
              <span className="text-[#0b102980]">
                {data?.section_6_subtitle ?? "Loading..."}
              </span>
            </h2>
          </div>
          <div className="slider-arrows hidden md:flex items-center gap-2">
            <CustomPrevArrow />
            <CustomNextArrow />
          </div>
        </div>
        {isDesktop && (
          <div className="slider-container w-full">
            <Slider ref={sliderRef} {...settings}>
              {data?.section_6_slider?.map((item: any) =>
                item.type === "text" ? (
                  <TextSliderCard data={item} key={item} />
                ) : (
                  <ImgSliderCard data={item} key={item} />
                )
              )}
            </Slider>
          </div>
        )}

        {isTabletOrMobile && (
          <div className="slider-container w-full">
            <Slider ref={sliderRef} {...settings}>
              {data?.section_6_slider?.map((item: any) => (
                <div className="w-full flex flex-col gap-y-[20px]" key={item}>
                  {data?.section_6_slider?.map((item: any) =>
                    item.type === "text" ? (
                      <TextSliderCard data={item} key={item} />
                    ) : (
                      <ImgSliderCard data={item} key={item} />
                    )
                  )}
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  ) : null;
};

export default PartnersSlider;
