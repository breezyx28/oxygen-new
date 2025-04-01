import ToggleSwitch from "@/components/switch/toggle-switch";
import PlanCard from "./plan-card";
import FAQs from "@/components/faqs";
import LinkTabs from "@/components/tabs/link-tabs";

export default function PricingPage() {
  const descriptions = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid tempora beatae ipsa modi! Quae impedit odio soluta
                      distinctio veritatis maiores. Delectus quo nostrum
                      dignissimos iste quisquam accusamus expedita
                      reprehenderit. Praesentium.`;
  const plans = {
    monthly: [
      {
        id: 1,
        name: "Digital",
        price: "25",
        bgColor: "bg-primary-50",
        color: "black",
        description: descriptions,
        features: [
          "Competitive monitoring",
          "Messaging apps",
          "Social media channels",
          "Review Management",
          "Digital Service Helpdesk",
        ],
      },
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

  const tabs = [
    {
      label: "Small Business",
      onClick: () => console.log("Small Business tab clicked"),
    },
    {
      label: "Enterprise",
      onClick: () => console.log("Enterprise tab clicked"),
    },
  ];

  return (
    <>
      <section
        id="pricing-page"
        className="relative w-full h-auto bg-[#f5f7ff] container-narrow"
      >
        <div className="container-container">
          <div className="flex flex-col">
            <div className="pricing-hero w-full flex flex-col items-center gap-y-[1.25rem]">
              <h1 className="heading-72 text-center font-[600]">
                Deliver Amazing <br /> Customer Experiences
              </h1>
              <p className="subtitle-primary-color text-center md:text-[20px] text-[12px] font-[400]">
                Deliver amazing experiences with the #1 platform for experience{" "}
                <br />
                management across all customer interaction channels.
              </p>
              <div className="w-full flex items-center justify-center mb-[20px]">
                <LinkTabs tabs={tabs} defaultActiveTab={0} />
              </div>

              <div className="price-plan-toggler">
                <ToggleSwitch
                  labels={{
                    leftText: "Monthly",
                    rightText: "Annually",
                  }}
                />
              </div>

              <div className="w-full relative overflow-hidden md:bg-white bg-transparent md:min-h-screen min-h-full grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-[16px] md:divide-x divide-x-0 md:border md:border-gray-400/20 border-none md:rounded-[24px]">
                {plans.monthly?.map((item: any, index: number) => (
                  <PlanCard data={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="compare-plans" className="w-full h-auto py-[80px]">
        <div className="container-container">
          <div className="wrapper flex flex-col">
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-[2rem] md:gap-[0px] mb-[clamp(1.875vw,3.125vw,3.125vw)]">
              <h2 className="md:text-[58px] text-[42px] text-black font-[600] md:leading-normal leading-[48px]">
                Compare plan features
              </h2>
              <a
                href="#"
                className="md:w-auto w-full text-[20px] py-[20px] px-[32px] border border-primary-600 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300 ease-in-out"
              >
                Download Feature Chart
              </a>
            </div>
            <FAQs />
          </div>
        </div>
      </section>
      <section className="container-container">
        <div className="wrapper flex flex-col">
          <p className="py-[1.25em] px-[2.375em] text-[clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.156), 1rem)] md:leading-normal leading-[16px]">
            * Additional set-up, implementation, and usage fees may apply to
            these features.
          </p>
          <p className="italic py-[1.25em] px-[2.375em] text-[clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.156), 1rem)] md:leading-normal leading-[16px]">
            * <strong>Website Disclaimer:</strong> Live Chat & Chatbot are paid
            features that require a qualifying plan or addon for use and are
            subject to Nextiva’s Terms and Conditions. By enabling these
            features, you understand and agree that if you do not have a
            qualifying plan, you will incur additional charges and/or fees.
          </p>
        </div>
      </section>

      <section
        id="pricing-chat"
        className="container-container md:min-h-[100dvh] min-h-auto h-full w-full flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-[448px] flex flex-col justify-center items-center">
          <img
            src="/assets/images/backgrounds/pricing-help-cta.webp"
            className="absolute w-full md:h-auto h-full top-0 left-0 z-10 md:object-cover object-contain"
          />
          <div className="relative h-full flex flex-col items-center text-center justify-center py-[72px] px-[105px] z-20">
            <h3 className="text-white text-[48px] font-[500]">
              Need help deciding which plan is right for you?
            </h3>
            <p className="text-white/70 text-[18px] font-[500] text-center mt-[clamp(16px,1.25vw,32px)]">
              Talk with an expert and find a solution.
            </p>
            <a
              href="#"
              role="button"
              className="mt-[32px] rounded-full border border-primary-600 bg-white text-[1.25rem] text-primary-600 font-[600] hover:text-white hover:bg-primary-600 hover:scale-105 py-[1.25rem] px-[2rem] transition-all duration-200 ease-in-out"
            >
              Chat with an expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
