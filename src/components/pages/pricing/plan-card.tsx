import InfoIcon from "@/components/icons/info-icon";
import { ArrowDown, TickCircle } from "iconsax-react";
import { twMerge } from "tailwind-merge";

type planCardProps = {
  data: any;
};

const PlanCard = ({ data }: planCardProps) => {
  return (
    <div className="relative overflow-hidden md:bg-transparent bg-white w-full flex flex-col items-start border border-black/30 md:border-transparent md:border-none rounded-[24px] md:rounded-none">
      <div
        className={twMerge(
          "w-full px-[16px] py-[24px] flex flex-col gap-y-[16px]",
          data?.bgColor
        )}
      >
        <h3
          className={twMerge(
            "text-[30px] font-[600] leading-[36px]",
            data.color === "black" ? "text-black" : "text-white"
          )}
        >
          {data.name}
        </h3>
        <div className="flex flex-col gap-y-[8px]">
          <span
            className={twMerge(
              "text-[48px] leading-[56px] font-[600]",
              data.color === "black" ? "text-black" : "text-white"
            )}
          >
            ${data.price}
          </span>
          <small
            className={twMerge(
              "text-[12px] leading-[16px]",
              data.color === "black" ? "text-black/50" : "text-white/80"
            )}
          >
            /user/mo
          </small>
        </div>
        <a
          href="#"
          className={twMerge(
            "w-full text-[16px] font-[500] text-center flex justify-center items-center px-[21px] py-[14px] rounded-full border border-primary-600 transition-all ease-in-out duration-200",
            data.color === "black"
              ? "bg-primary-600 text-white hover:bg-white hover:text-primary-600"
              : "bg-white text-primary-600 hover:bg-primary-600 hover:text-white"
          )}
        >
          Get a Demo
        </a>
      </div>
      <div className="min-h-[505px] flex flex-col">
        <div className="flex flex-col gap-[8px] p-[16px]">
          <h3 className="text-[20px] leading-[28px] font-[600]">
            For startups
          </h3>
          <p className="text-[14px] leading-[20px]">{data.description}</p>
          <span className="flex items-center text-black text-[16px] font-[600] min-h-[20px]">
            <span className="">Read more</span>
            <ArrowDown />
          </span>
        </div>
        <div className="plan-features flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[48px]">
          <p className="w-full text-black text-[16px] font-[600] leading-[20px]">
            Digital Features:
          </p>
          <ul className="">
            {data.features?.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-[4px] text-black/60 py-[6px]"
              >
                <TickCircle
                  size={24}
                  className="text-primary-600 mr-[4px]"
                  variant="Bold"
                />
                <div className="flex items-center text-black text-[14px] leading-[20px]">
                  <InfoIcon className="w-[16px] opacity-50 mr-[4px]" />
                  {feature}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
