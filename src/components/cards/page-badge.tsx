import { twMerge } from "tailwind-merge";

type PageBadgeProps = {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  textClass?: string;
};
const PageBadge = ({ icon, text, className, textClass }: PageBadgeProps) => {
  return (
    <div
      className={twMerge(
        "badge flex items-center gap-x-[8px] bg-gradient-to-r from-primary-50 to-transparent py-[6px] px-[10px] rounded-full",
        className
      )}
    >
      {icon}
      <span
        className={twMerge("text-black/70 md:text-base text-[14px]", textClass)}
      >
        {text}
      </span>
    </div>
  );
};

export default PageBadge;
