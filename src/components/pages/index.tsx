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

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurMission />
      <OurApps />
      {/* <HowItWorks /> */}
      <FeaturesGrid />
      <DemoSection />
      <InfoCardsSection />
      <PartnersSlider />
      <BookingForm />
    </>
  );
}
