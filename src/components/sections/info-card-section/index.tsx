import InfoCard from "./info-card";

const InfoCardsSection = () => {
  return (
    <section id="info-card-section" className="w-full min-h-[100dvh]">
      <div className="container-container flex flex-col gap-y-[60px] w-full h-full py-[96px]">
        <h3 className="info-card-title text-left text-black md:text-[44px] text-[32px] font-semibold md:leading-[54px] leading-[38px]">
          The stakes for a superior customer experience have never been higher.
        </h3>
        <div className="info-card-bento-grid grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
          {/* First row */}
          <InfoCard
            text="Companies with the highest customer satisfaction scores return double the shareholder value and 3x higher growth than their peers."
            label="(PWC: Experience is everything. Get it right.)"
            className="info-card-1 md:col-span-1 col-span-2"
          />
          <InfoCard
            text=""
            label=""
            className="info-card-1 col-span-1 md:col-span-2"
            src="/assets/images/backgrounds/background-2.png"
          />

          {/* Second row */}
          <InfoCard
            text="Increasing customer retention rates by 5% can increase profits by as much as 95%, but 1 in 3 consumers say they would stop doing business with a brand they loved after one bad experience."
            label="(Deloitte)"
            className="info-card-3 md:col-span-1 col-span-2"
          />
          <InfoCard
            text="Companies that lead with employee experience develop more successful innovations, see twice the revenue growth and have Net Promoter Scores (NPS) that are 2x as high as their peers"
            label="(PWC: Experience is everything. Get it right.)"
            className="info-card-4 md:col-span-1 col-span-2"
          />
          <InfoCard
            text="The payouts for valued, great experiences are tangible: up to a 16% price premium on products and services, plus increased loyalty."
            label="(Invesp)"
            className="info-card-5 md:col-span-1 col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
