import "../../../styles/our-mission.css";
import OxygenBadge from "../../buttons/oxygen-badge";
import OurMissionCard from "../../cards/our-mission-card";

const OurMission = () => {
  return (
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
          <OurMissionCard color="white" />
          <OurMissionCard color="purple" />
          <OurMissionCard color="blue" />
          <OurMissionCard color="blue" />
          <OurMissionCard color="white" />
          <OurMissionCard color="purple" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
