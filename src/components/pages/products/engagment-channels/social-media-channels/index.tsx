import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import {
  Category2,
  ChartSquare,
  DirectInbox,
  ElementPlus,
  Magicpen,
  PresentionChart,
  ReceiptDiscount,
  Send,
  Share,
  Sms,
  SmsSearch,
  Star1,
  Tag,
  TicketStar,
} from "iconsax-react";
import PartnersSlider from "@/components/sections/partners-slider";
import {
  Card1,
  SocialmediaCard,
  SocialmediaCardPoster,
  SocialmediaFadeCard,
} from "./socialmedia-components";

export default function SocialMediaChannels() {
  return (
    <>
      {/* section 1 */}
      <section
        id="products-socialmedia-channels"
        className="h-auto w-full pb-[60px]"
      >
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <ElementPlus
                  variant="Bold"
                  className="text-primary-600 md:w-[20px] w-[16px]"
                />
              }
              text="Social Media Management"
            />
            <h3 className="md:max-w-[700px] block md:text-[62px] text-[42px] font-bold text-center leading-[1.2]">
              Interact with customers on{" "}
              <img
                src="/assets/icons/png/socialmedia.png"
                className="inline w-[100px]"
              />{" "}
              <span className="inline text-primary-600 underline">
                social media
              </span>
            </h3>
            <div className="w-full">
              <p className="text-center text-black/70 md:text-[24px] text-[16px]">
                Stop switching between tools as you market, engage and support
                your customers on social media. Do it all from one, integrated
                customer experience platform.
              </p>
            </div>
            <Button
              text="Get personalized demo"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section id="products-socialmedia-channels-poster">
        <div className="container-container container-narrow">
          <div className="relative flex flex-col items-center justify-center">
            <img
              src="/assets/images/backgrounds/products/socialmedia-poster.png"
              className="w-full h-full absolute z-10"
            />

            <div className="w-full h-full z-20 mt-[100px]">
              <div className="flex flex-col justify-end">
                <div className="p-[60px] w-full">
                  <div className="max-w-[340px] flex items-start">
                    <div className="content flex flex-col gap-[16px]">
                      <h2 className="text-white text-[42px] font-bold leading-[1]">
                        Everything you need to grow on social media
                      </h2>

                      <div
                        id="socialmedia-chat-bubble-card"
                        className="rounded-[16px] bg-white p-[23px]"
                      >
                        <div className="flex items-center justify-between gap-x-[42px]">
                          <div className="card-content flex flex-col gap-y-[4px]">
                            <p className="text-black text-[16px]">
                              Take your profiles to a new level
                            </p>
                            <p className="text-black/30 text-[12px]">
                              Start with Nextie, we’ll jump in if needed.
                            </p>
                          </div>
                          <div className="card-icon">
                            <Send
                              variant="Bold"
                              className="text-primary-600 w-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sections 3 */}
      <section className="w-full relative">
        <div className="w-full relative">
          {/* Background image container - will match content height */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/backgrounds/products/socialmedia-85.png"
              className="w-full h-full object-cover min-h-[800px] md:min-h-0"
              alt="Background"
            />
          </div>

          {/* Content container */}
          <div className="relative container-container flex flex-col">
            <div className="container-narrow">
              <div className="flex flex-col gap-[64px]">
                <h3 className="text-white md:text-[58px] text-[32px] font-bold text-start leading-[1]">
                  85% of people said social media sways{" "}
                  <span className="inline text-white/50">
                    their buying decisions
                  </span>
                </h3>
                <div className="relative w-full h-[450px]">
                  <img
                    src="/assets/images/backgrounds/products/socialmedia-85-poster.png"
                    className="w-full absolute z-10 h-full"
                  />
                  <div className="relative w-full h-full p-[24px] z-20">
                    <div className="h-full flex flex-col justify-end">
                      <div className="h-full w-full flex justify-between items-end gap-x-2">
                        <Card1
                          subtitle="7+ social accounts"
                          title="Average Gen Z'er has:"
                        />
                        <Card1
                          subtitle="3 hours/day"
                          title="Average time spent on social media:"
                        />
                        <Card1
                          subtitle="83% of Gen Z"
                          title="People who shop on social:"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full container-narrow">
              <div className="content mb-[40px]">
                <h3 className="text-white md:text-[58px] text-[32px] font-bold text-center leading-[1]">
                  Manage every social media{" "}
                </h3>
                <p className="text-white/50 md:text-[58px] text-[32px] font-bold text-center leading-[1]">
                  account in one place
                </p>
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

      {/* section 4 */}
      <section className="w-full h-auto">
        <div className="container-container py-[14vh] w-full h-full flex flex-col items-center gap-y-[60px]">
          <SocialmediaCardPoster
            dir="ltr"
            badges={[
              <PageBadge
                icon={<Star1 variant="Bold" className="text-primary-600" />}
                text="Schedule"
              />,
              <PageBadge
                icon={
                  <ReceiptDiscount
                    variant="Bold"
                    className="text-primary-600"
                  />
                }
                text="Publish"
              />,
            ]}
            title={"Schedule & Publish your social posts"}
            subtitle={`Streamline your outreach and marketing efforts by scheduling and
            publishing your content all from a single dashboard. No more app
            switching or isolated marketing campaigns.`}
            img={"/assets/images/backgrounds/products/socialmedia-1.png"}
          />
          <SocialmediaCardPoster
            dir="rtl"
            badges={[
              <PageBadge
                icon={<Category2 variant="Bold" className="text-primary-600" />}
                text="Engage"
              />,
            ]}
            title={"Interact and engage with customers"}
            subtitle={`Increase customers loyalty and show the world that you care about your customers. Answer questions, reply to positive feedback and turn social media visitors into fans.`}
            img={"/assets/images/backgrounds/products/socialmedia-2.png"}
          />
          <SocialmediaCardPoster
            dir="ltr"
            badges={[
              <PageBadge
                icon={<Category2 variant="Bold" className="text-primary-600" />}
                text="Analyze"
              />,
            ]}
            title={"Listen, Monitor and Analyze in Real Time"}
            subtitle={`Keep track of your social media performance and engagement. Never miss an opportunity to turn a like, comment, reply or direct message into a meaningful and positive customer interaction.`}
            img={"/assets/images/backgrounds/products/socialmedia-3.png"}
          />
        </div>
      </section>

      {/* sections 4 */}
      <section className="w-full relative">
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
              <div className="flex items-center justify-center mb-[40px]">
                <PageBadge
                  text="Workflows and automation"
                  icon={<Magicpen className="text-green-400" />}
                  className="from-primary-50/20 inline-bolck"
                  textClass="text-white/70"
                />
              </div>
              <div className="content mb-[40px]">
                <h3 className="text-white md:text-[58px] text-[32px] font-bold text-center leading-[1]">
                  Features we wouldn’t let you go without{" "}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-[1rem]">
                <SocialmediaFadeCard
                  icon={
                    <DirectInbox
                      variant="Bold"
                      size={38}
                      className="text-white/50"
                    />
                  }
                  title="All in one Inbox"
                  text={
                    "See incoming reviews in real-time, all in a single interface."
                  }
                />
                <SocialmediaFadeCard
                  icon={
                    <Sms variant="Bold" size={38} className="text-white/50" />
                  }
                  title="Read & Reply"
                  text={
                    "Engage with your reviews right from the inbox in real-time"
                  }
                />
                <SocialmediaFadeCard
                  icon={
                    <SmsSearch
                      variant="Bold"
                      size={38}
                      className="text-white/50"
                    />
                  }
                  title="Advanced Filtering"
                  text={
                    "Easily organize your inbox based on date/time, channel and other custom rules."
                  }
                />
                <SocialmediaFadeCard
                  icon={
                    <Tag variant="Bold" size={38} className="text-white/50" />
                  }
                  title="Social Tagging"
                  text={
                    "Create custom tags, organize keywords and monitor content across channels the way you want so it’s easy to find and analyze."
                  }
                />

                <SocialmediaFadeCard
                  icon={
                    <Star1 variant="Bold" size={38} className="text-white/50" />
                  }
                  title="Intelligent Routing"
                  text={
                    "Assign roles and route reviews to you or your team members as you see fit."
                  }
                />
                <SocialmediaFadeCard
                  icon={
                    <PresentionChart
                      variant="Bold"
                      size={38}
                      className="text-white/50"
                    />
                  }
                  title="Performance Monitoring"
                  text={
                    "Measure the impact, monitor your team and turn insights into valuable business outcomes."
                  }
                />

                <SocialmediaFadeCard
                  icon={
                    <Share variant="Bold" size={38} className="text-white/50" />
                  }
                  title="Social Tagging"
                  text={
                    "Track mentions, listen to conversations across social channels, forums, blogs, custom sources and more."
                  }
                />

                <SocialmediaFadeCard
                  icon={
                    <ChartSquare
                      variant="Bold"
                      size={38}
                      className="text-white/50"
                    />
                  }
                  title="Competitor Listening"
                  text={
                    "Track competitor performance using keywords and profiles. Understand industry trends, patterns and more."
                  }
                />
                <SocialmediaFadeCard
                  icon={
                    <TicketStar
                      variant="Bold"
                      size={38}
                      className="text-white/50"
                    />
                  }
                  title="Advanced Ticketing"
                  text={
                    "Respond to tickets and provide integrated, world class customer service across all your social media channels from a single location."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last 2 sections */}
      <PartnersSlider />

      <section
        id="product-cta-banner"
        className="container-container md:min-h-[100dvh] min-h-screen h-full w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full md:h-[448px] h-full flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/pricing-help-cta.webp"
            className="absolute w-full md:h-auto h-full top-0 left-0 z-10 object-cover md:rounded-none rounded-[32px]"
          />
          <div className="relative h-full flex flex-col items-center text-center justify-center md:py-[72px] py-[44px] md:px-[105px] px-[50px] z-20">
            <h3 className="text-white md:text-[52px] text-[34px] font-[600] leading-[1.2]">
              Ready to make business conversations better?
            </h3>

            <div className="md:w-auto w-full flex md:flex-row flex-col gap-4 mt-[32px] ">
              <a
                href="#"
                role="button"
                className="rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
              >
                Let's talk business
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
