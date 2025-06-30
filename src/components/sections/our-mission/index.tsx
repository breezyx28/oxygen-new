import "../../../styles/our-mission.css";
import OxygenBadge from "../../buttons/oxygen-badge";
import OurMissionCard from "../../cards/our-mission-card";

const OurMission = ({ data }: { data: any }) => {
  return data?.section_1_active ? (
    <section id="our-mission-section" className="w-full container-container">
      <div className="wrapper our-mission pb!-[0px]">
        <div className="our-mission-header">
          <OxygenBadge />
          <div className="flex flex-col">
            <h2 className="mission-title-text">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="mission-subtitle-text">
              delivers personalized experiences throughout the entire customer
              journey.
            </p>
          </div>
        </div>
        <div className="mission-card-wrapper">
          <OurMissionCard
            data={{
              cta: data?.section_1_card_1_cta,
              subtitle: data?.section_1_card_1_subtitle,
              title: data?.section_1_card_1_title,
            }}
            color="white"
          />
          <OurMissionCard
            data={{
              cta: data?.section_1_card_2_cta,
              subtitle: data?.section_1_card_2_subtitle,
              title: data?.section_1_card_2_title,
            }}
            color="purple"
          />
          <OurMissionCard
            data={{
              cta: data?.section_1_card_3_cta,
              subtitle: data?.section_1_card_3_subtitle,
              title: data?.section_1_card_3_title,
            }}
            color="blue"
          />
          <OurMissionCard
            data={{
              cta: data?.section_1_card_4_cta,
              subtitle: data?.section_1_card_4_subtitle,
              title: data?.section_1_card_4_title,
            }}
            color="blue"
          />
          <OurMissionCard
            data={{
              cta: data?.section_1_card_5_cta,
              subtitle: data?.section_1_card_5_subtitle,
              title: data?.section_1_card_5_title,
            }}
            color="white"
          />
          <OurMissionCard
            data={{
              cta: data?.section_1_card_6_cta,
              subtitle: data?.section_1_card_6_subtitle,
              title: data?.section_1_card_6_title,
            }}
            color="purple"
          />
        </div>
      </div>
    </section>
  ) : null;
};

export default OurMission;
