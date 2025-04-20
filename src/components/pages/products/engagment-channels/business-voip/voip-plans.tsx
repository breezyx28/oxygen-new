import PlanCard from "@/components/pages/pricing/plan-card";
import "@/styles/voip-plans.css";

const descriptions = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Aliquid tempora beatae ipsa modi! Quae impedit odio soluta
distinctio veritatis maiores. Delectus quo nostrum
dignissimos iste quisquam accusamus expedita
reprehenderit. Praesentium.`;

const plans = {
  monthly: [
    {
      id: 2,
      name: "Core",
      price: "36",
      bgColor: "bg-primary-100",
      color: "black",
      description: descriptions,
      features: [
        "Inbound & Outbound Voice",
        "Business SMS",
        "Video meetings",
        "Screenshare & file share",
        "Call routing",
      ],
    },
    {
      id: 3,
      name: "Engage",
      price: "50",
      bgColor: "bg-gradient-to-br from-primary-600 to-primary-700",
      color: "white",
      description: descriptions,
      features: [
        "Customer-to-team SMS Messaging",
        "Toll-free number & minutes",
        "Advanced reporting",
        "MS Teams integration",
        "Web chat: Live & bot",
      ],
    },
    {
      id: 4,
      name: "Power Suit",
      price: "75",
      bgColor: "bg-gradient-to-br from-primary-700 to-primary-900",
      color: "white",
      description: descriptions,
      features: [
        "Inbound sales and service call center",
        "Priority and skills-based routing",
        "Unified team interface",
        "Supervisor dashboard*",
        "ACD callback*",
      ],
    },
  ],
};

export const VoipPlans = () => (
  <div className="voip-plan-wrapper">
    {plans.monthly?.map((item: any, index: number) => (
      <PlanCard data={item} key={index} />
    ))}
  </div>
);
