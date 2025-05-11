import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import SectionLayout from "@/components/Layout/section-layout";
import TrustedBy from "@/components/sliders/trusted-by";
import { Chart1, Layer, Profile2User, Shield, Star1 } from "iconsax-react";
import {
  UnifiedInboxCard1,
  UnifiedInboxCard2,
} from "./unified-inbox-component";
import { StarIcon } from "@/components/icons/star-icon";
import BookingFormSection from "@/components/sections/booking-form/section-form";

export default function UnifiedInbox() {
  return (
    <>
      <section>
        <div className="container-container md:pt-[120px] pt-[80px]">
          <div className="flex flex-col justify-center items-center space-y-8">
            <PageBadge
              text="Unified Agent Experience"
              icon={
                <Profile2User variant="Bold" className="text-primary-600" />
              }
            />

            <h2 className="text-center md:text-7xl text-5xl font-bold">
              Centralize all customer interactions
            </h2>
            <p className="text-black/70 text-xl md:max-w-[600px] max-w-full text-center">
              Unify your teams, streamline customer conversations, and foster
              engagement with unified customer inbox.
            </p>

            <Button
              text="Unified my CX now"
              className="md:w-[fit-content] w-full text-center md:font-normal font-bold md:scale-[1] scale-[1.1]"
            />
          </div>

          <div className="mt-12">
            <img
              src="/assets/images/backgrounds/products/unified-inbox-hero-bg.webp"
              className="w-full h-auto"
            />
          </div>
          <div className="md:mt-16 mt-8">
            <TrustedBy />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/unified-inbox-bg-2.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-8 items-center">
              <img
                src="/assets/images/backgrounds/products/unified-inbox-bg-1.webp"
                className="w-full h-auto"
              />
              <h2 className="text-center text-disabled md:text-6xl text-3xl font-bold">
                Nextiva is unifying all customer conversations in one single
                conversational (CRM) inbox.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              <UnifiedInboxCard1
                icon={
                  <Layer variant="Bold" size={24} className="text-white/50" />
                }
                title="View & manage client interactions in a single thread"
                text="Access all historical client interactions and manage customer activity from one screen, empowering your team with contextual insights for tailored customer experience."
              />
              <UnifiedInboxCard1
                icon={
                  <Star1 variant="Bold" size={24} className="text-white/50" />
                }
                title="AI-powered suggestions for sales & service"
                text="Agents receive personalized suggestions and responses for customer conversations, leveraging insights from past case histories, previously mentioned problems and purchase history."
              />
              <UnifiedInboxCard1
                icon={
                  <Shield variant="Bold" size={24} className="text-white/50" />
                }
                title="Access Customer History with CRM"
                text="Elevate your customer support capabilities with seamless native or integrated apps, providing your team access to data from their preferred tools within a unified platform. Streamline workflows and boost efficiency across the board."
              />
              <UnifiedInboxCard1
                icon={
                  <Chart1 variant="Bold" size={24} className="text-white/50" />
                }
                title="Monitor Live Customer Sentiment"
                text="Conduct real-time analysis of customer emotions during interactions, empowering you to gauge satisfaction levels and refine service strategies."
              />
              <UnifiedInboxCard1
                icon={
                  <Layer variant="Bold" size={24} className="text-white/50" />
                }
                title="View & manage client interactions in a single thread"
                text="Access all historical client interactions and manage customer activity from one screen, empowering your team with contextual insights for tailored customer experience."
              />
              <UnifiedInboxCard1
                icon={
                  <Shield variant="Bold" size={24} className="text-white/50" />
                }
                title="Access Customer History with CRM"
                text="Elevate your customer support capabilities with seamless native or integrated apps, providing your team access to data from their preferred tools within a unified platform. Streamline workflows and boost efficiency across the board."
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f5f7ff]">
        <div className="container-narrow flex flex-col gap-y-[60px]">
          <UnifiedInboxCard2 />
          <UnifiedInboxCard2 dir="rtl" />
          <UnifiedInboxCard2 />
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/unified-inbox-bg-3.webp">
        <div className="relative container-container container-narrow">
          <div className="flex justify-center items-center py-[60px]">
            <div className="md:w-[55%] w-full flex flex-col gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-white font-bold md:text-5xl text-3xl">
                  “Their uptime is amazing and their product is easy to use.”
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-disabled md:text-xl text-base">
                  “It’s UI is super clean. Unlike others, they are in a position
                  to put their customers first. You can tell from their customer
                  service and how fast they roll out new products.”
                </p>
                <p className="md:text-xl text-base text-white">
                  Amir Reiter, CEO at CloudTask
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <BookingFormSection
        img="/assets/images/booking-form/Rich-Sparkman2.webp"
        text={
          <div className="w-full text-white">
            <h3 className="md:text-5xl text-[20px] font-[600] mb-[12px]">
              We're a performance company, and we wouldn't settle for anything
              less than Nextiva.
            </h3>
            <p className="md:text-xl text-lg">Rich Sparkman</p>
            <p className="md:text-xl text-lg opacity-50">
              IT Director, Shelby American
            </p>
          </div>
        }
      />
    </>
  );
}
