import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "8%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "8%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          className="h-full w-full bg-white relative "
          animate="animate"
          initial="initial"
          exit="exit"
          variants={stairAnimation}
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default stairs;
