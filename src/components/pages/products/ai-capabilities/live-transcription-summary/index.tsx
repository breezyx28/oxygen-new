import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import ComputerScreenIcon from "@/components/icons/computer-screen-icon";
import SectionLayout from "@/components/Layout/section-layout";
import { Global } from "iconsax-react";

import CTASection1 from "@/components/cards/cta-card";
import OutlineButton from "@/components/buttons/outline-button";
import {
  LiveTranscriptionSummaryCard1,
  LiveTranscriptionSummaryToggler,
} from "./live-transcription-summary-component";

export default function LiveTranscriptionSummary() {
  return (
    <>
      <section className="h-auto w-full">
        <div className="container-container container-narrow flex md:flex-row flex-col gap-[60px]">
          <div className="md:w-1/2 w-full flex flex-col justify-start gap-y-[8px]">
            <PageBadge
              icon={<ComputerScreenIcon className="md:w-[20px] w-[16px]" />}
              text="AI Use Case"
            />
            <h3 className="md:text-[56px] text-[39px] font-bold md:leading-[1.2] leading-[1.1]">
              Real-Time Transcription and Summarization
            </h3>
            <div className="max-w-[720px]">
              <p className="text-black/70 md:text-[20px] text-[14px]">
                Improve call management with instant transcription and
                summarization. Make every conversation count and save time on
                every call.
              </p>
            </div>
          </div>

          <div className="hero relative md:w-1/2 w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/icons/partners/spyrs.webp"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-routing-skills-hero-bg.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-10">
            <h2 className="md:text-5xl text-3xl text-center text-white font-bold">
              Transform calls into actionable insights.
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <LiveTranscriptionSummaryCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Dual Access"
                text="Knowledge base access is bidirectional, enabling both customers and agents to input queries simultaneously. This speeds up response times for customers and frees agents to provide more personalized support to others."
              />
              <LiveTranscriptionSummaryCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Seamless Interaction"
                text="Real-time automatic KB searches streamline conversations by eliminating the need for agents to pause and look up information."
              />
              <LiveTranscriptionSummaryCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Enhanced Context"
                text="Real-time KB searches combined with transcription provide contextual insights, resulting in more accurate and comprehensive conversation records."
              />
              <LiveTranscriptionSummaryCard1
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
              Live transcriptions saves time.
            </h2>
            <LiveTranscriptionSummaryToggler />
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
