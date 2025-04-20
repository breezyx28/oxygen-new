import { TickCircle } from "iconsax-react";

export const USNewsBadgeCard = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <TickCircle size={14} className="text-yellow-500" />
    <span className="text-[14px] text-black">{text}</span>
  </div>
);

export const THeadHeader = ({
  title,
  subtitle,
}: {
  title: any;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center gap-y-2">
    <span className="text-black text-xl font-semibold">{title}</span>
    <span className="text-base font-normal">{subtitle}</span>
  </div>
);
