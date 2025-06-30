import GlassCards from "./glass-cards";
import "../../../styles/hero.css";
import TrustedBy from "./trusted-by";

const Hero = ({ data }: { data: any }) => {
  return (
    <section className="relative w-full md:h-[190vh] h-auto text-white z-1">
      <div className="absolute right-0 top-0 h-full w-full">
        {/* Use next/image for optimization */}
        <div className="relative h-full">
          <img
            src={data?.hero_cover ?? "/assets/images/hero/man.webp"}
            alt="Customer Experience"
            className="object-cover absolute z-[-1] w-full h-full"
            width={3000}
          />
        </div>
      </div>
      <div className="container-container w-full h-auto flex justify-center items-center pt-[12.984375vw]">
        <div className="max-w-4xl text-center">
          <h1 className="hero-title-text">
            {data?.hero_title ?? "Loading..."}
          </h1>

          <p className="hero-subtitle-text px-4 mt-10">
            {data?.hero_subtitle ?? "Loading..."}
          </p>
          <button className="hero-button rounded-full mt-6">
            {data?.hero_cta_title ?? "Loading..."}
          </button>
        </div>
      </div>
      <div className="container-container">
        <GlassCards data={data?.hero_card_1} />
        <TrustedBy data={data} />
      </div>
    </section>
  );
};

export default Hero;
