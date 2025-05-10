import { useState } from "react";
import { twMerge } from "tailwind-merge";

type MultiToggleSwitchProps = {
  options: string[];
  initialValue?: string;
  onChange?: (selectedValue: string) => void;
};

const MultiToggleSwitch = ({
  options = [],
  initialValue,
  onChange,
}: MultiToggleSwitchProps) => {
  if (options.length < 2) {
    throw new Error("MultiToggleSwitch requires at least 2 options");
  }

  const [selectedValue, setSelectedValue] = useState(
    initialValue || options[0]
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="w-full inline-flex border border-gray-300 md:rounded-full rounded-[12px] overflow-hidden bg-white">
      {options.map((option, index) => {
        const isActive = selectedValue === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(option)}
            className={twMerge(
              "md:block hidden w-full py-[20px] px-[32px] text-[20px] font-medium focus:outline-none rounded-full m-1 cursor-pointer",
              isActive ? "bg-blue-600 text-white" : "text-gray-700",
              // Round left for first and right for last
              index === 0
                ? "rounded-l-full"
                : index === options.length - 1
                ? "rounded-r-full"
                : ""
            )}
          >
            {option}
          </button>
        );
      })}

      <select className="w-full md:hidden block rounded-[12px] bg-gray-200 px-4 py-3">
        {options.map((option, index) => {
          return (
            <option value={option} onClick={() => handleSelect(option)}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MultiToggleSwitch;
