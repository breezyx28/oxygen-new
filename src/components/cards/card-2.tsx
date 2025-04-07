import { twMerge } from "tailwind-merge";

export const Card2 = ({
  icon,
  title,
  text,
  className,
  titlStyle,
  textStyle,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  titlStyle?: string;
  textStyle?: string;
}) => (
  <div
    className={twMerge(
      "bg-white p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]",
      className
    )}
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[32px] flex flex-col">
      {icon}
      <h3 className={twMerge("text-2xl font-bold text-black", titlStyle)}>
        {title}
      </h3>
    </div>
    <p className={twMerge("text-base text-black/70", textStyle)}>{text}</p>
  </div>
);
