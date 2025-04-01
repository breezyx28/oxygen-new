import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ToggleSwitchProps = {
  switchWrapperStyle?: string;
  switchStyle?: string;
  labels?: {
    leftText?: string;
    rightText?: string;
  };
};

const ToggleSwitch = ({
  switchStyle,
  switchWrapperStyle,
  labels,
}: ToggleSwitchProps) => {
  // State to manage the toggle switch
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle the state
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center space-x-4 cursor-pointer text-gray-100 transition-all duration-300 ease-in-out">
      {/* Left Text */}
      <span className={isChecked ? "text-[#0b102980]" : "text-black"}>
        {labels?.leftText ?? "Left"}
      </span>
      {/* Toggle Switch */}
      <span className="relative">
        <input
          id="Toggle1"
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={twMerge(
            "w-13 h-8 border border-primary-600 rounded-full shadow-inner bg-white transition-all duration-300 ease-in-out",
            isChecked ? "bg-primary-600" : "bg-white",
            switchWrapperStyle
          )}
        ></div>
        <div
          className={twMerge(
            "absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full shadow bg-primary-600 transition-all duration-300 ease-in-out",
            isChecked ? "translate-x-5 bg-white" : "bg-primary-600",
            switchStyle
          )}
        ></div>
      </span>
      {/* Right Text */}
      <span className={isChecked ? "text-black" : "text-[#0b102980]"}>
        {labels?.rightText ?? "Right"}
      </span>
    </label>
  );
};

export default ToggleSwitch;
