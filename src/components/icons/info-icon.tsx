import { twMerge } from "tailwind-merge";

type InfoIconProps = {
  className?: string;
};

const InfoIcon = ({ className }: InfoIconProps) => {
  return (
    <img
      src="/assets/icons/png/information-circle-icon.png"
      className={twMerge("", className)}
    />
  );
};

export default InfoIcon;
