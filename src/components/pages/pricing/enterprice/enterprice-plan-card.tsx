import InfoIcon from "@/components/icons/info-icon";
import { ArrowDown2, TickCircle } from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type EnterpricePlanCardProps = {
  bgColor?: string;
  dark?: boolean;
};
type FeatureItemProps = {
  text?: string;
  dark?: boolean;
};

const EnterpricePlanCard = ({ bgColor, dark }: EnterpricePlanCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={twMerge(
        "flex flex-col justify-start bg-[rgba(11,16,41,0.05)] rounded-[16px]",
        bgColor,
        dark ? "text-white" : ""
      )}
    >
      <div className="w-full h-full px-[20px] py-[24px]">
        <div className="w-full h-full flex flex-col">
          <h3 className="text-[2rem] font-semibold leading-[2.2rem] mb-[8px]">
            Essential
          </h3>
          {/* Paragraph with dynamic line clamping */}
          <p
            className={twMerge(
              "text-[14px] text-black/70 leading-[1.25rem] mb-[1rem]",
              isExpanded ? "" : "line-clamp-3",
              dark ? "text-white" : ""
            )}
          >
            Powerful inbound and outbound contact center capabilities for one
            channel (voice or digital), with customer journey orchestration,
            automations, customizable intelligent and skills-based routing,
            unified customer context, and lite CRM.
          </p>
          {/* Read more/less button */}
          <div
            className="flex items-center text-[15px] font-[600] mb-[32px] cursor-pointer"
            onClick={toggleExpand}
          >
            <span>{isExpanded ? "Read less" : "Read more"}</span>
            <ArrowDown2
              className={`ml-1 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <h4
                className={twMerge(
                  "w-[fit-content] py-[4px] px-[12px] rounded-full bg-white text-[14px] mb-[16px]",
                  dark ? "text-black" : ""
                )}
              >
                Core features
              </h4>
              <ul className="flex flex-col">
                <FeatureItem
                  text="Powerful inbound / outbound channels"
                  dark={dark}
                />
                <FeatureItem
                  text="Full workflow engine for journey orchestration"
                  dark={dark}
                />
                <FeatureItem
                  text="Best-in-class workflow automations and APIs"
                  dark={dark}
                />
                <FeatureItem
                  text="Transcription and summarization"
                  dark={dark}
                />
                <FeatureItem
                  text="Customizable intelligent and skills-based routing"
                  dark={dark}
                />
              </ul>
            </div>
            <div className="pt-[18px] flex flex-col gap-y-[24px]">
              <div className="inline space-x-[4px]">
                <span
                  className={twMerge(
                    "text-[12px]",
                    dark ? "text-white/50" : "text-black/50"
                  )}
                >
                  From
                </span>
                <span className="text-[32px] font-semibold">$129</span>
                <span
                  className={twMerge(
                    "text-[12px] ",
                    dark ? "text-white/50" : "text-black/50"
                  )}
                >
                  /agent/mo
                </span>
              </div>
              <div className="w-full">
                <a
                  href="#"
                  className="block w-full text-center text-[16px] text-white font-semibold hover:text-primary-600 bg-primary-600 hover:bg-white border border-primary-600 duration-300 rounded-full py-[14px]"
                >
                  Get a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "bg-[#cdd6fe] rounded-b-[16px] flex items-center justify-between py-[12px] px-[20px]"
        }
      >
        <p className="text-[14px] font-semibold text-black">
          Views all features
        </p>
        <ArrowDown2 size={16} className="text-primary-600" />
      </div>
    </div>
  );
};

const FeatureItem = ({ text, dark }: FeatureItemProps) => (
  <li className="w-full flex items-center min-h-[32px]">
    <TickCircle
      size={24}
      className={twMerge("mr-[4px]", dark ? "text-white" : "text-primary-600")}
      variant="Bold"
    />
    <div className="flex items-center">
      <InfoIcon className="w-[16px] opacity-50 mr-[4px]" />
      <span
        className={twMerge("text-[14px]", dark ? "text-white" : "text-black")}
      >
        {text ?? "Lorem ipsum dolor sit, amet consectetur."}
      </span>
    </div>
  </li>
);

export default EnterpricePlanCard;
