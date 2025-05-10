import PageBadge from "@/components/cards/page-badge";
import MultiToggleSwitch from "@/components/switch/multi-toggle-switch";
import { DollarCircle, I3Dcube, Star1, VolumeHigh } from "iconsax-react";
import {
  AutomationAndProductivityCard1,
  AutomationAndProductivityCard2,
} from "./automation-and-productivity-component";

export default function AIAutomation() {
  return (
    <>
      <section className="bg-primary-50">
        <div className="container-container container-narrow">
          <div className="flex flex-col justify-center items-center space-y-8">
            <PageBadge
              text="AI Bot and Automation"
              icon={<Star1 variant="Bold" className="text-primary-600" />}
            />

            <h2 className="text-center md:text-7xl text-3xl font-bold">
              AI Bot and Automation Capabilities
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="container-container pt-[50px] md:pb-[120px] pb-[60px]">
          <MultiToggleSwitch
            options={["Show All", "Sales", "Service", "Marketing"]}
            initialValue="Show All"
            onChange={(val) => console.log("Selected:", val)}
          />

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[20px] gap-[40px] mt-[50px]">
            <AutomationAndProductivityCard1 />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Sales"
                  icon={<DollarCircle variant="Bold" className="text-base" />}
                  className="w-[fit-content] bg-green-50 text-green-300"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Sales & Service Automation"
              text="Recognize customer intent and automatically route to sales or service teams. Leverage chatbot to initiate sales conversation and generate leads during off hours."
            />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Service"
                  icon={
                    <I3Dcube
                      variant="Bold"
                      className="text-base text-primary-600"
                    />
                  }
                  className="w-[fit-content] bg-primary-50"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Service Requests"
              text="Use a chat bot to answer customer questions and automate customer service requests at any time."
            />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Sales"
                  icon={
                    <VolumeHigh
                      variant="Bold"
                      className="text-base text-yellow-400"
                    />
                  }
                  className="w-[fit-content] bg-yellow-50 text-yellow-300"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Sales & Service Automation"
              text="Recognize customer intent and automatically route to sales or service teams. Leverage chatbot to initiate sales conversation and generate leads during off hours."
            />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Sales"
                  icon={<DollarCircle variant="Bold" className="text-base" />}
                  className="w-[fit-content] bg-green-50 text-green-300"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Sales & Service Automation"
              text="Recognize customer intent and automatically route to sales or service teams. Leverage chatbot to initiate sales conversation and generate leads during off hours."
            />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Service"
                  icon={
                    <I3Dcube
                      variant="Bold"
                      className="text-base text-primary-600"
                    />
                  }
                  className="w-[fit-content] bg-primary-50"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Service Requests"
              text="Use a chat bot to answer customer questions and automate customer service requests at any time."
            />
            <AutomationAndProductivityCard2
              badge={
                <PageBadge
                  text="Sales"
                  icon={
                    <VolumeHigh
                      variant="Bold"
                      className="text-base text-yellow-400"
                    />
                  }
                  className="w-[fit-content] bg-yellow-50 text-yellow-300"
                />
              }
              img="/assets/images/backgrounds/products/ai-automation-cover-1.webp"
              title="Sales & Service Automation"
              text="Recognize customer intent and automatically route to sales or service teams. Leverage chatbot to initiate sales conversation and generate leads during off hours."
            />
          </div>
        </div>
      </section>
    </>
  );
}
