import { useState } from "react";
import { Add, Minus } from "iconsax-react";
import FaqContent from "./faq-content";
import { twMerge } from "tailwind-merge";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first FAQ

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full">
      <div className="md:space-y-8 space-y-[0px]">
        {/* FAQ 1 */}
        <div className="md:border border-black/20 rounded-[16px] overflow-hidden">
          <button
            className="flex items-center justify-between w-full px-[20px] py-[32px]"
            onClick={() => toggleFAQ(0)}
          >
            <h3
              className={twMerge(
                "font-semibold text-black text-[24px] transition-all duration-200 ease-in-out",
                openIndex !== 0 && "text-[16px]"
              )}
            >
              Productivity
            </h3>
            <span className="text-primary-600">
              {openIndex === 0 ? <Minus size="32" /> : <Add size="32" />}
            </span>
          </button>

          {/* FAQ Content with Animation */}
          <div
            className={twMerge(
              "transition-all duration-300 ease-in-out overflow-hidden",
              openIndex === 0
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pb-[32px]">
              <FaqContent />
            </div>
          </div>
        </div>

        <hr className="block md:hidden" />

        {/* FAQ 2 */}
        <div className="md:border border-black/20 rounded-[16px] overflow-hidden">
          <button
            className="flex items-center justify-between w-full px-[20px] py-[32px]"
            onClick={() => toggleFAQ(1)}
          >
            <h3
              className={twMerge(
                "font-semibold text-black text-[24px] transition-all duration-200 ease-in-out",
                openIndex !== 1 && "text-[16px]"
              )}
            >
              Productivity
            </h3>
            <span className="text-primary-600">
              {openIndex === 1 ? <Minus size="32" /> : <Add size="32" />}
            </span>
          </button>

          {/* FAQ Content with Animation */}
          <div
            className={twMerge(
              "transition-all duration-300 ease-in-out overflow-hidden",
              openIndex === 1
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pb-[32px]">
              <FaqContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
