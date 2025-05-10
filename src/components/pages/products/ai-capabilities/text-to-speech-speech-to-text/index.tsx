import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import ComputerScreenIcon from "@/components/icons/computer-screen-icon";
import SectionLayout from "@/components/Layout/section-layout";
import { Global } from "iconsax-react";

import CTASection1 from "@/components/cards/cta-card";
import OutlineButton from "@/components/buttons/outline-button";
import {
  TextToSpeechSpeechToTextCard1,
  TextToSpeechSpeechToTextToggler,
} from "./text-to-speech-speech-to-text-component";

export default function TextToSpeechSpeechToText() {
  return (
    <>
      <section className="h-auto w-full">
        <div className="container-container container-narrow flex md:flex-row flex-col gap-[60px]">
          <div className="md:w-1/2 w-full flex flex-col justify-start gap-y-[8px]">
            <PageBadge
              icon={<ComputerScreenIcon className="md:w-[20px] w-[16px]" />}
              text="Platform"
            />
            <h3 className="md:text-[56px] text-[39px] font-bold md:leading-[1.2] leading-[1.1]">
              Transform Your CX with Text-to-Speech Technologies
            </h3>
            <div className="max-w-[720px]">
              <p className="text-black/70 md:text-[20px] text-[14px]">
                Transform interactions with Nextiva Contact Center’s voice tech.
                Advanced IVR, multi-language support, and enhanced
                searchability.
              </p>

              <Button
                text="Watch 1 Minute Video"
                className="mt-[clamp(2rem,2.13vw,3rem)] md:mb-[60px] mb-[0px]"
              />
            </div>
          </div>

          <div className="hero relative md:w-1/2 w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/icons/partners/telus.webp"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-routing-skills-hero-bg.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-10">
            <h2 className="md:text-5xl text-3xl text-center text-white font-bold">
              Improve your CX in every customer conversation.
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <TextToSpeechSpeechToTextCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Reduced call handling time"
                text="Transform interactions with voice tech to handle calls faster and improve customer satisfaction."
              />
              <TextToSpeechSpeechToTextCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Seamless Interaction"
                text="Real-time automatic KB searches streamline conversations by eliminating the need for agents to pause and look up information."
              />
              <TextToSpeechSpeechToTextCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Enhanced Context"
                text="Real-time KB searches combined with transcription provide contextual insights, resulting in more accurate and comprehensive conversation records."
              />
              <TextToSpeechSpeechToTextCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Customized AI Prompts"
                text="Generative AI prompts can be tailored to specific domains, enhancing the accuracy and relevance of responses for customers."
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center gap-y-12">
            <h2 className="text-center md:text-7xl text-3xl font-bold">
              Scale your contact center with advanced speech technology.
            </h2>
            <TextToSpeechSpeechToTextToggler />
          </div>
        </div>
      </section>

      <CTASection1
        className="md:px-[10px] md:py-[20px] px-[20px] py-[30px]"
        text="Nextiva powers 1 million+ users and billions of interactions annually."
        button={
          <div className="space-y-4 text-center">
            <p className="text-disabled">
              See how Nextiva can help your business deliver exceptional
              experiences as you engage, market, sell, and service.
            </p>
            <div className="flex md:flex-row flex-col justify-center gap-4 items-center">
              <Button
                text="Get My Demo"
                className="hover:bg-transparent hover:text-white hover:border-white"
              />
              <OutlineButton
                text={"See Price"}
                className="text-white border-white hover:bg-white hover:text-primary-600"
              />
            </div>
          </div>
        }
      />
    </>
  );
}
