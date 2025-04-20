import { twMerge } from "tailwind-merge";

type ButtonIconProps = {
  text: string;
  icon: any;
  className?: string;
  onClickHandler?: React.FormEventHandler<HTMLButtonElement>;
};

const ButtonIcon = ({
  text,
  icon,
  onClickHandler,
  className,
}: ButtonIconProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        "w-[fit-content] inline-block md:text-[20px] text-[14px] font-[500] rounded-full border border-primary-600 md:py-[20px] py-[16px] md:px-[32px] px-[24px] shadow-[0 6px 25px 0 rgba(11,16,41,.1)] text-white bg-primary-600 hover:text-primary-600 hover:bg-white duration-200 leading-[1.2] cursor-pointer",
        className
      )}
      onClick={onClickHandler}
    >
      <div className="flex items-center gap-x-3">
        {text}
        {icon}
      </div>
    </button>
  );
};

export default ButtonIcon;
