import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { Profile2User } from "iconsax-react";
import { twMerge } from "tailwind-merge";

type Hero1Props = {
  pageTitle: string;
  pageSubTitle: string;
  badgeIcon?: React.ReactNode;
  badgeText: string;
  buttonText: string;
};
const Hero1 = ({
  badgeText,
  badgeIcon,
  pageTitle,
  pageSubTitle,
  buttonText,
}: Hero1Props) => {
  return (
    <div
      className={twMerge(
        "container-container flex flex-col justify-center items-center space-y-8"
      )}
    >
      <PageBadge
        text={badgeText ?? "badge-text"}
        icon={
          badgeIcon ?? (
            <Profile2User variant="Bold" className="text-primary-600" />
          )
        }
      />

      <h2 className="text-center md:text-7xl text-5xl font-bold">
        {pageTitle}
      </h2>
      <p className="text-black/70 text-xl md:max-w-[600px] max-w-full text-center">
        {pageSubTitle}
      </p>

      <Button
        text={buttonText}
        className="md:w-[fit-content] w-full text-center md:font-normal font-bold md:scale-[1] scale-[1.1]"
      />
    </div>
  );
};

export default Hero1;
