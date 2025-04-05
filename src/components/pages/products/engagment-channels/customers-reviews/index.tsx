import Button from "@/components/buttons/button";
import OutlineButton from "@/components/buttons/outline-button";
import PageBadge from "@/components/cards/page-badge";
import PartnersSlider from "@/components/sections/partners-slider";
import TrustedBy from "@/components/sliders/trusted-by";
import {
  DirectInbox,
  People,
  PresentionChart,
  Refresh,
  Setting5,
  Star1,
  Tag,
} from "iconsax-react";
import { SocialmediaCard } from "../social-media-channels/socialmedia-components";
import { useState } from "react";
import SelectOptions from "@/components/inputs/select/select-options";
import { twMerge } from "tailwind-merge";
import {
  CustomersReviewsFAQ,
  CustomersReviewsPanel,
} from "./customers-reviews-components";

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

      <section className="bg-black w-full h-full">
        <div className="container-container container-narrow w-full h-full flex flex-col justify-center gap-y-[72px]">
          <h2 className="inline text-white text-[66px] text-center font-bold leading-[1.2]">
            Work smarter – manage reviews{" "}
            <span className="inline-block text-white/50">
              with AI and automation
            </span>
          </h2>
          <div className="relative h-[400px]">
            <img
              src="/assets/images/backgrounds/products/review-and-reputation-cta-block-backgorund.png"
              className="absolute w-full h-full rounded-[32px]"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="relative min-h-screen">
          <img
            src="/assets/images/backgrounds/products/reviews-bg-cover.png"
            className="absolute w-full h-full z-10"
            alt=""
          />
          <div className="relative w-full h-full container-container container-narrow z-20">
            <div className="content mb-[40px]">
              <h3 className="text-white md:text-[58px] text-[32px] font-bold text-center leading-[1]">
                Powerful features to manage reviews online – no PR firm
                required.
              </h3>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[1rem]">
              <SocialmediaCard
                icon={
                  <DirectInbox
                    variant="Bold"
                    size={32}
                    className="text-black/30 mb-[10px]"
                  />
                }
                title="All in one Inbox"
                text={
                  "See incoming reviews in real-time, all in a single interface."
                }
              />
              <SocialmediaCard
                icon={<Refresh size={32} className="text-black/30 mb-[10px]" />}
                title="Read & Reply"
                text={
                  "Engage with your reviews right from the inbox in real time."
                }
              />
              <SocialmediaCard
                icon={
                  <People
                    variant="Bold"
                    size={32}
                    className="text-black/30 mb-[10px]"
                  />
                }
                title="Intelligent Routing"
                text={
                  "Assign roles and route reviews to you or your team members as you see fit."
                }
              />
              <SocialmediaCard
                icon={
                  <Tag
                    variant="Bold"
                    size={32}
                    className="text-black/30 mb-[10px]"
                  />
                }
                title="Review Tagging"
                text={
                  "Categorize reviews and create custom tags so its organized the way you want it."
                }
              />

              <SocialmediaCard
                icon={
                  <Setting5
                    variant="Bold"
                    size={32}
                    className="text-black/30 mb-[10px]"
                  />
                }
                title="Advanced Filtering"
                text={
                  "Easily organize your inbox based on date/time, channel and other custom rules."
                }
              />
              <SocialmediaCard
                icon={
                  <PresentionChart
                    variant="Bold"
                    size={32}
                    className="text-black/30 mb-[10px]"
                  />
                }
                title="Performance Monitoring"
                text={
                  "Measure the impact, monitor your team and turn insights into valuable business outcomes"
                }
              />
            </div>

            <div className="testimonial flex flex-col items-center gap-y-8 mt-[80px]">
              <p className="text-white/70 text-[28px] text-center max-w-[700px]">
                “We take our reputation seriously. Nextiva is the only solution
                we trust to support us.”
              </p>
              <div className="flex items-center gap-[24px]">
                <div className="user-img">
                  <img
                    src="/assets/images/avatars/eric.png"
                    className="rounded-full w-[64px] h-[64px]"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[20px] text-white/70 leading-[1.2]">
                    Eric Siu
                  </p>
                  <p className="text-base text-white/50">
                    Founder of Single Grain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-container container-narrow">
        <CustomersReviewsFAQ />
      </section>

      <section className="pb-[120px]">
        <PartnersSlider />
      </section>
    </>
  );
}
