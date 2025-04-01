import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    <a
      href="#"
      className={twMerge(
        "w-[fit-content] inline-block md:text-[20px] text-[14px] font-[500] rounded-full border border-primary-600 md:py-[20px] py-[16px] md:px-[32px] px-[24px] shadow-[0 6px 25px 0 rgba(11,16,41,.1)] text-white bg-primary-600 hover:text-primary-600 hover:bg-white duration-200",
        className
      )}
    >
      {text}
    </a>
  );
};

export default Button;
