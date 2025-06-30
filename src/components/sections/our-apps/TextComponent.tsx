import { motion } from "framer-motion";

interface TextComponentProps {
  isInView: boolean;
  data: any;
}

const TextComponent: React.FC<TextComponentProps> = ({ isInView, data }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center gap-y-4 z-10"
      variants={textVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <p className="text-black text-[24px] font-[600]">
        {data?.section_2_title ?? "Our Application"}
      </p>
      <h3 className="text-black text-[78px] font-[700] text-center">
        {/* <p className="leading-[98px]">1,150 apps</p>
        <p className="leading-[98px]">405,800 screens</p>
        <p className="leading-[98px]">81,700 flows</p> */}
        {data?.section_2_subtitle}
      </h3>
    </motion.div>
  );
};

export default TextComponent;
