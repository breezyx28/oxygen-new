import EnterpriceCapabilityCard from "../enterprice-capability-card";

const CapabilitiesSection = () => {
  const baseSrcURL = (img: string) =>
    "/assets/images/backgrounds/enterprice/" + img;
  return (
    <section id="enterprice-capabilites-section" className="bg-[#e6eafe]">
      <div className="container-container container-narrow h-auto w-full">
        <h2 className="text-center md:text-[64px] text-[34px] md:font-bold font-semibold">
          Major capabilities
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-[60px] mt-[30px]">
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-capability-breadcrumbs.png")}
            title="Breadcrumbs"
            text="Track website page visits and activities, aggregating Breadcrumbs to feed customer journeys and take action to create amazing experiences."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-customer-journey.png")}
            title="Journey Orchestration"
            text="Manage and optimize customer interactions across multiple touchpoints to ensure seamless and personalized experiences."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-rest-api.png")}
            title="100% REST APIs"
            text="Every function of Nextiva can be driven via REST APIs. Easily get data in & out, seamlessly connect to a wide range of external platforms, and programmatically make Nextiva do what you need."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-hybrid-cloud.png")}
            title="100% Hybrid Cloud"
            text="Nextiva supports a full range of deployments. Cloud: ultimate scalability, cost savings and speed of innovation. Hybrid: Keep sensitive data on-premise while leveraging cloud scalability. On Premise: suiting industries that need to comply with strict data regulations."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-microservices.png")}
            title="Microservices"
            text="Nextiva includes 30+ self-redundant systems that all talk to each other to make Nextiva’s network self-healing, so there’s no need for planned downtime."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-intelligent-routing.png")}
            title="Intelligent Routing"
            text="Customizable to a wide variety of use cases: AI & Workflow-Based Routing, Attribute & Skills-Based Routing, and Flexible & Advanced ACD Routing."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-secure-payment.png")}
            title="Secure Payment Agent Assist"
            text="A secure, PCI-compliant, customer-facing and agent assisted IVR payment module where the agent never sees or hears the credit card number."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-nextiva-wem.png")}
            title="Nextiva WEM"
            text="Workforce Engagement Management includes Call & Digital Workitem recording and analysis, Intelligent Collaboration, Quality Monitoring, Performance Management, Agent Coaching and Workforce Scheduling."
          />
          <EnterpriceCapabilityCard
            src={baseSrcURL("enterprice-nextiva-ai.png")}
            title="Nextiva AI"
            text="Create amazing experiences at every touchpoint, with Speech-to-Text Transcription, Sentiment Analysis, AI Classification, Language Detection & Translation, Data Loss Prevention, Text-to-Speech, and Natural Language Understanding."
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
