import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderComponentProps {
  items: React.ReactNode[];
  slidesToShow?: number;
  speed?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  rtl?: boolean;
  className?: string;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  items,
  slidesToShow = 3,
  speed = 3000,
  autoplay = true,
  pauseOnHover = false,
  rtl = false,
  className = "",
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    speed,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: rtl,
    pauseOnHover,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
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

  return (
    <div className={`w-full ${className}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
