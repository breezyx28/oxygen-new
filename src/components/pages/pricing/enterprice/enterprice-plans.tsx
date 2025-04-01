import { ArrowDown2, DollarCircle, Profile2User } from "iconsax-react";
import EnterpricePlanCard from "./enterprice-plan-card";
import { twMerge } from "tailwind-merge";

type SelectPricingUnitProps = {
  text: string;
  active?: boolean;
};

const EnterpricePlans = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-[1rem]">
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
        <SelectPricingUnitOptions />
        <div className="w-auto md:flex hidden items-center gap-x-[20px]">
          <SelectPricingUnit text={"Per Agent/Per Month Pricing"} active />
          <SelectPricingUnit text={"Usage-based pricing"} />
          <SelectPricingUnit text={"Concurrent Pricing"} />
        </div>
        <div className="flex items-center gap-x-[16px]">
          <span className="text-[16px] text-black/50">Currency</span>
          <SelectPriceCurrency />
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-[40px]">
        <EnterpricePlanCard />
        <EnterpricePlanCard bgColor="bg-primary-100" />
        <EnterpricePlanCard
          bgColor="bg-gradient-to-bl from-blue-600 to-slate-900"
          dark
        />
      </div>
    </div>
  );
};

const SelectPricingUnit = ({ text, active }: SelectPricingUnitProps) => (
  <div
    className={twMerge(
      "w-auto flex items-center gap-x-[8px] rounded-full py-[8px] px-[16px] group transition-all duration-200 ease-in cursor-pointer",
      active ? "bg-primary-100" : "bg-transparent"
    )}
  >
    <Profile2User
      size={20}
      variant="Bold"
      className={twMerge(active ? "text-primary-600" : "text-black/50")}
    />
    <span
      className={twMerge(
        "text-[15px] font-[600]",
        active ? "text-black" : "text-black/50"
      )}
    >
      {text}
    </span>
  </div>
);

const SelectPriceCurrency = () => (
  <div className="relative">
    {/* Hidden checkbox to control the dropdown */}
    <input
      type="checkbox"
      name="select-currency"
      id="select-currency"
      className="peer hidden"
    />

    {/* Label that acts as the button to toggle the dropdown */}
    <label
      htmlFor="select-currency"
      className="flex items-center gap-x-[4px] text-[15px] font-[550] rounded-full p-[8px] border border-black/20 bg-transparent hover:bg-primary-100 cursor-pointer"
    >
      <DollarCircle size={20} variant="Bold" className="text-black/50" />
      <span className="">USD</span>
      <ArrowDown2 size={14} className="text-primary-600" />
    </label>

    {/* Dropdown menu that appears when the checkbox is checked */}
    <div
      className="options absolute bg-white w-full z-30 hidden peer-checked:block transition-all duration-300"
      style={{
        boxShadow: "0 7px 32px 0 rgba(11,16,41,.05);",
      }}
    >
      <div className="relative mt-[8px] flex flex-col gap-y-[8px] divide-y p-[8px] rounded-[16px] border border-black/20">
        <div className="option flex items-center gap-x-[4px] text-[15px] font-[550]">
          <DollarCircle size={20} variant="Bold" className="text-black/50" />
          <span className="">USD</span>
        </div>
        <div className="option flex items-center gap-x-[4px] text-[15px] font-[550]">
          <DollarCircle size={20} variant="Bold" className="text-black/50" />
          <span className="">USD</span>
        </div>
      </div>
    </div>
  </div>
);

const SelectPricingUnitOptions = () => (
  <div className="relative w-full md:hidden inline">
    {/* Hidden checkbox to control the dropdown */}
    <input
      type="checkbox"
      name="select-currency"
      id="select-currency"
      className="peer hidden"
    />

    {/* Label that acts as the button to toggle the dropdown */}
    <label
      htmlFor="select-currency"
      className="flex items-center justify-between gap-x-[4px] text-[15px] font-[550] rounded-[8px] p-[1rem] border border-black/20 bg-[#0b10290d] cursor-pointer"
    >
      <div className="flex items-center gap-x-1">
        <Profile2User size={18} variant="Bold" className="text-primary-600" />
        <span className="">USD</span>
      </div>
      <ArrowDown2 size={16} className="text-primary-600" />
    </label>

    {/* Dropdown menu that appears when the checkbox is checked */}
    <div
      className="options absolute bg-white w-full z-30 hidden peer-checked:block transition-all duration-300"
      style={{
        boxShadow: "0 7px 32px 0 rgba(11,16,41,.05);",
      }}
    >
      <div className="relative mt-[8px] flex flex-col gap-y-[8px] divide-y p-[8px] rounded-[8px] border border-black/20">
        <div className="option flex items-center gap-x-[4px] text-[15px] font-[550]">
          <Profile2User
            size={14}
            variant="Bold"
            className={twMerge("text-primary-600")}
          />
          <span className={twMerge("text-[15px] font-[600] text-black")}>
            option 1
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default EnterpricePlans;
