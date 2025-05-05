import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import { ArrowDown, ArrowRight, Briefcase, Star1 } from "iconsax-react";
import {
  AiChatCard1,
  AiChatCard2,
  AiChatCard3,
  AiChatTrustedBy,
} from "./ai-chat-commponents";
import SectionLayout from "@/components/Layout/section-layout";
import StackedAvatars from "@/components/cards/stacked-avatars";
import ButtonIcon from "@/components/buttons/buttonIcon";
import PartnersSlider from "@/components/sections/partners-slider";
import CTASection1 from "@/components/cards/cta-card";

export default function AiChat() {
  return (
    <>
      <section className="h-auto w-full">
        <div className="container-container container-narrow">
          <div className="head flex flex-col justify-center items-center gap-y-[8px]">
            <PageBadge
              icon={
                <Star1
                  variant="Bold"
                  className="md:w-[20px] w-[16px] text-primary-600"
                />
              }
              text="AI Chatbots"
            />
            <h3 className="md:text-[58px] text-[42px] font-bold text-center leading-[1.2]">
              Personalize experiences at <br /> scale with AI chatbots
            </h3>
            <div className="max-w-[720px]">
              <p className="text-center text-black/70 md:text-[20px] text-[14px]">
                Deliver human-like, personalized sales and support every time.
              </p>
            </div>
            <Button
              text="Build my AI chatbot"
              className="mt-[clamp(2rem,2.13vw,3rem)] mb-[60px]"
            />
          </div>

          <div className="hero relative w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/images/backgrounds/products/enterprise-contact-center-hero.webp"
              className="w-full h-full"
            />
          </div>

          <div className="mt-10">
            <AiChatTrustedBy />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/enterprise-contact-center-cover-4.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-white md:text-5xl text-4xl text-center font-bold relative">
              Save time – for you <br /> and your
              <StackedAvatars
                imgsStyle="border-3 border-white"
                className="md:inline-block flex justify-center pl-5 md:pt-0 pt-2"
                imgs={[
                  "/assets/images/avatars/1.png",
                  "/assets/images/avatars/2.png",
                  "/assets/images/avatars/3.png",
                ]}
              />{" "}
              customers.
            </h3>
            <div className="divide md:divide-x divide-x-none divide-white/20 flex md:flex-row flex-col items-center">
              <AiChatCard1 />
              <AiChatCard1 />
              <AiChatCard1 />
              <AiChatCard1 />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section>
        <div className="container-container container-narrow">
          <div className="flex flex-col gap-y-8">
            <h3 className="text-start md:text-6xl text-4xl text-black font-bold">
              Customized automations across different{" "}
              <span className="text-black/50">channels and languages</span>
            </h3>
            <div className="flex md:flex-row flex-col items-center gap-6 h-full">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <AiChatCard2 />
                <AiChatCard2 />
                <AiChatCard2 />
                <AiChatCard2 />
              </div>
              <img
                src="/assets/images/backgrounds/products/customer-communication-card-analytics1.webp"
                className="md:w-[30%] w-full h-[450px] object-cover rounded-[32px] border"
              />
            </div>

            <div className="mt-6">
              <ButtonIcon text="Build my AI Chatbot" icon={<ArrowRight />} />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/enterprise-contact-center-bg-4.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-y-10">
            <h3 className="text-white md:text-7xl text-4xl font-bold text-center">
              90% of interactions can be automated using Nextiva AI
            </h3>
            <div className="flex items-center justify-between md:flex-unwrap flex-wrap">
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
              <Briefcase variant="Bold" size={80} className="text-green-300" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center bg-white/10 h-[150px] w-full">
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-4">
            <ArrowDown size={60} className="text-green-300" />
            <span className="text-3xl text-white">30% of cost eliminated</span>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f5f7ff]">
        <div className="container-container container-narrow">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Image with overlay */}
            <div className="relative w-full md:w-3/4 md:h-[450px] h-[250px] rounded-[32px] overflow-hidden">
              <img
                src="/assets/images/backgrounds/products/enterprise-contact-center-cover-5.webp"
                alt="Happy customer service representative"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="md:max-w-1/2 w-full text-2xl md:text-5xl font-bold text-white mb-8">
                  Customers see amazing results with AI chatbots
                </h3>
                <Button
                  text="Learn more"
                  className="text-primary-600 bg-white hover:text-primary-600 hover:bg-white border-0 font-bold"
                />
              </div>
            </div>

            {/* Right side - Stats cards */}
            <div className="w-full md:w-1/4 flex flex-col justify-between">
              <AiChatCard3 value="40%" label="Response Times" />
              <AiChatCard3 value="20%" label="CSAT Scores" />
              <AiChatCard3 value="50%" label="Digital Deflection" />
            </div>
          </div>
        </div>
      </section>

      <PartnersSlider />

      <CTASection1
        text="Ready to make business interactions better?"
        button={
          <a
            href="#"
            role="button"
            className="rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 py-[1.25rem] md:px-[2rem] px-[1rem] transition-all duration-200 ease-in-out"
          >
            Let's talk business
          </a>
        }
      />
    </>
  );
}
