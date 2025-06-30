import { Heart } from "iconsax-react";

const HeroTrustedCard = ({ data }: any) => {
  return (
    <div className="hero-trusted-card">
      <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center">
        <Heart size="16" color="#FF8A65" variant="Bulk" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-disabled text-[12px]">
          {data?.title ?? "TrustRadius"}
        </h3>
        <p className="text-white text-base leading-[20px] font-[500]">
          {data?.subtitle ?? "#1 Most Loved on TrustRadius"}
        </p>
      </div>
    </div>
  );
};

export default HeroTrustedCard;
