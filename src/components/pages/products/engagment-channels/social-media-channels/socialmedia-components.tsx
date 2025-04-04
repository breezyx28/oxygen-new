import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { ReceiptDiscount, Star1 } from "iconsax-react";
import { twMerge } from "tailwind-merge";

export const Card1 = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div
    id="socialmedia-card-1"
    className="w-full rounded-[16px] bg-white p-[23px]"
  >
    <div className="card-content flex flex-col gap-y-[4px]">
      <p className="text-[12px]">{title}</p>
      <p className="text-[31px] font-bold">{subtitle}</p>
    </div>
  </div>
);

export const SocialmediaCard = ({
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
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="text-xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-black/70">{text}</p>
  </div>
);

export const SocialmediaFadeCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white/20 p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-white/70">{text}</p>
  </div>
);

export const SocialmediaCardPoster = ({
  dir,
  badges,
  title,
  subtitle,
  img,
}: {
  dir: "rtl" | "ltr";
  badges: any[];
  title: string;
  subtitle: string;
  img: string;
}) => (
  <div
    className={twMerge(
      "flex gap-[70px] py-[32px] pr-[90px] pl-[32px] rounded-[32px] bg-[#0b10290d]",
      dir === "ltr" ? "flex row" : "flex-row-reverse pr-[32px] pl-[90px]"
    )}
  >
    <div className="image-cover w-full h-full">
      <img src={img} className="w-full h-auto object-contain" />
    </div>
    <div className="w-full flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex gap-x-[16px] mb-[16px]">
          {badges.length > 0 ? (
            badges.map((badge) => badge)
          ) : (
            <>
              <PageBadge
                icon={<Star1 variant="Bold" className="text-primary-600" />}
                text="Schedule"
              />
              <PageBadge
                icon={
                  <ReceiptDiscount
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text="Publish"
              />
            </>
          )}
        </div>
        <div className="flex flex-col gap-y-[24px]">
          <h3 className="text-[42px] font-bold leading-[1.3]">{title}</h3>
          <p className="text-black/70 leading-[1.3] text-base">{subtitle}</p>
        </div>
      </div>
      <Button text="Get My Demo" className="" />
    </div>
  </div>
);
