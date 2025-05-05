import TrustedCompaniesSlider from "@/components/sliders/trusted-companies-slider";
import {
  ArrowCircleUp2,
  ArrowUp,
  Heart,
  Message,
  Translate,
} from "iconsax-react";

export const TrustedAiChatCard = () => {
  return (
    <div className="trusted-card flex items-center bg-gradient-to-r from-primary-200/20 to-transparent py-[16px] pl-[16px] rounded-[16px] border border-white/20">
      <div className="bg-white rounded-full h-[40px] w-[40px] flex items-center justify-center mr-[clamp(.469vw,.625vw,.625vw)]">
        <Heart size="16" color="#FF8A65" variant="Bulk" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[12px]">TrustRadius</h3>
        <p className="text-base leading-[20px] font-[600]">
          #1 Most Loved on TrustRadius
        </p>
      </div>
    </div>
  );
};

export const AiChatTrustedBy = () => {
  return (
    <div className="flex flex-col pb-[120px] md:gap-y-[30px] gap-y-[50px]">
      <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start">
        <h3 className="md:max-w-[40%] max-w-full w-full text-[28px] leading-[34px] font-[600]">
          Trusted by forward-thinking companies:
        </h3>
        <div className="md:max-w-[60%] max-w-full md:mt-0 mt-[40px]">
          <TrustedCompaniesSlider />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[12px]">
        <TrustedAiChatCard />
        <TrustedAiChatCard />
        <TrustedAiChatCard />
      </div>
    </div>
  );
};

export const AiChatCard1 = () => (
  <div className="py-[20px] px-[32px] max-w-[353px]">
    <div className="flex flex-col">
      <div className="w-[fit-content] rounded-full bg-white p-4 mb-4">
        <Message size={30} variant="Bold" className="text-primary-600" />
      </div>
      <div className="flex flex-col gap-y-2 text-white">
        <h3 className="text-xl font-bold">Automation across channels</h3>
        <p className="text-white/70 text-[12px]">
          Use AI chatbots on your website, Facebook, WhatsApp, and more.
        </p>
      </div>
    </div>
  </div>
);

export const AiChatCard2 = () => (
  <div className="flex items-start gap-4 border-b border-primary-600/50 md:min-h-[200px] min-h-[120px] h-full">
    <div className="">
      <Translate size={30} variant="Bold" className="text-primary-600" />
    </div>
    <div className="flex flex-col gap-y-5">
      <h4 className="md:text-2xl text-xl font-bold">Multilingual</h4>
      <p className="text-sm text-black/70">
        Deliver support in over 50 languages for global business conversations.
      </p>
    </div>
  </div>
);

export const AiChatCard3 = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex flex-col md:items-start items-center justify-center gap-y-8 p-4 border-b">
    <span className="md:text-5xl text-4xl font-bold">{value}</span>
    <span className="text-xl text-black/70 block">
      {label}{" "}
      <ArrowCircleUp2
        variant="Bold"
        size={32}
        className="text-green-400 inline ml-2"
      />
    </span>
  </div>
);
