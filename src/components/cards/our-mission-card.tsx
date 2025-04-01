import { twMerge } from "tailwind-merge";
import "../../styles/our-mission.css";
import { ArrowRight } from "iconsax-react";

type OurMissionCardProps = {
  color: "white" | "purple" | "blue";
};

const OurMissionCard = ({ color }: OurMissionCardProps) => {
  return (
    <div
      className={twMerge(
        "mission-card relative",
        color === "white"
          ? "mission-card-gradient-1"
          : color === "purple"
          ? "mission-card-gradient-2"
          : "mission-card-gradient-3"
      )}
    >
      {/* <div className="absolute top-0 left-0"> */}
      {color === "white" ? (
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden rounded-[24px]">
          <img
            src="/assets/images/waves/wave-4.png"
            className="relative top-0 left-0 w-full h-full object-contain scale-125 rotate-180"
            alt=""
          />
        </div>
      ) : (
        <img
          src="/assets/images/waves/wave-3.png"
          className="absolute top-0 left-0 w-full h-full object-fill rounded-[24px]"
          alt=""
        />
      )}

      {/* </div> */}
      <div className="">
        <h3
          className={twMerge(
            color === "white"
              ? "mission-card-title-black"
              : "mission-card-title-white"
          )}
        >
          Unify All Customer Interactions
        </h3>
      </div>
      <div className="flex flex-col gap-y-6">
        <p
          className={twMerge(
            color === "white"
              ? "mission-card-subtitle-black"
              : "mission-card-subtitle-white"
          )}
        >
          Meet customers where they are and serve them through any channel:
          Voice, Live Chat, Messaging Apps, SMS, Email, Social, Reviews, Video.
        </p>
        <div className="flex justify-start items-center gap-x-3">
          <a
            href="#"
            className={twMerge(
              "md:text-[20px] text-[16px]",
              color === "white" ? "text-black" : "text-white"
            )}
          >
            Learn more
          </a>
          <ArrowRight size={28} className="md:text-[28px] text-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default OurMissionCard;
