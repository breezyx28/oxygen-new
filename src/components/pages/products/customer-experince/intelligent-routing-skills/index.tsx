import Button from "@/components/buttons/button";
import PageBadge from "@/components/cards/page-badge";
import ComputerScreenIcon from "@/components/icons/computer-screen-icon";
import SectionLayout from "@/components/Layout/section-layout";
import {
  IntelligentRountingSkillsCard1,
  IntelligentRountingSkillsToggler,
} from "./intelligent-rounting-skills-components";
import { Global } from "iconsax-react";
import CTASection1 from "@/components/cards/cta-card";
import OutlineButton from "@/components/buttons/outline-button";

const IntelligentRoutingSkills = () => {
  return (
    <>
      <section className="h-auto w-full">
        <div className="container-container container-narrow flex md:flex-row flex-col gap-[60px]">
          <div className="md:w-1/2 w-full flex flex-col justify-start gap-y-[8px]">
            <PageBadge
              icon={<ComputerScreenIcon className="md:w-[20px] w-[16px]" />}
              text="Intelligent Routing"
            />
            <h3 className="md:text-[56px] text-[39px] font-bold md:leading-[1.2] leading-[1.1]">
              Nextiva universe of intelligent routing (Skills, AI,
              situation-based)
            </h3>
            <div className="max-w-[720px]">
              <p className="text-black/70 md:text-[20px] text-[14px]">
                Route incoming customer requests and inbound calls effectively
                and efficiently. Tips to use intelligent case routing.
              </p>
            </div>
            <Button
              text="Watch 1 Minute Video"
              className="mt-[clamp(2rem,2.13vw,3rem)] md:mb-[60px] mb-[0px]"
            />
          </div>

          <div className="hero relative md:w-1/2 w-full h-full rounded-[32px] flex flex-col items-center justify-center">
            <img
              src="/assets/icons/partners/IKEA.webp"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <SectionLayout img="/assets/images/backgrounds/products/intelligent-routing-skills-hero-bg.webp">
        <div className="relative container-container container-narrow">
          <div className="flex flex-col gap-10">
            <h2 className="md:text-5xl text-3xl text-center text-white font-bold">
              Distribute requests to a global workforce.
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <IntelligentRountingSkillsCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Global Agent Distribution"
                text="Attribute-based routing supports follow-the-sun models for multi-site operations, ensuring the best available agents are always on call."
              />
              <IntelligentRountingSkillsCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Flexible Work Allocation"
                text="Blended ACD algorithms provide flexibility to rotate work items, modeling sustainable workflows to reduce agent burnout and customer friction."
              />
              <IntelligentRountingSkillsCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Automated Backup Support"
                text="Situation-based routing allows automation to support live agents during off-peak times or when fewer agents are available."
              />
              <IntelligentRountingSkillsCard1
                icon={
                  <Global size={32} variant="Bold" className="text-white" />
                }
                title="Enhanced First Contact"
                text="AI-based routing predicts customer intent and needs, improving first contact resolution rates and overall service level agreement performance."
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      <section className="bg-[#f9fafe]">
        <div className="container-container container-narrow">
          <div className="flex flex-col items-center gap-y-12">
            <h2 className="text-center md:text-7xl text-3xl font-bold">
              Intelligent routing for a better CX.
            </h2>
            <IntelligentRountingSkillsToggler />
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
};

export default IntelligentRoutingSkills;
