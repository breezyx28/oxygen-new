import { useInView } from "framer-motion";
import { useRef } from "react";
import TextComponent from "./TextComponent";
import IconsComponent from "./IconsComponent";

const OurApps = ({ data }: { data: any }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // const images = [
  //   "/assets/images/achievements/Central.jpg",
  //   "/assets/images/achievements/ForHer.png",
  //   "/assets/images/achievements/Laki.png",
  //   "/assets/images/achievements/MSound.png",
  //   "/assets/images/achievements/Anti.png",
  //   "/assets/images/achievements/Smart_Center.png",
  //   "/assets/images/achievements/Kpsolla_Profile.jpg",
  // ];

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen overflow-hidden relative mb-[120px]"
    >
      <TextComponent isInView={isInView} data={data} />
      <IconsComponent
        isInView={isInView}
        images={data?.section_2_icons ?? []}
        // images={data?.section_2_icons ?? images}
      />
    </section>
  );
};

export default OurApps;
