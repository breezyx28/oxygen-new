import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { ElementPlus, Send } from "iconsax-react";
import PartnersSlider from "@/components/sections/partners-slider";

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

const Card1 = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div
    id="socialmedia-card-1"
    className="w-full rounded-[16px] bg-white p-[23px]"
  >
    <div className="card-content flex flex-col gap-y-[4px]">
      <p className="text-[12px]">{title}</p>
      <p className="text-[31px] font-bold">{subtitle}</p>
    </div>
  </div>
);

const SocialmediaCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div
    className="bg-white p-[24px] rounded-[1.5rem] flex flex-col gap-y-[12px]"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.051)",
    }}
  >
    <div className="gap-[16px] flex flex-col">
      {icon}
      <h3 className="text-xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-[14px] leading-[1.5] text-black/70">{text}</p>
  </div>
);
