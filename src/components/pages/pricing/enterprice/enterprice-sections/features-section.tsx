import EnterpriceFeatuesTable from "../enterprice-features-table";

const FeaturesSection = () => {
  return (
    <section
      id="enterprice-features-section"
      className="w-full h-auto py-[80px]"
    >
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
          <EnterpriceFeatuesTable />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
