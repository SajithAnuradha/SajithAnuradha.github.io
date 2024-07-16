"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[298px] xl:h-[498px]
        mix-blend-lighten"
        >
          <Image
            src="/profile3.png"
            alt="profile"
            width={400}
            height={400}
            priority
            quality={100}
            className="object-contain rounded-full "
          />
        </motion.div>
        {/* <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent "
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle cx="253" cy="253" stroke="#00ff99" strokeWidth="4" />
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default Photo;
