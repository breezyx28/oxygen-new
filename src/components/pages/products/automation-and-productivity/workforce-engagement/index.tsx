
import OxygenBadge from "@/components/buttons/oxygen-badge";
import TrustedBy from "@/components/sliders/trusted-by";
import {
  ArrowCircleDown2,
  ArrowCircleUp2,
  Bubble,
  ChartSuccess,
  Cup,
  DocumentText,
  Google,
  MonitorRecorder,
  PresentionChart,
  Profile2User,
  UserEdit,
  VoiceCricle,
} from "iconsax-react";
import {
  WorkforceEnegagementCard1,
  WorkforceEnegagementCard3,
  WorkforceEnegagementCard4,
} from "./workforce-engagement-component";
import SectionLayout from "@/components/Layout/section-layout";
import Hero1 from "@/components/sections/Hero/hero-1";
import Banner1 from "@/components/banners/banner-1";

export default function WorkfroceEnegement() {
  return (
    <>
      <section>
        <div className="md:pt-[120px] pt-[80px]">
          <Hero1
            badgeText="Unified Agent Experience"
            badgeIcon={
              <Profile2User variant="Bold" className="text-primary-600" />
            }
            pageTitle="Centralize all customer interactions"
            pageSubTitle="Unify your teams, streamline customer conversations, and foster
              engagement with unified customer inbox."
            buttonText="Unified my CX now"
          />

          <div className="w-full flex items-center justify-between gap-[30px] overflow-hidden mt-[150px]">
            <figure className="basis-1/2">
              <img
                src="/assets/images/backgrounds/products/workforce-enegement-hero-1.webp"
                className="w-full"
              />
            </figure>

            <figure className="basis-1/2">
              <img
                src="/assets/images/backgrounds/products/workforce-enegement-hero-2.webp"
                className="w-full"
              />
            </figure>
          </div>

          <div className="container-container pt-20">
            <TrustedBy />
          </div>
        </div>
      </section>

      <section>
        <div className="screen-container">
          <div className="flex flex-col gap-10 items-center">
            <OxygenBadge />

            <h2 className="text-[58px] text-center font-bold leading-[1.1]">
              <p className="text-black">Modernize your team with Nextiva’s</p>
              <p className="text-black/40 leading-[1.2]">
                <span className="mx-[8px] [&:first-letter]:text-primary-600 inline-block">
                  Workforce
                </span>
                <span className="mx-[8px] [&:first-letter]:text-primary-600 inline-block">
                  Engagement
                </span>
                <span className="mx-[8px] [&:first-letter]:text-primary-600 inline-block">
                  Management
                </span>
              </p>
            </h2>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] mt-[20px]">
              <WorkforceEnegagementCard1
                title="One platform"
                text="Get rid of fragmented apps in your business — Give your contact center an overhaul so you can focus on business, not tools."
              />
              <WorkforceEnegagementCard1
                icon={<Cup variant="Bold" className="text-white" />}
                title="Modern & future-proof"
                text="Motivate teams with empowerment features. Replace outdated and siloed apps with a modern contact center with continuous innovation."
              />
              <WorkforceEnegagementCard1
                icon={<Bubble variant="Bold" className="text-white" />}
                title="Advanced capabilities"
                text="Enjoy features such as virtual agents, AI-driven productivity tools, rich automation, and an integration-friendly platform."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/workforce-enegement-bg-1.webp">
        <div className="relative container-container container-narrow">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-7xl text-white font-bold">How it works</h2>
            <div className="w-full flex justify-between items-center">
              <img
                src="/assets/images/posters/workforce-engagement/left-cover.png"
                className="w-[400px]"
              />
              <h2 className="text-white text-6xl font-bold text-center leading-[1.2]">
                Oxygen WEM
              </h2>
              <img
                src="/assets/images/posters/workforce-engagement/right-cover.png"
                className="w-[400px]"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f5f7ff]">
        <div className="screen-container">
          <div className="flex flex-col items-center">
            <h2 className="text-7xl text-center font-bold">
              One platform for customer & employee satisfaction
            </h2>

            <div className="flex flex-col gap-y-[200px] mt-20">
              <WorkforceEnegagementCard3
                icon={
                  <ArrowCircleUp2
                    variant="Bold"
                    size={60}
                    className="text-green-300"
                  />
                }
                title="Increase customer loyalty"
                content={[
                  {
                    icon: (
                      <PresentionChart
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Extend lifetime value",
                    text: "Personalized engagements with customers create loyal buyers.",
                  },
                  {
                    icon: (
                      <ArrowCircleDown2
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Reduce churn",
                    text: "AI analyzes text and audio to determine customer intent and overall sentiment.",
                  },
                  {
                    icon: (
                      <PresentionChart
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Extend lifetime value",
                    text: "Personalized engagements with customers create loyal buyers.",
                  },
                  {
                    icon: (
                      <ArrowCircleDown2
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Reduce churn",
                    text: "AI analyzes text and audio to determine customer intent and overall sentiment.",
                  },
                ]}
              />

              <WorkforceEnegagementCard3
                icon={
                  <ArrowCircleDown2
                    variant="Bold"
                    size={60}
                    className="text-indigo-400"
                  />
                }
                title="Increase customer loyalty"
                content={[
                  {
                    icon: (
                      <PresentionChart
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Extend lifetime value",
                    text: "Personalized engagements with customers create loyal buyers.",
                  },
                  {
                    icon: (
                      <ArrowCircleDown2
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Reduce churn",
                    text: "AI analyzes text and audio to determine customer intent and overall sentiment.",
                  },
                  {
                    icon: (
                      <PresentionChart
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Extend lifetime value",
                    text: "Personalized engagements with customers create loyal buyers.",
                  },
                  {
                    icon: (
                      <ArrowCircleDown2
                        size={32}
                        variant="Bold"
                        className="text-black/80"
                      />
                    ),
                    title: "Reduce churn",
                    text: "AI analyzes text and audio to determine customer intent and overall sentiment.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="screen-container">
        <div className="flex flex-col gap-y-[105px] items-center">
          <Banner1
            text="Enterprise grade & scale, available for all"
            coverSrc="/assets/images/backgrounds/banners/banner-1.webp"
          />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <WorkforceEnegagementCard4
              icon={<VoiceCricle variant="Bold" className="text-white" />}
              title="Voice recording and transcription"
              text="Recorded calls are transcribed in real-time for agents and supervisors."
            />
            <WorkforceEnegagementCard4
              icon={<MonitorRecorder variant="Bold" className="text-white" />}
              title="Screen recordings"
              text="Agent desktops are captured along with voice recordings, for a full view of the call."
            />
            <WorkforceEnegagementCard4
              icon={<UserEdit variant="Bold" className="text-white" />}
              title="Agent recordings"
              text="Agents can review their own recorded calls to gain performance insight."
            />
            <WorkforceEnegagementCard4
              icon={<DocumentText variant="Bold" className="text-white" />}
              title="Compliance recordings"
              text="Designed to aid in TCPA/FCC compliance efforts, sensitive information is automatically redacted from call transcriptions."
            />
            <WorkforceEnegagementCard4
              icon={<ChartSuccess variant="Bold" className="text-white" />}
              title="Analytics for better decisions"
              text="The most popular contact center reports are paired with custom dashboards to track key performance stats, queue traffic, and campaign success."
            />
            <WorkforceEnegagementCard4
              icon={<Google variant="Bold" className="text-white" />}
              title="Reporting fueled by Google"
              text="Harness the power of Google Data Studio BI along with Nextiva for better reports, transparency, and collaboration."
            />
          </div>
        </div>
      </section>
    </>
  );
}
