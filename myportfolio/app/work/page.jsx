"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/workSliderBtns";
const projects = [
  {
    num: "01",
    category: "MERN Stack",
    title: "Gift Ordering System",
    description:
      "A web application that allows users to order gifts for their loved ones.",
    Status: "completed",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "CSS 5" },
      { name: "HTML 5" },
    ],
    image: "/assets/projects/1.2.JPG",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Mobile app development",
    title: "MediScan",
    description:
      "A mobile application that allows users to generate their medical reports by scanning MRI, CT Scan, etc.",
    Status: "On going",
    stack: [
      { name: "Flutter" },
      { name: "Fast API" },
      { name: " PostgresSQL" },
    ],
    image: "/assets/projects/2.1.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Mobile app development",
    title: "Mango Map",
    description:
      "A mobile application that helps travllers to find the best places & review based the location.",
    Status: "On going",
    stack: [
      { name: "Flutter" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MySQL" },
    ],
    image: "/assets/projects/3.1.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handlesliderChange = (swiper) => {
    const currentProject = projects[swiper.activeIndex];
    setProject(currentProject);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold  ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <h2 className="text-[42px] text-accent">{project.Status}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {index !== project.stack.length - 1 && " ,"}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                <Link href={project.live}>
                  <TooltipProvider skipDelayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Live Project</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider skipDelayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Github repository</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={(swiper) => handlesliderChange(swiper)}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          className="object-cover"
                          alt="project image"
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:big-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
