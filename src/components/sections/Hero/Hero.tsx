import GlassCards from "./glass-cards";
import "../../../styles/hero.css";
import TrustedBy from "./trusted-by";
import { twMerge } from "tailwind-merge";

const Hero = ({ data }: { data: any }) => {
  return (
    <section
      className={twMerge(
        "relative w-full h-auto text-white z-1",
        !data?.hero_slider_active ||
          !data?.hero_card_1_active ||
          !data?.hero_card_2_active
          ? "md:h-auto"
          : "md:h-[190vh]"
      )}
    >
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
        {data?.hero_card_1_active ? (
          <GlassCards data={data?.hero_card_1} />
        ) : null}
        <TrustedBy data={data} />
      </div>
    </section>
  );
};

export default Hero;
