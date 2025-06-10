import { twMerge } from "tailwind-merge";

type Banner1Props = {
  text: string;
  coverSrc?: string;
  className?: string;
};
const Banner1 = ({ text, className, coverSrc }: Banner1Props) => {
  return (
    <div className="w-full relative">
      <div className="w-full relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[32px]">
          <img src={coverSrc} className="w-full h-full" alt="Banner" />
        </div>
        <div
          className={twMerge(
            "relative size-full flex-center py-[72px] px-[105px]",
            className
          )}
        >
          <h3 className="text-white text-6xl font-bold text-center">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
