import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { Category } from "iconsax-react";

type CustomersReviewsPanelProps = {
  badgeText: string;
  title: string;
  image: string;
  subtitle: string;
};

export const CustomersReviewsPanel = ({
  title,
  badgeText,
  subtitle,
  image,
}: CustomersReviewsPanelProps) => (
  <div className="py-[80px] flex md:flex-row flex-col justify-between items-start gap-[75px]">
    <div className="w-[50%] flex flex-col gap-y-[clamp(2rem,2.13vw,3rem)]">
      <PageBadge
        text={badgeText}
        icon={<Category variant="Bold" className="text-primary-600" />}
      />
      <div className="flex flex-col gap-y-2">
        <h3 className="text-black font-bold md:text-[54px] text-[34px] leading-[1.3]">
          {title}
        </h3>
        <p className="text-black/70 text-[15px] leading-[1.2]">{subtitle}</p>
      </div>
    </div>
    <div className="w-[50%] h-[500px]">
      <img
        src={image}
        className="w-auto h-full rounded-[24px] object-contain"
      />
    </div>
  </div>
);
