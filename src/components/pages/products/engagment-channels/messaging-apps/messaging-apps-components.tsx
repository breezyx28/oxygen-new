import PageBadge from "@/components/cards/page-badge";
import { ReceiptDiscount, StatusUp } from "iconsax-react";

export const MessagingAppCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[32px] flex flex-col">
      {icon}
      <h3 className="text-2xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-base text-black/70">{text}</p>
  </div>
);

export const DesignedFor = () => (
  <div className="pl-[90px] pr-[32px] py-[102px] rounded-[16px] border border-[#ffffff00] bg-[#ffffff1a] text-white">
    <div className="flex items-center gap-[32px]">
      <div className="content flex flex-col gap-[16px]">
        <div className="badges-container flex items-center gap-[16px]">
          <PageBadge
            text="Sales"
            icon={<StatusUp variant="Bold" size={14} className="text-white" />}
            className="from-white/50"
            textClass="text-white"
          />
          <PageBadge
            text="Increase conversations"
            icon={
              <ReceiptDiscount
                variant="Bold"
                size={14}
                className="text-white"
              />
            }
            className="from-white/50"
            textClass="text-white"
          />
        </div>
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-[42px] font-bold leading-[1]">
            Drive sales on any messaging app
          </h2>
          <p className="text-white/50">
            Grow revenue by making your products and services available via any
            messaging app.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src="/assets/images/backgrounds/products/socialmedia-service.png"
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
);
