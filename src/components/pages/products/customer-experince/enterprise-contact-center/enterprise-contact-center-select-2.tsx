import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, PresentionChart } from "iconsax-react";

const menuItems = [
  {
    id: "track-sentiment",
    label: "Track sentiment",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Identify key issues, discover trending topics and automatically route cases to the right employees to drive positive customer sentiment.",
  },
  {
    id: "performance-coaching",
    label: "Performance coaching",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Enhance your team’s skills and capabilities through personalized performance coaching insights.",
  },
  {
    id: "upsell-cross-sell",
    label: "Discover upsell/cross-sell opportunities",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Identify new ways to offer more value to your customers through tailored recommendations.",
  },
  {
    id: "agent-performance",
    label: "Agent performance management",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Monitor, measure, and improve agent performance with detailed analytics.",
  },
  {
    id: "pitch-more",
    label: "Pitch more effectively",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Keep a pulse on your customers interests and identify consumer trends that your team can use in marketing and sales to improve conversion rates.",
  },
  {
    id: "improve-csat",
    label: "Improve CSAT",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Drive customer satisfaction through proactive support and consistent feedback loops.",
  },
  {
    id: "increase-spend",
    label: "Increase customer spend",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Leverage data-driven insights to encourage higher customer engagement and spending.",
  },
  {
    id: "decrease-churn",
    label: "Decrease churn",
    icon: <PresentionChart variant="Bold" className="text-black/60" />,
    description:
      "Retain customers by identifying churn signals early and addressing their needs.",
  },
];

const EnterpriseContactCenterSelect2 = () => {
  const [selectedId, setSelectedId] = useState("pitch-more");
  const selectedItem = menuItems.find((item) => item.id === selectedId);

  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-20">
      <aside className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={cn(
              "w-full flex items-center gap-2 px-4 py-3 rounded-lg text-left transition-all",
              selectedId === item.id
                ? "bg-indigo-50"
                : "hover:bg-gray-100 text-black/60"
            )}
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-base">{item.label}</span>
          </button>
        ))}
      </aside>

      <main className="">
        <div className="">
          <div className="w-full bg-primary-50 rounded-[24px] p-[32px] border">
            <h2 className="text-3xl font-bold mb-3">{selectedItem?.label}</h2>
            <p className="text-gray-600 mb-6">{selectedItem?.description}</p>
            <div className="mt-4 flex items-center gap-4">
              Learn more
              <ArrowRight />
            </div>
          </div>
          {selectedId === "pitch-more" && (
            <img
              src="/assets/images/backgrounds/products/enterprise-contact-center-bg-3.webp"
              className="w-full h-auto"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default EnterpriseContactCenterSelect2;
