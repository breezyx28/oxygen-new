const DemoSection = ({ data }: { data: any }) => {
  return data?.section_4_active ? (
    <section
      id="demo-section"
      className="relative w-full md:h-[80dvh] h-[70dvh]"
    >
      <img
        src={
          data?.section_4_cover ?? "/assets/images/backgrounds/background-1.png"
        }
        className="w-full h-full top-0 left-0 z-10 absolute"
      />
      <div className="relative container-container w-full h-full flex flex-col justify-center items-center gap-y-12 z-20">
        <h3 className="text-white font-semibold text-center md:text-6xl text-[32px] md:leading-[65px] leading-[38px]">
          {data?.section_4_title ?? "Loading..."}
        </h3>
        <div className="md:w-auto w-full flex justify-center items-center">
          <a
            href={data?.section_4_cta_link ?? "#"}
            className="md:w-auto w-full text-white text-lg font-bold bg-primary-600 rounded-full border border-transparent hover:border hover:border-white transition-all hover:scale-105 ease-in duration-200 px-[32px] py-[20px] cursor-pointer"
          >
            {data?.section_4_cta_title ?? "Loading..."}
          </a>
        </div>
      </div>
    </section>
  ) : null;
};

export default DemoSection;
