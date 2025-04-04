import Button from "@/components/buttons/button";
import OutlineButton from "@/components/buttons/outline-button";
import PageBadge from "@/components/cards/page-badge";
import PartnersSlider from "@/components/sections/partners-slider";
import TrustedBy from "@/components/sliders/trusted-by";
import { Star1 } from "iconsax-react";
import { SocialmediaCard } from "../social-media-channels/socialmedia-components";
import { useState } from "react";
import SelectOptions from "@/components/inputs/select/select-options";
import { twMerge } from "tailwind-merge";
import { CustomersReviewsPanel } from "./customers-reviews-components";

export default function CustomersReviews() {
  const [activeTab, setActiveTab] = useState("Location Reviews");

  const tabs = ["Location Reviews", "eCommerce Reviews", "App Store Reviews"];

  const renderContent = () => {
    switch (activeTab) {
      case "Location Reviews":
        return (
          <CustomersReviewsPanel
            badgeText="Multi-platform"
            title="Make a great first impression for your store"
            subtitle="Online reviews significantly influence a customer’s decision to visit your location. Maintain a positive rating with Nextiva to increase foot traffic. Available with Facebook, Google, Tripadvisor, Yelp and more."
            image="/assets/images/backgrounds/products/google-review-girl.png"
          />
        );
      case "eCommerce Reviews":
        return (
          <CustomersReviewsPanel
            badgeText="Easy integrations"
            title="Manage product ratings to increase online sales"
            image="/assets/images/backgrounds/products/reviews-2.png"
            subtitle="Products with positive reviews are 88% more likely to be purchased compared to those with low or no rating. Integrate eCommerce platforms like Amazon and Flipkart for real-time review monitoring and responding."
          />
        );
      case "App Store Reviews":
        return (
          <CustomersReviewsPanel
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
    <>
      <section id="products-messaging-apps" className="h-auto w-full">
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <Star1
                  variant="Bold"
                  className="text-primary-600 md:w-[20px] w-[16px]"
                />
              }
              text="Nextiva Messengers"
            />
            <h3 className="md:text-[78px] text-[42px] font-bold text-center leading-[1.2]">
              Manage Online Reviews and Create Raving Fans
            </h3>
            <div className="max-w-full">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Don’t leave your reputation to chance by trying to manage 15
                review sites. Nextiva brings every review into one view using AI
                and automation so you can monitor and respond to your customers
                instantly.
              </p>
            </div>
            <div className="flex items-center gap-[10px] mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]">
              <Button text="Learn how it works" />
              <OutlineButton
                text="Case studies"
                className="border-2 hover:border-primary-600"
              />
            </div>
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex gap-4 items-center justify-center">
            <div className="relative h-[490px] w-[33%] flex flex-col justify-end text-start">
              <img
                src="/assets/images/backgrounds/products/review-and-reputation-left-side-hero-image.png"
                className="absolute w-full h-full rounded-[32px] object-cover z-10"
              />
            </div>
            <img
              src="/assets/images/backgrounds/products/review-and-repulation-right-side-hero-image.png"
              className="w-[66%] h-[490px] rounded-[32px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="products-digital-channels-trust-slider">
        <div className="container-container pt-[70px] !text-black">
          <TrustedBy />
        </div>
      </section>

      <section
        id="customers-reviews-banner"
        className="container-container pb-[72px] w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/products/customers-reviews-banner.png"
            className="absolute w-full h-full top-0 left-0 z-10 object-cover rounded-[24px]"
          />
          <div className="relative h-full flex flex-col items-center text-center justify-center gap-y-[12px] md:py-[72px] py-[44px] md:px-[105px] px-[50px] z-20">
            <h3 className="inline-block text-white md:text-[48px] text-[34px] font-[600] leading-[1]">
              93% of users say online reviews{" "}
              <span className="inline text-white/50">
                had an impact on their buying decisions.
              </span>
            </h3>

            <p className="text-white">
              Nextiva will help improve your reviews.
            </p>
          </div>
        </div>
      </section>

      <section id="manage-reviews" className="w-full relative">
        <div className="w-full relative">
          {/* Background image container - will match content height */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/backgrounds/products/background-2.png"
              className="w-full h-full object-cover min-h-[800px] md:min-h-0"
              alt="Background"
            />
          </div>

          {/* Content container */}
          <div className="relative container-container flex flex-col">
            <div className="w-full container-narrow">
              <div className="content mb-[40px]">
                <h3 className="inline-block text-white md:text-[55px] text-[32px] font-bold text-center leading-[1]">
                  <span className="inline text-white/50">
                    Manage all online reviews in{" "}
                  </span>
                  one place
                </h3>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-[1rem]">
                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/facebook.png"
                      className="w-[64px]"
                    />
                  }
                  title="Facebook Messenger"
                  text={
                    "Elevate your presence on Facebook with powerful publishing, scheduling and monitoring tools."
                  }
                />
                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/insta.png"
                      className="w-[64px]"
                    />
                  }
                  title="Instagram"
                  text={
                    "Never miss a beat and turn the popularity of Instagram into your biggest asset."
                  }
                />
                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/twitter.png"
                      className="w-[64px]"
                    />
                  }
                  title="X (formerly Twitter)"
                  text={
                    "Boost your X (formerly Twitter) following with robust publishing & listening tools."
                  }
                />
                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/linkedin.png"
                      className="w-[64px]"
                    />
                  }
                  title="LinkedIn"
                  text={
                    "Enhance your LinkedIn brand with personalized and professional interactions."
                  }
                />

                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/youtube.png"
                      className="w-[64px]"
                    />
                  }
                  title="YouTube"
                  text={
                    "Build better relationships with your YouTube fans and followers from a single, scalable platform."
                  }
                />
                <SocialmediaCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/pinterest.png"
                      className="w-[64px]"
                    />
                  }
                  title="Pinterest"
                  text={
                    "Turn your Pinterest content into real, long lasting business relationships."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products-digital-channels-tab">
        <div className="w-full">
          <div className="md:bg-[#f9fafe] bg-transparent pt-[80px] md:border-b border-none">
            <div className="container-container flex justify-start items-center mb-8">
              <div className="text-start text-5xl font-bold">
                Customer Insights
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

      {/* Last sections */}
      <PartnersSlider />
    </>
  );
}
