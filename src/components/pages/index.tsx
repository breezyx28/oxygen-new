"use client";

import Hero from "../sections/Hero/Hero";
import FeaturesGrid from "../sections/Features/FeaturesGrid";
import OurMission from "../sections/our-mission";
import OurApps from "../sections/our-apps";
// import HowItWorks from "../sections/how-it-works";
import DemoSection from "../sections/demo-section";
import InfoCardsSection from "../sections/info-card-section";
import PartnersSlider from "../sections/partners-slider";
import BookingForm from "../sections/booking-form";
import { useLastMainQuery } from "@/redux/endpoints/main";

export default function HomePage() {
  const { data } = useLastMainQuery({});

  console.log("data: ", data);

  return (
    <>
      <Hero data={data} />
      <OurMission data={data} />
      {data?.section_2_active ? <OurApps data={data} /> : null}
      {/* <HowItWorks /> */}
      <FeaturesGrid data={data} />
      <DemoSection data={data} />
      <InfoCardsSection data={data} />
      <PartnersSlider data={data} />
      <BookingForm />
    </>
  );
}
