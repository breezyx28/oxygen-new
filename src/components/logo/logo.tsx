import { twMerge } from "tailwind-merge";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};
const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <img
      src="/assets/logo/logo.png"
      alt="Logo"
      width={width ?? 40}
      height={height ?? 40}
      className={twMerge("cursor-pointer", className)}
    />
  );
};

export default Logo;
