import { MinusCirlce, TickCircle } from "iconsax-react";
import InfoIcon from "../icons/info-icon";
import "../../styles/faqs.css";

const FaqContent = () => {
  return (
    <div className="">
      <div className="md:px-[20px] px-[0px] w-full flex items-center my-[24px]">
        <div className="w-full md:block hidden max-w-[256px] bg-transparent"></div>

        <div className="w-full flex items-center md:gap-x-[32px] gap-x-[8px]">
          <div className="text-center w-full rounded-[8px] mx-auto py-[16px] bg-primary-600/20">
            Digital
          </div>

          <div className="text-center w-full rounded-[8px] mx-auto py-[16px] bg-primary-600/20">
            Digital
          </div>

          <div className="text-center w-full rounded-[8px] mx-auto py-[16px] bg-primary-600/20">
            Digital
          </div>

          <div className="text-center w-full rounded-[8px] mx-auto py-[16px] bg-primary-600/20">
            Digital
          </div>
        </div>
      </div>

      <div className="faq-table-body-wrapper w-full">
        {[1, 2, 3].map((item: any) => (
          <div
            key={item}
            className="faq-row md:p-[20px] p-[0px] w-full flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 py-[20px]"
          >
            <div className="max-w-[256px] w-full flex md:flex-row flex-row-reverse items-center gap-x-[4px]">
              <InfoIcon className="w-[20px] opacity-50" />
              <span className="text-black text-[14px]">
                Unlimited business voice & Video
              </span>
            </div>
            <div className="w-full flex items-center gap-x-[32px]">
              <div className="w-full flex justify-center">
                <MinusCirlce size="26" color="#c8c9ce" variant="Bold" />
              </div>

              <div className="w-full flex justify-center items-center">
                <TickCircle
                  size="26"
                  className="text-primary-600"
                  variant="Bold"
                />
              </div>

              <div className="w-full flex justify-center items-center">
                <TickCircle
                  size="26"
                  className="text-primary-600"
                  variant="Bold"
                />
              </div>

              <div className="w-full flex justify-center items-center">
                <TickCircle
                  size="26"
                  className="text-primary-600"
                  variant="Bold"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqContent;
