import { twMerge } from "tailwind-merge";
import { SelectHTMLAttributes } from "react";

type SelectOption = {
  id: number;
  value: string;
  text: string;
  selected?: boolean;
  // For any additional option-specific props
  [key: string]: any;
};

type SelectOptionsProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  options: SelectOption[];
};

const SelectOptions = ({
  options,
  className,
  ...props
}: SelectOptionsProps) => {
  return (
    <select
      className={twMerge(
        "rounded-[8px] border border-gray-300 py-[14px] pl-[1rem] pr-[24px] text-[16px]",
        className
      )}
      {...props}
    >
      {options.map((item) => {
        const { id, value, text, selected, ...optionProps } = item;
        return (
          <option key={id} value={value} selected={selected} {...optionProps}>
            {text}
          </option>
        );
      })}
    </select>
  );
};

export default SelectOptions;
