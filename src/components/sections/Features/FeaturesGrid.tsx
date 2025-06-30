import "../../../styles/features.css";
import OxygenBadge from "../../buttons/oxygen-badge";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = ({ data }: { data: any }) => {
  const features = [
    {
      title: data?.section_3_card_1_title ?? "Unified Platform",
      icon: data?.section_3_card_1_icon ?? "/assets/icons/computer-desktop.png",
      pattern: "/assets/images/patterns/cubes-pattern.png",
      className: "bg-gradient-to-tl from-[#6a83fb] via-[#6a83fb] to-[#6a83fb]",
      href: data?.section_3_card_1_cta ?? "#",
      list: data?.section_3_card_1_features ?? [
        "Seamless interactions and conversations across all traditional, digital and social channels",
        "Personalized customer journey and cross-channel dialogue enhances the customer experience",
        "Unified internal interfaces across customer-facing functions",
      ],
    },
    {
      title: data?.section_3_card_2_title ?? "AI & Automation",
      icon: data?.section_3_card_2_icon ?? "/assets/icons/sparkles.png",
      pattern: "/assets/images/patterns/cubes-pattern.png",
      className: "featuer-gradient-2",
      href: data?.section_3_card_2_cta ?? "#",
      list: data?.section_3_card_2_features ?? [
        "Customer interaction data connected across channels for 360 degree view in real time",
        "Intelligent automation that’s easy to deploy, control, and optimize",
        "Optimize customer journeys with AI to deliver immediate value",
      ],
    },
    {
      title: data?.section_3_card_3_title ?? "Future-Ready",
      icon:
        data?.section_3_card_3_icon ?? "/assets/icons/arrows-right-left.png",
      pattern: "/assets/images/patterns/triangles-pattern.png",
      className:
        "bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-600",
      href: data?.section_3_card_3_cta ?? "#",
      list: data?.section_3_card_3_features ?? [
        "Open platform built on REST APIs enables continuous innovation, infinite scalability",
        "Global services architecture is secure, compliant and eliminates planned downtime",
        "Cloud native, deployable in hybrid and private environments for deep regulatory requirements",
      ],
    },
  ];

  return data?.section_3_active ? (
    <section className="w-screen min-h-[100dvh] container-container py-[96px]">
      <div className="w-full h-full flex flex-col items-center justify-center text-center gap-y-16">
        <div className="flex flex-col items-center gap-y-8 text-center">
          <OxygenBadge text="Why Oxygen" />
          <h3 className="text-black md:max-w-[calc(100%-6rem)] max-w-full w-full md:text-6xl text-[32px] md:leading-[65px] leading-[38px] font-[600]">
            {data?.section_3_title ?? "Loading..."}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              pattern={feature.pattern}
              className={feature.className}
              icon={feature.icon}
              list={feature.list}
            />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default FeaturesGrid;
