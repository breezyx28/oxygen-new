import { useState } from "react";

interface Tab {
  label: string;
  onClick?: () => void; // Optional onClick handler for each tab
}

interface LinkTabsProps {
  tabs: Tab[];
  defaultActiveTab?: number; // Optional default active tab index
}

const LinkTabs = ({ tabs, defaultActiveTab = 0 }: LinkTabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

  return (
    <div className="max-w-[350px] w-full relative">
      <div
        className="w-auto flex items-center rounded-full bg-white h-auto md:p-2 p-[1px] text-[14px] font-[500]"
        style={{
          boxShadow: "0 6px 25px 0 rgba(11,16,41,.102)",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              tab.onClick?.(); // Call the tab's onClick handler if it exists
            }}
            className={`
              md:px-[32px] md:py-[16px] px-[16px] py-[8px] w-full rounded-full transition-all duration-300 ease-in-out cursor-pointer relative z-10
              ${activeTab === index ? "text-white" : "text-gray-700"}
            `}
          >
            {tab.label}
          </button>
        ))}

        {/* Dynamic Sliding Indicator */}
        <div
          className={`
            absolute top-2 bottom-2 rounded-full bg-primary-600 transition-all duration-300 ease-in-out z-0
          `}
          style={{
            width: `calc(${100 / tabs.length}% - 16px)`, // Equal width for each tab
            left: `calc(${(activeTab * 100) / tabs.length}% + 8px)`, // Position based on active tab
          }}
        />
      </div>
    </div>
  );
};

export default LinkTabs;
