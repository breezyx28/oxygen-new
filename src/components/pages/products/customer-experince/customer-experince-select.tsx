import SelectOptions from "@/components/inputs/select/select-options";
import { CustomerExperinceCard2 } from "./customer-experince-component";
import { Monitor } from "iconsax-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PageBadge from "@/components/cards/page-badge";

export const CustomerExperinceSelect = () => {
  const [activeTab, setActiveTab] = useState("Unified customer management");

  const tabs = [
    "Unified customer management",
    "Automated workflows",
    "AI powered journeys",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Unified customer management":
        return (
          <CustomerExperinceCard2
            badge={
              <PageBadge
                icon={
                  <div className="flex items-center gap-2 md:text-2xl text-base">
                    <Monitor variant="Bold" className="text-primary-600" />
                    Connected
                  </div>
                }
                text="conversations"
                textClass="text-black/50 md:!text-2xl text-base"
                className="bg-transparent text-2xl"
              />
            }
            title="Unified customer management"
            image="/assets/images/posters/customer-experince/poster-8.webp"
            text="Create a single source of truth for all your customer conversations, and provide amazing service every time."
          />
        );

      case "Automated workflows":
        return (
          <CustomerExperinceCard2
            badge={
              <PageBadge
                icon={
                  <div className="flex items-center gap-2 md:text-2xl text-base">
                    <Monitor variant="Bold" className="text-primary-600" />
                    AI-powered
                  </div>
                }
                text="automations"
                textClass="text-black/50 md:!text-2xl text-base"
                className="bg-transparent text-2xl"
              />
            }
            title="Automated workflows"
            image="/assets/images/posters/customer-experince/poster-9.webp"
            text="Provide a better customer experience with intelligent routing and AI-powered automations."
          />
        );

      case "AI powered journeys":
        return (
          <CustomerExperinceCard2
            badge={
              <PageBadge
                icon={
                  <div className="flex items-center gap-2 md:text-2xl text-base">
                    <Monitor variant="Bold" className="text-primary-600" />
                    Customer
                  </div>
                }
                text="journey management"
                textClass="text-black/50 md:!text-2xl text-base"
                className="bg-transparent text-2xl"
              />
            }
            title="AI powered Journeys"
            image="/assets/images/posters/customer-experince/poster-10.webp"
            text="Automate monitoring of your customers’ activity over time to improve engagement and retention."
          />
        );
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <section>
      <div className="container-container container-narrow">
        <div className="bg-white pt-[80px] md:border-b border-none">
          <div className="px-0 flex justify-center items-center mb-8">
            <div className="md:text-7xl text-4xl font-bold text-center">
              The ultimate CX platform that goes beyond conversations
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full flex justify-between md:gap-[0px] gap-[8px] border-b divide divide-x">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={twMerge(
                    "w-full px-[10px] py-[2rem] cursor-pointer transition-all duration-100 ease-in-out border-b-2 border-b-transparent",
                    activeTab === tab
                      ? " border-b-primary-600 text-primary-600"
                      : "text-gray-500"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* <SelectOptions
              className="w-full md:hidden flex"
              onChange={(e: any) => setActiveTab(e.currentTarget.value)}
              options={[
                {
                  id: 1,
                  value: "Unified customer management",
                  text: "Unified customer management",
                },
                {
                  id: 2,
                  value: "Automated workflows",
                  text: "Automated workflows",
                },
                {
                  id: 3,
                  value: "AI powered journeys",
                  text: "AI powered journeys",
                },
              ]}
            /> */}
          </div>
        </div>
        <div className="">{renderContent()}</div>
      </div>
    </section>
  );
};
