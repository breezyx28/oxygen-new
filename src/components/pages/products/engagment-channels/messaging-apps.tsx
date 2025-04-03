import Button from "@/components/buttons/button";
import TrustedBy from "@/components/sliders/trusted-by";
import { ReceiptDiscount, Star1, StatusUp } from "iconsax-react";
import "../../../../styles/products-digital-channels.css";
import PartnersSlider from "@/components/sections/partners-slider";
import PageBadge from "@/components/cards/page-badge";

export default function MessagingApps() {
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
            <h3 className="md:text-[62px] text-[42px] font-bold text-center leading-[1.2]">
              Conversations across any messaging app
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Resolve issues instantly, keep customers happy, and increase
                team efficiency.
              </p>
            </div>
            <Button
              text="Upgrade my CX"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex gap-4 items-center justify-center">
            <div className="relative h-[490px] w-[33%] flex flex-col justify-end text-start">
              <img
                src="/assets/images/backgrounds/products/messegaging-hero-background-1.png"
                className="absolute w-full h-full rounded-[32px] object-cover z-10"
              />
              <h3 className="text-white text-5xl font-bold p-[40px] z-20">
                AI powered responses
              </h3>
            </div>
            <img
              src="/assets/images/backgrounds/products/messegaging-hero-background-2.png"
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
        id="products-digital-channels-consumers"
        className="relaive w-full h-full"
      >
        <div className="relative h-auto w-full bg-[url(/assets/images/backgrounds/products/74.png)] object-cover">
          <div className="relative container-container py-[160px] h-auto flex flex-col justify-center items-center gap-[40px] z-20">
            <h2 className="text-white/60 text-center md:text-[72px] text-[24px] font-bold leading-[1]">
              <span className="text-white">74% of customers</span> feel more
              connected when they can reach you on messaging apps.
            </h2>
            <Button text="learn more" />
          </div>
        </div>
      </section>

      <section id="products-messaging-apps-media">
        <div className="container-container container-narrow">
          <div className="flex md:flex-row flex-col items-start gap-[32px]">
            <div className="max-w-[320px] w-full flex flex-col gap-6">
              <h1 className="block text-start md:text-[50px] text-[28px] font-bold leading-[1] w-full">
                <span className="text-black">Meet customers on their</span>{" "}
                <span className="text-black/50">
                  favorite messaging platform
                </span>
              </h1>
              <Button text="Get my demo" />
            </div>
            <div className="w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem]">
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/messanger.png"
                      className="w-[64px]"
                    />
                  }
                  title="Facebook Messenger"
                  text={
                    "Read and respond to all customer conversations on messenger."
                  }
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/insta.png"
                      className="w-[64px]"
                    />
                  }
                  title="Instagram DM"
                  text={"Respond to customer inquiries and DMs on Instagram."}
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/twitter.png"
                      className="w-[64px]"
                    />
                  }
                  title="Twitter Chat"
                  text={
                    "Respond to conversations on Twitter efficiently with advanced automation."
                  }
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/whatapp.png"
                      className="w-[64px]"
                    />
                  }
                  title="WhatsApp"
                  text={
                    "Connect with international customers and prospects quickly on WhatsApp."
                  }
                />

                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/live-chat.png"
                      className="w-[64px]"
                    />
                  }
                  title="Live Chat"
                  text={
                    "Automatically route high-priority tickets to human agents."
                  }
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/in-app-chat.png"
                      className="w-[64px]"
                    />
                  }
                  title="In-App Chat"
                  text={
                    "Manage customer inquiries within your own app by integrating it."
                  }
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/line.png"
                      className="w-[64px]"
                    />
                  }
                  title="Line"
                  text={
                    "Respond to conversations on Twitter efficiently with advanced automation."
                  }
                />
                <MessagingAppCard
                  icon={
                    <img
                      src="/assets/icons/socialmedia/viber.png"
                      className="w-[64px]"
                    />
                  }
                  title="Viber"
                  text={
                    "Enable your customers to connect with you on Viber at anytime."
                  }
                />
              </div>
            </div>
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
            <div className="container-container mt-[10%]">
              <h3 className="text-white md:text-[58px] text-[32px] font-bold text-center">
                Designed for sales, service and marketing
              </h3>
            </div>

            <div className="container-container w-full mb-[10%]">
              <div className="flex flex-col gap-[100px]">
                <DesignedFor />
                <DesignedFor />
                <DesignedFor />
              </div>
            </div>
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

const MessagingAppCard = ({
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
    <div className="gap-[32px] flex flex-col">
      {icon}
      <h3 className="text-2xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-base text-black/70">{text}</p>
  </div>
);

export const DesignedFor = () => (
  <div className="pl-[90px] pr-[32px] py-[102px] rounded-[16px] border border-[#ffffff00] bg-[#ffffff1a] text-white">
    <div className="flex items-center gap-[32px]">
      <div className="content flex flex-col gap-[16px]">
        <div className="badges-container flex items-center gap-[16px]">
          <PageBadge
            text="Sales"
            icon={<StatusUp variant="Bold" size={14} className="text-white" />}
            className="from-white/50"
            textClass="text-white"
          />
          <PageBadge
            text="Increase conversations"
            icon={
              <ReceiptDiscount
                variant="Bold"
                size={14}
                className="text-white"
              />
            }
            className="from-white/50"
            textClass="text-white"
          />
        </div>
        <div className="flex flex-col gap-[32px]">
          <h2 className="text-[42px] font-bold leading-[1]">
            Drive sales on any messaging app
          </h2>
          <p className="text-white/50">
            Grow revenue by making your products and services available via any
            messaging app.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src="/assets/images/backgrounds/products/socialmedia-service.png"
          className="w-full h-full"
        />
      </div>
    </div>
  </div>
);
