"use client";

import { useEffect, useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";
import Image from "next/image";
import LeetcodeIcon from "@/assets/codingImages/leetcode.png";
import CodeforcesIcon from "@/assets/codingImages/codeforces.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftSlideControls = useAnimation();
  const rightSlideControls = useAnimation();
  const mainControls = useAnimation();

  useEffect(() => {
    leftSlideControls.start("visible");
    rightSlideControls.start("visible");
    mainControls.start("visible");
  }, [isInView]);

  const ACHIEVEMENTS = [
    "Solved 400+ problems across all coding platforms",
    "Achieved highest rating of 1540 at Leetcode and 1109 at Codeforces",
    "Secured rank of 8990 out of 34k+ in Leetcode weekly contest 407",
    "Secured rank of 3795 out of 28k+ in Codeforces round 992 (Div 2)"
  ];

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          className="md:w-[60%] flex flex-col justify-center px-8"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={leftSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Ayush Aggarwal from Haryana, India. I have done
            my graduation from JMIT, Radaur.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center gap-4 mt-5">
          <motion.a
            href="https://leetcode.com/u/ayush455/"
            target="_blank"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 1 }}
          >
            <Image src={LeetcodeIcon} className="w-8" alt="Leetcode Icon" />
          </motion.a>
          <motion.a
            href="https://codeforces.com/profile/AyushAggarwal600"
            target="_blank"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 1 }}
          >
            <Image src={CodeforcesIcon} className="w-8" alt="Codeforces Icon" />
          </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-[40%]"
          variants={{
            hidden: { opacity: 0, x: "80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={rightSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <AboutAvatarSVG className="w-[100%]" />
        </motion.div>
      </div>
      <motion.div
        className="my-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SkillSection />
      </motion.div>
    </div>
  );
};

export default About;
