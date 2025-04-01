import LinkTabs from "@/components/tabs/link-tabs";

const HeadSection = () => {
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
    <section
      id="pricing-page"
      className="relative w-full h-auto bg-[#ffffff] container-narrow"
    >
      <div className="container-container">
        <div className="flex flex-col">
          <div className="pricing-hero w-full flex flex-col items-center gap-y-[1.25rem]">
            <h1 className="heading-72 text-center font-[600]">
              Supercharge your CX with a <br /> plan that fits your business
            </h1>
            <p className="subtitle-primary-color text-center md:text-[20px] text-[12px] font-[400]">
              Deliver amazing experiences with the #1 platform for experience{" "}
              <br />
              management across all customer interaction channels.
            </p>
            <div className="w-full flex items-center justify-center mb-[20px]">
              <LinkTabs tabs={tabs} defaultActiveTab={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
