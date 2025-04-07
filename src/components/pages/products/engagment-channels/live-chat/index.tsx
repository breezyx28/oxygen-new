import Button from "@/components/buttons/button";
import OutlineButton from "@/components/buttons/outline-button";
import PageBadge from "@/components/cards/page-badge";
import {
  BookSaved,
  DollarCircle,
  Heart,
  Maximize3,
  PresentionChart,
  Star1,
  TickCircle,
} from "iconsax-react";
import {
  AvatarGreetingCard,
  IntegratedMedia,
  LiveChatFeaturesCard,
} from "./live-chat-components";
import StackedAvatars from "@/components/cards/stacked-avatars";
import { Card2 } from "@/components/cards/card-2";
import { SplittedImages } from "@/components/cards/splitted-images";
import PartnersSlider from "@/components/sections/partners-slider";

export const LiveChat = () => {
  return (
    <>
      <section id="products-messaging-apps" className="h-auto w-full">
        <div className="container-container pt-[120px]">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <PresentionChart
                  variant="Bold"
                  className="text-primary-600 md:w-[20px] w-[16px]"
                />
              }
              text="AI Live Chat"
            />
            <h3 className="md:text-[62px] text-[42px] font-bold text-center leading-[1.2]">
              Resolve customer issues instantly with AI chat support
            </h3>
            <div className="max-w-[520px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Keep customers happy, and increase efficiency with AI-powered
                chatbots for sales and support.
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
            <div className="relative h-[490px] w-full flex flex-col justify-end text-start">
              <img
                src="/assets/images/backgrounds/products/livechat-hero-bg.webp"
                className="absolute w-full h-full rounded-[32px] object-cover z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-container container-narrow">
        <div className="w-full flex flex-col gap-12">
          <h3 className="text-[42px] text-black text-center font-bold leading-[1.2]">
            We seamlessly integrate live chat, video chat, and popular
            messengers{" "}
            <span className="inline text-black/50">
              into one powerful platform.
            </span>
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <IntegratedMedia
              text="Live Chat"
              icon={
                <img
                  src="/assets/icons/socialmedia/chat-bubble.png"
                  className="w-[32px]"
                />
              }
            />
            <IntegratedMedia
              text="Whatsapp"
              icon={
                <img
                  src="/assets/icons/socialmedia/whatsapp-icon.png"
                  className="w-[32px]"
                />
              }
            />
            <IntegratedMedia
              text="Mail"
              icon={
                <img
                  src="/assets/icons/socialmedia/envelope.png"
                  className="w-[32px]"
                />
              }
            />
            <IntegratedMedia
              text="Viper"
              icon={
                <img
                  src="/assets/icons/socialmedia/viber-icon.png"
                  className="w-[32px]"
                />
              }
            />
            <IntegratedMedia
              text="Instagram DM"
              icon={
                <img
                  src="/assets/icons/socialmedia/instagram-icon.png"
                  className="w-[32px]"
                />
              }
            />
            <IntegratedMedia
              text="Facebook Messenger"
              icon={
                <img
                  src="/assets/icons/socialmedia/messenger-icon.png"
                  className="w-[32px]"
                />
              }
            />
          </div>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-full relative">
          {/* Background image container - will match content height */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/assets/images/backgrounds/products/bg-3.png"
              className="w-full h-full object-cover min-h-[800px] md:min-h-0"
              alt="Background"
            />
          </div>

          {/* Content container */}
          <div className="relative container-narrow flex flex-col gap-y-[100px] py-[100px]">
            <div className="container-container w-full mb-[10%]">
              <div className="flex flex-col gap-y-12">
                <div className="rounded-[32px] bg-gradient-to-r from-white/20 to-transparent flex flex-col gap-y-8 py-[40px] px-[80px]">
                  <AvatarGreetingCard />

                  <h3 className="inline text-white text-[48px] font-bold text-center leading-[1.2]">
                    With Nextiva’s AI you can deliver personalized experiences.
                    Resolve up to 60%{" "}
                    <span className="inline text-white/50">
                      of customer questions.
                    </span>
                  </h3>
                </div>
                <h3 className="inline text-white text-[42px] font-bold text-center leading-[1.2] py-[60px]">
                  Average chat response takes 4 minutes to solve and costs $20.{" "}
                  <span className="inline text-green-300">
                    With AI, respond in seconds at fraction of the cost.
                  </span>
                </h3>
                <div className="flex justify-center items-center gap-[64px]">
                  <div className="flex items-center gap-4">
                    <StackedAvatars
                      imgs={[
                        "/assets/images/avatars/1.png",
                        "/assets/images/avatars/3.png",
                        "/assets/images/avatars/4.png",
                      ]}
                    />
                    <span className="text-white/50 font-bold">
                      Human chat conversations
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <StackedAvatars
                      imgs={[
                        "/assets/images/avatars/1.png",
                        "/assets/images/avatars/3.png",
                      ]}
                    />
                    <span className="text-white/50 font-bold">
                      AI chat conversations
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <LiveChatFeaturesCard
                    chipIcon={
                      <TickCircle
                        variant="Bold"
                        className="w-[24px] text-yellow-500"
                      />
                    }
                    chipTitle={"Availability"}
                    feature1={{
                      state: "down",
                      title: "Limited",
                      subtitle: "Subject to working hours and breaks.",
                    }}
                    feature2={{
                      state: "up",
                      title: "High",
                      subtitle: "Available 24/7, no breaks needed.",
                    }}
                  />
                  <LiveChatFeaturesCard
                    chipIcon={
                      <Star1
                        variant="Bold"
                        className="w-[24px] text-green-200"
                      />
                    }
                    chipTitle={"Accuracy"}
                    feature1={{
                      state: "down",
                      title: "Varies",
                      subtitle: "Depends on workload and efficiency.",
                    }}
                    feature2={{
                      state: "up",
                      title: "Fast",
                      subtitle: "Can process and respond to emails quickly.",
                    }}
                  />
                  <LiveChatFeaturesCard
                    chipIcon={
                      <DollarCircle
                        variant="Bold"
                        className="w-[24px] text-red-500"
                      />
                    }
                    chipTitle={"Cost"}
                    feature1={{
                      state: "up",
                      title: "Lower",
                      subtitle: "Prone to human error.",
                    }}
                    feature2={{
                      state: "up",
                      title: "Higher",
                      subtitle:
                        "Consistent responses, less prone to error if well-programmed.",
                    }}
                  />
                  <LiveChatFeaturesCard
                    chipIcon={
                      <Maximize3
                        variant="Bold"
                        className="w-[24px] text-white/70"
                      />
                    }
                    chipTitle={"Cost"}
                    feature1={{
                      state: "down",
                      title: "Higher",
                      subtitle: "Salaries, benefits, and training costs.",
                    }}
                    feature2={{
                      state: "up",
                      title: "Lower",
                      subtitle: "Initial setup cost, minimal ongoing expenses.",
                    }}
                  />
                  <LiveChatFeaturesCard
                    chipIcon={
                      <BookSaved
                        variant="Bold"
                        className="w-[24px] text-yellow-500"
                      />
                    }
                    chipTitle={"Learning and adaptation"}
                    feature1={{
                      state: "down",
                      title: "Limited",
                      subtitle: "Constrained by human resource availability.",
                    }}
                    feature2={{
                      state: "up",
                      title: "Lower",
                      subtitle:
                        "Can handle large volumes of emails simultaneously.",
                    }}
                  />
                </div>
                <div className="flex flex-col items-center gap-y-10 mt-4">
                  <h2 className="text-white text-5xl font-bold">
                    Looks interesting? Check out more.
                  </h2>
                  <Button text="Learn more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto">
        <div className="container-container container-narrow flex flex-col justify-center items-center gap-y-[60px] ">
          <h3 className="text-5xl font-bold text-center max-w-[720px]">
            Drive more impact from every conversation
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <Card2
              icon={
                <div className="rounded-full p-4 bg-primary-100 max-w-[fit-content]">
                  <Heart
                    variant="Bold"
                    size={24}
                    className="text-primary-600"
                  />
                </div>
              }
              title="Livechat"
              text="Add Nextiva to your product, app, or website to create ongoing engagement with your customers and foster lasting relationships."
              className="bg-gradient-to-br from-primary-100/70 to-transparent"
              textStyle="text-[14px]"
              titlStyle="text-[18px]"
            />
            <Card2
              icon={
                <div className="rounded-full p-4 bg-primary-100 max-w-[fit-content]">
                  <Heart
                    variant="Bold"
                    size={24}
                    className="text-primary-600"
                  />
                </div>
              }
              title="All messaging apps"
              text="No training, no configuration, no new bot paths. Getting started is easy. You’ll be live in minutes."
              className="bg-gradient-to-br from-primary-100/70 to-transparent"
              textStyle="text-[14px]"
              titlStyle="text-[18px]"
            />
            <Card2
              icon={
                <div className="rounded-full p-4 bg-primary-100 max-w-[fit-content]">
                  <Heart
                    variant="Bold"
                    size={24}
                    className="text-primary-600"
                  />
                </div>
              }
              title="Conversational AI"
              text="Our AI powered solution enables automates up to 90% of all your customer interactions across all of your digital channels."
              className="bg-gradient-to-br from-primary-100/70 to-transparent"
              textStyle="text-[14px]"
              titlStyle="text-[18px]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper container-container pb-[120px] flex flex-col justify-center items-center gap-y-16">
          <h3 className="inline text-center text-[48px] leading-[1.1] font-bold">
            Customer messaging that sounds like you. Powered by{" "}
            <span className="text-primary-600">Nextiva</span>.
          </h3>
          <div className="w-full flex flex-col gap-y-22">
            <SplittedImages
              img1="/assets/images/backgrounds/products/live-chat-bg-1.png"
              img2="/assets/images/backgrounds/products/live-chat-bg-2.png"
              imgCaption={
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-white text-[44px] font-bold">On brand</h3>
                  <p className="text-white text-sm">
                    Deliver a consistent brand experience in every interaction.
                    Create and customize widgets to reflect your brand.
                  </p>
                </div>
              }
            />
            <SplittedImages
              img1="/assets/images/backgrounds/products/live-chat-bg-3.png"
              img2="/assets/images/backgrounds/products/live-chat-bg-4.png"
              imgCaption={
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-white text-[44px] font-bold">Flexible</h3>
                  <p className="text-white text-sm">
                    It’s fast, flexible, and simple to configure. You won’t need
                    a lot of time or technical support to get started.
                  </p>
                </div>
              }
            />
            <SplittedImages
              img1="/assets/images/backgrounds/products/live-chat-bg-5.png"
              img2="/assets/images/backgrounds/products/live-chat-bg-6.png"
              imgCaption={
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-white text-[44px] font-bold">
                    Built for today’s customer experience
                  </h3>
                  <p className="text-white text-sm">
                    Deliver faster answers for your website visitors and
                    customers, and build deeper connections. At every
                    touchpoint.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <PartnersSlider />

      <section
        id="product-cta-banner"
        className="container-container md:min-h-[100dvh] min-h-screen h-full w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full md:h-[448px] h-full flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/products/live-chat-bg-cta.png"
            className="absolute w-full md:h-auto h-full top-0 left-0 z-10 object-cover md:rounded-none rounded-[32px]"
          />
          <div className="relative h-full flex flex-col items-start text-start justify-center md:py-[72px] py-[44px] md:px-[72px] px-[50px] z-20">
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
};
