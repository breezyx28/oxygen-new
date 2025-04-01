const ImgSliderCard = () => {
  return (
    <div className="relative md:h-[440px] h-[260px] md:w-[340px] w-[260px] rounded-[16px] overflow-hidden">
      <img
        src="/assets/images/posters/poster-1.webp"
        alt="slider-image"
        loading="lazy"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ImgSliderCard;
