import { motion } from "framer-motion";

interface IconsComponentProps {
  isInView: boolean;
  images: string[];
}

const IconsComponent: React.FC<IconsComponentProps> = ({
  isInView,
  images,
}) => {
  // Calculate random elliptical orbital positions
  const calculateOrbitalPosition = (index: number) => {
    // Create random but stable orbital paths
    const randomOffset = (index * 137.5) % 360; // Golden angle to distribute evenly
    const angle = (randomOffset * Math.PI) / 180;

    // Create elliptical paths by using different x and y radii
    const seed = index * 1000;
    const random = (min: number, max: number, seedOffset = 0) => {
      const x = Math.sin(seed + seedOffset) * 10000;
      const r = x - Math.floor(x);
      return min + r * (max - min);
    };

    // Generate different radii for x and y to create elliptical paths
    const radiusX = random(25, 40, index);
    const radiusY = random(30, 45, index + 5);

    // Add a left offset to shift all icons
    const leftOffset = -10; // Negative value moves icons left

    return {
      x: Math.sin(angle) * radiusX + leftOffset, // Add offset here
      y: Math.cos(angle) * radiusY,
      radiusX,
      radiusY,
      angle,
    };
  };

  // Generate unique floating parameters for each icon
  const getFloatingParameters = (index: number) => {
    // Create unique but deterministic random values for each icon
    const seed = index * 1000;
    const random = (min: number, max: number, seedOffset = 0) => {
      // Simple pseudo-random function with seed
      const x = Math.sin(seed + index + seedOffset) * 10000;
      const r = x - Math.floor(x);
      return min + r * (max - min);
    };

    return {
      // Randomize the amplitude of movement
      xAmplitude: random(2, 5),
      yAmplitude: random(1, 4, 10),
      // Randomize the rotation range
      rotateRange: [-random(5, 15), random(5, 15, 20)],
      // Randomize the duration of the animation
      duration: random(8, 15),
      // Randomize the delay to start the animation
      delay: random(0, 2),
      // Randomize the phase offset for elliptical motion
      phaseOffset: random(0, Math.PI * 2),
    };
  };

  const containerVariants = {
    hidden: {
      scale: 0.08,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        scale: {
          duration: 1.8,
          ease: [0.23, 1.12, 0.38, 1], // Smoother spring easing
        },
        opacity: {
          duration: 1.2,
          ease: "easeOut",
        },
        delayChildren: 0.4,
        staggerChildren: 0.08,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (index: number) => {
      const pos = calculateOrbitalPosition(index);
      return {
        opacity: 1,
        scale: 1,
        x: `${pos.x}vw`,
        y: `${pos.y}vh`,
        transition: {
          duration: 0.8,
          ease: [0.23, 1.12, 0.38, 1], // Match container easing
        },
      };
    },
    float: (index: number) => {
      const basePos = calculateOrbitalPosition(index);
      const params = getFloatingParameters(index);

      // Create elliptical path points
      const steps = 8; // Increased steps for smoother motion
      const xPath = [];
      const yPath = [];

      for (let i = 0; i < steps; i++) {
        const t = (i / (steps - 1)) * Math.PI * 2 + params.phaseOffset;
        xPath.push(`${basePos.x + Math.sin(t) * params.xAmplitude}vw`);
        yPath.push(`${basePos.y + Math.cos(t) * params.yAmplitude}vh`);
      }

      return {
        x: xPath,
        y: yPath,
        rotate: [0, params.rotateRange[0], 0, params.rotateRange[1], 0],
        transition: {
          duration: params.duration * 1.5, // Slower, smoother floating
          delay: params.delay,
          repeat: Infinity,
          repeatType: "loop" as "loop",
          ease: "linear",
        },
      };
    },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transformOrigin: "center center" }}
    >
      {images.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          width={160}
          height={160}
          alt=""
          className="rounded-sm object-cover absolute"
          variants={iconVariants}
          custom={index}
          initial="hidden"
          animate={isInView ? ["visible", "float"] : "hidden"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </motion.div>
  );
};

export default IconsComponent;
