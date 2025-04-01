import { twMerge } from "tailwind-merge";

type IconProps = {
  className?: string;
};

const ComputerScreenIcon = ({ className }: IconProps) => {
  return (
    <img
      src="/assets/icons/png/computer-screen.png"
      className={twMerge("", className)}
    />
  );
};

export default ComputerScreenIcon;
