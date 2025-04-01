const CtaSection = () => {
  return (
    <section
      id="pricing-chat"
      className="container-container md:min-h-[100dvh] min-h-auto h-full w-full flex flex-col items-center justify-center"
    >
      <div className="relative w-full h-[448px] flex flex-col justify-center items-center">
        {/* Image with responsive sizing */}
        <img
          src="/assets/images/backgrounds/pricing-help-cta.webp"
          className="absolute w-full h-full top-0 left-0 z-10 object-cover md:object-contain rounded-[24px] md:rounded-none"
          alt="Pricing Help Background"
        />
        {/* Content */}
        <div className="relative h-full flex flex-col items-center text-center justify-center md:py-[72px] md:px-[105px] py-[30px] px-[50px] z-20">
          <h3 className="text-white md:text-[48px] text-[32px] font-[500] md:leading-normal leading-[1.2]">
            Need help deciding which plan is right for you?
          </h3>
          <p className="text-white/70 text-[18px] font-[500] text-center mt-[clamp(16px,1.25vw,32px)]">
            Talk with an expert and find a solution.
          </p>
          <a
            href="#"
            role="button"
            className="mt-[32px] rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 hover:scale-105 py-[1.25rem] px-[2rem] transition-all duration-200 ease-in-out"
          >
            Chat with an expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
