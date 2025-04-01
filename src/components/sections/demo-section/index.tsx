const DemoSection = () => {
  return (
    <section
      id="demo-section"
      className="relative w-full md:h-[80dvh] h-[70dvh]"
    >
      <img
        src="/assets/images/backgrounds/background-1.png"
        className="w-full h-full top-0 left-0 z-10 absolute"
      />
      <div className="relative container-container w-full h-full flex flex-col justify-center items-center gap-y-12 z-20">
        <h3 className="text-white font-semibold text-center md:text-6xl text-[32px] md:leading-[65px] leading-[38px]">
          Say goodbye to siloed solutions and get started with the unified
          customer experience platform.
        </h3>
        <div className="md:w-auto w-full flex justify-center items-center">
          <button className="md:w-auto w-full text-white text-lg font-bold bg-primary-600 rounded-full border border-transparent hover:border hover:border-white transition-all hover:scale-105 ease-in duration-200 px-[32px] py-[20px] cursor-pointer">
            Get personalized demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
