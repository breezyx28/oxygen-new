import { twMerge } from "tailwind-merge";

type OutlineButtonProps = {
  text: string;
  className?: string;
};

const OutlineButton = ({ text, className }: OutlineButtonProps) => {
  return (
    <a
      href="#"
      className={twMerge(
        "w-[fit-content] inline-block md:text-[20px] text-[14px] font-[500] rounded-full border border-black md:py-[20px] py-[16px] md:px-[32px] px-[24px] shadow-[0 6px 25px 0 rgba(11,16,41,.1)] text-black bg-transparent hover:text-white hover:bg-primary-600 duration-200 leading-[1.2]",
        className
      )}
    >
      {text}
    </a>
  );
};

export default OutlineButton;
