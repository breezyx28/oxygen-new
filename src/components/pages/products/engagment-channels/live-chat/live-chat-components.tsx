import { ArrowCircleDown2, ArrowCircleUp2, DollarCircle } from "iconsax-react";

export const IntegratedMedia = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => (
  <div className="border rounded-[16px] p-6 flex justify-center items-center gap-4">
    {icon}
    <span className="text-[20px]">{text}</span>
  </div>
);

export const AvatarGreetingCard = () => (
  <div className="flex items-center justify-center">
    <div className="rounded-full bg-gradient-to-r from-white/20 to-transparent flex items-center gap-x-4 max-w-[400px]">
      <img src="/assets/images/avatars/tony-avatar.png" className="w-[64px]" />
      <span className="text-white/50">Hey! Tony from Nextiva here</span>
    </div>
  </div>
);

type LiveChatFeaturesCardProps = {
  chipIcon: React.ReactNode;
  chipTitle: string;
  feature1: { state: "up" | "down"; title: string; subtitle: string };
  feature2: { state: "up" | "down"; title: string; subtitle: string };
};

export const LiveChatFeaturesCard = ({
  chipIcon,
  chipTitle,
  feature1,
  feature2,
}: LiveChatFeaturesCardProps) => (
  <div className="bg-white/10 rounded-[24px] p-[20px]">
    <div className="flex justify-between gap-[60px] items-center">
      <div className="max-w-[240px] w-full">
        <LiveChatChipCard icon={chipIcon} text={chipTitle} />
      </div>
      <div className="flex flex-1 items-center">
        <LiveChatFeatureScaleCard
          state={feature1.state}
          title={feature1.title}
          subtitle={feature1.subtitle}
        />
        <LiveChatFeatureScaleCard
          state={feature2.state}
          title={feature2.title}
          subtitle={feature2.subtitle}
        />
      </div>
    </div>
  </div>
);

export const LiveChatChipCard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="bg-white/10 rounded-full flex items-center gap-[8px] pl-[8px] pr-[24px] py-[8px] max-w-[fit-content]">
    <div className="icon p-[8px] bg-white/10 rounded-full">
      {icon ?? (
        <DollarCircle variant="Bold" className="w-[32px] text-red-600" />
      )}
    </div>
    <div className="content text-[14px] text-white">
      {text ?? "lorem ipsum"}
    </div>
  </div>
);

export const LiveChatFeatureScaleCard = ({
  state,
  title,
  subtitle,
}: {
  state: "up" | "down";
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-1 items-center gap-[8px]">
    <div className="">
      {state === "up" ? (
        <ArrowCircleUp2 variant="Bold" size={26} className="text-green-300" />
      ) : (
        <ArrowCircleDown2 variant="Bold" size={26} className="text-white/20" />
      )}
    </div>
    <div className="flex items-center gap-[10px]">
      <p className="text-white text-[20px] font-bold">{title}</p>
      <p className="text-white/70 text-[12px]">{subtitle}</p>
    </div>
  </div>
);
