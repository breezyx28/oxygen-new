import { useState } from "react";
import { EnterpriseContactCenterPanel } from "./enterprise-contact-center-components";
import SelectOptions from "@/components/inputs/select/select-options";
import { twMerge } from "tailwind-merge";

const EnterpriseContactCenterSelect = () => {
  const [activeTab, setActiveTab] = useState("Location Reviews");

  const tabs = ["Location Reviews", "eCommerce Reviews", "App Store Reviews"];

  const renderContent = () => {
    switch (activeTab) {
      case "Location Reviews":
        return (
          <EnterpriseContactCenterPanel
            badgeText="Multi-platform"
            title="Make a great first impression for your store"
            subtitle="Online reviews significantly influence a customer’s decision to visit your location. Maintain a positive rating with Nextiva to increase foot traffic. Available with Facebook, Google, Tripadvisor, Yelp and more."
            image="/assets/images/backgrounds/products/google-review-girl.png"
          />
        );
      case "eCommerce Reviews":
        return (
          <EnterpriseContactCenterPanel
            badgeText="Easy integrations"
            title="Manage product ratings to increase online sales"
            image="/assets/images/backgrounds/products/reviews-2.png"
            subtitle="Products with positive reviews are 88% more likely to be purchased compared to those with low or no rating. Integrate eCommerce platforms like Amazon and Flipkart for real-time review monitoring and responding."
          />
        );
      case "App Store Reviews":
        return (
          <EnterpriseContactCenterPanel
            badgeText="Increase downloads"
            title="Grow your app’s user base"
            image="/assets/images/backgrounds/products/reviews-3.png"
            subtitle="Easily monitor and respond to app store reviews for your iOS and Android apps– all from one platform. Increasing the number of reviews and average star rating can lead to a 60% increase in app downloads."
          />
        );

      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <section>
      <div className="w-full">
        <div className="md:bg-[#f9fafe] bg-transparent pt-[80px] md:border-b border-none">
          <div className="container-container flex justify-start items-center pb-12">
            <div className="text-center md:text-5xl text-3xl font-bold">
              The award-winning Contact Center. Endless CX superpowers.
            </div>
          </div>

          <div className="container-container mb-8">
            <div className="w-full md:flex hidden justify-between gap-[8px]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={twMerge(
                    "w-full px-[10px] py-[2rem] cursor-pointer font-[600] transition-all duration-100 ease-in-out border-b-2 border-b-transparent",
                    activeTab === tab
                      ? " border-primary-600 text-primary-600"
                      : "text-gray-500"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <SelectOptions
              className="w-full md:hidden flex"
              onChange={(e: any) => setActiveTab(e.currentTarget.value)}
              options={[
                {
                  id: 1,
                  value: "Location Reviews",
                  text: "Location Reviews",
                },
                {
                  id: 2,
                  value: "eCommerce Reviews",
                  text: "eCommerce Reviews",
                },
                {
                  id: 3,
                  value: "App Store Reviews",
                  text: "App Store Reviews",
                },
              ]}
            />
          </div>
        </div>
        <div className="container-container">{renderContent()}</div>
      </div>
    </section>
  );
};

export default EnterpriseContactCenterSelect;
