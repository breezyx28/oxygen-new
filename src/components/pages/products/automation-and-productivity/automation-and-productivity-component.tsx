import OutlineButton from "@/components/buttons/outline-button";
import PageBadge from "@/components/cards/page-badge";
import { Star1 } from "iconsax-react";

export const AutomationAndProductivityCard1 = () => (
  <div className="col-span-full p-[32px] border rounded-[2rem] bg-[#F9FAFE]">
    <div className="flex justify-between items-center">
      <div className="max-w-[300px] w-full flex flex-col gap-y-[20px]">
        <div className="flex items-center gap-4">
          <PageBadge
            text="Spotlight"
            className="bg-yellow-100 text-black text-base"
            icon={<Star1 variant="Bold" className="text-yellow-400" />}
          />
          <PageBadge
            text="Spotlight"
            className="bg-yellow-100 text-black text-base"
            icon={<Star1 variant="Bold" className="text-yellow-400" />}
          />
        </div>
        <h3 className="text-3xl font-bold">Commerce & Sales</h3>
        <div className="flex flex-col gap-y-3">
          <p className="text-black/70">
            Allow users to buy a product or service via live chat. Integrate
            your entire catalog, SKUs, internal or external APIs and deploy the
            right messages. Sell on Instagram, LiveChat, WhatsApp with the same
            seamless experience.
          </p>
          <OutlineButton
            className="!py-[15px] hover:bg-transparent hover:text-black !text-[16px] font-bold"
            text={"learn more"}
          />
        </div>
      </div>
      <div>
        <img
          src="/assets/images/backgrounds/products/ai-automation-cover.webp"
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
);

export const AutomationAndProductivityCard2 = ({
  img,
  badge,
  title,
  text,
}: {
  badge: React.ReactNode;
  img: string;
  title: string;
  text: string;
}) => (
  <div className="flex flex-col gap-y-[20px]">
    <div className="img-cover p-[32px] bg-[#F9FAFE] rounded-[16px] border">
      <img src={img} className="w-full h-auto" />
    </div>
    <div className="flex flex-col gap-y-4">
      {badge}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-black/70 text-sm">{text}</p>
    </div>
  </div>
);
