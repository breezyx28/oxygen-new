import { Heart } from "iconsax-react";

const TrustedCard = () => {
  return (
    <div className="trusted-card flex items-center bg-gradient-to-r from-primary-600/10 to-transparent py-[16px] pl-[16px] rounded-[16px]">
      <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center mr-[clamp(.469vw,.625vw,.625vw)]">
        <Heart size="16" color="#FF8A65" variant="Bulk" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-black text-[12px]">TrustRadius</h3>
        <p className="text-black text-base leading-[20px] font-[600]">
          #1 Most Loved on TrustRadius
        </p>
      </div>
    </div>
  );
};

export default TrustedCard;
