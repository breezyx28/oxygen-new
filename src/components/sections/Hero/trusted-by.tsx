import HeroTrustedCard from "../../cards/hero-trusted-card";
import TrustedCompaniesSlider from "../../sliders/trusted-companies-slider";

const TrustedBy = ({ data }: any) => {
  return (
    <div className="flex flex-col pb-[120px] md:gap-y-[30px] gap-y-[50px]">
      <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start">
        <h3 className="md:max-w-[40%] max-w-full w-full text-white text-[28px] leading-[34px] font-[600]">
          {data?.hero_slider_title ??
            "Trusted by innovators and forward-thinking companies:"}
        </h3>
        <div className="md:max-w-[60%] max-w-full md:mt-0 mt-[40px]">
          <TrustedCompaniesSlider />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px]">
        {data?.hero_card_2?.map((item: any, index: number) => (
          <HeroTrustedCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
