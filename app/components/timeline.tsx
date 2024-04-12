"use client";

import { Oswald, Manrope } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

const TimelineComponent = () => {
  return (
    <>
      <div className="m-auto flex h-max flex-col justify-center text-white  lg:w-1/2 md:pt-36 lg:pt-28">
        <div
          className={`text-timelineheader text-center text-3xl  text-[#FFF6E8] md:text-5xl lg:h-12 font-ptMono`}
        >
          Timeline for Yantra
        </div>
        <div
          className={`mt-4 text-center text-2xl font-bold text-[#34bb62] md:text-3xl  font-ptMono`}
        >
          SAVE YOUR DATES!
        </div>
      </div>
      <div
        id="timeline"
        className={`mx-auto mt-20 grid w-full max-w-7xl grid-cols-9 px-2 pt-10 ${manrope.className}`}
      >
        <div className="col-span-4 h-full w-full ">
          <div className="w-0 sm:w-full"></div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="relative col-span-1 mt-3 flex h-full w-full justify-center"
        >
          <motion.div
            variants={cardVariants}
            className="flex h-full w-full justify-center bg-inherit"
          >
            <svg
              width="4"
              height="108"
              viewBox="0 0 4 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 106.005L2 2"
                stroke="url(#paint0_radial_244_2348)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2348"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
                > 
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
          >
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
                fill="url(#paint0_radial_244_2349)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2349"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-span-4 h-full w-full "
        >
          <motion.div
            variants={cardVariants}
            className="h-full w-full p-2 md:pl-16"
          >
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#34bb62]">
              HACK STARTS
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-left text-base text-[#E8E8EE] sm:mr-2">
                12th April 2024
              </p>
              <span className="hidden text-4xl text-[#E8E8EE] md:block">|</span>
              <p className="text-left text-base text-[#E8E8EE] sm:ml-2">
                9:00 pm onwards
              </p>
            </div>

            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              Kickstarting Yantra Hack with a bang, setting the stage for the biggest hack in VIT
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-span-4 h-full w-full "
        >
          <motion.div
            variants={cardVariants}
            className="h-full w-full p-2 md:pl-4 md:pr-16"
          >
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#34bb62]">
              Review 1, idea round
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-left text-base text-[#E8E8EE] sm:mr-2">
                13th April, 2024
              </p>
              <span className="hidden text-4xl text-[#E8E8EE] md:block">|</span>
              <p className="text-left text-base text-[#E8E8EE] sm:ml-2">
                2:00 am onwards
              </p>
            </div>
            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
                The first review round where you pitch your ideas to the judges
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="relative col-span-1 flex h-full w-full justify-center"
        >
          <motion.div
            variants={cardVariants}
            className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
          >
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
                fill="url(#paint0_radial_244_2349)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2349"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex h-full w-full justify-center bg-inherit"
          >
            <svg
              width="4"
              height="108"
              viewBox="0 0 4 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 106.005L2 2"
                stroke="url(#paint0_radial_244_2348)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2348"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        <div className="col-span-4 h-full w-full">
          <div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
        </div>
        <div className="col-span-4 h-full w-full ">
          <div className="w-0 sm:w-full"></div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="relative col-span-1 mt-3 flex h-full w-full justify-center"
        >
          <motion.div
            variants={cardVariants}
            className="flex h-full w-full justify-center bg-inherit"
          >
            <svg
              width="4"
              height="108"
              viewBox="0 0 4 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 106.005L2 2"
                stroke="url(#paint0_radial_244_2348)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2348"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
          >
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
                fill="url(#paint0_radial_244_2349)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2349"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-span-4 h-full w-full "
        >
          <motion.div
            variants={cardVariants}
            className="h-full w-full p-2 md:pl-16"
          >
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#34bb62]">
              Review 2
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-left text-base text-[#E8E8EE] sm:mr-2">
                14th April 2024
              </p>
              <span className="hidden text-4xl text-[#E8E8EE] md:block">|</span>
              <p className="text-left text-base text-[#E8E8EE] sm:ml-2">
                12:00 am 
              </p>
            </div>

            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              The tech review round where you present your barebones working model to the judges
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-span-4 h-full w-full "
        >
          <motion.div
            variants={cardVariants}
            className="h-full w-full p-2 md:pl-4 md:pr-16"
          >
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#34bb62]">
              Review 3
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-left text-base text-[#E8E8EE] sm:mr-2">
                14th April 2024
              </p>
              <span className="hidden text-4xl text-[#E8E8EE] md:block">|</span>
              <p className="text-left text-base text-[#E8E8EE] sm:ml-2">
                11:00 am
              </p>
            </div>
            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              Round 3, where you present your working product to the judges
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="relative col-span-1 flex h-full w-full justify-center"
        >
          <motion.div
            variants={cardVariants}
            className="invisible absolute mt-[68px] bg-inherit md:visible md:mr-20 md:w-24 lg:mr-36 lg:w-16"
          >
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
                fill="url(#paint0_radial_244_2349)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2349"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex h-full w-full justify-center bg-inherit"
          >
            <svg
              width="4"
              height="108"
              viewBox="0 0 4 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 106.005L2 2"
                stroke="url(#paint0_radial_244_2348)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2348"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        <div className="col-span-4 h-full w-full">
          <div className="flex justify-end pt-24 sm:w-full sm:pt-0 md:pl-28 lg:pl-56"></div>
        </div>
        <div className="col-span-4 h-full w-full ">
          <div className="w-0 sm:w-full"></div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="relative col-span-1 mt-3 flex h-full w-full justify-center"
        >
          <motion.div
            variants={cardVariants}
            className="flex h-full w-full justify-center bg-inherit"
          >
            <svg
              width="4"
              height="108"
              viewBox="0 0 4 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 106.005L2 2"
                stroke="url(#paint0_radial_244_2348)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2348"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(2.5 54.0024) scale(0.5 52.0024)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="invisible absolute mt-[54px] bg-inherit md:visible md:ml-36 md:w-24 lg:w-16 "
          >
            <svg
              width="64"
              height="18"
              viewBox="0 0 64 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5024L0 0.342149V17.6627L15 10.5024V7.5024ZM62.0198 10.5024C62.8482 10.5024 63.5198 9.83083 63.5198 9.0024C63.5198 8.17398 62.8482 7.5024 62.0198 7.5024V10.5024ZM13.5 10.5024H62.0198V7.5024H13.5V10.5024Z"
                fill="url(#paint0_radial_244_2349)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_244_2349"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(31.0099 9.5024) rotate(90) scale(0.5 31.0099)"
                >
                  <stop stopColor="#FFCCDE" />
                  <stop offset="1" stopColor="#FFCCDE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="col-span-4 h-full w-full "
        >
          <motion.div
            variants={cardVariants}
            className="h-full w-full p-2 md:pl-16"
          >
            <h1 className="text-bold py-2 text-left text-2xl font-bold text-[#34bb62] uppercase">
              Final pitch
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-left text-base text-[#E8E8EE] sm:mr-2">
                14th April, 2024
              </p>
              <span className="hidden text-4xl text-[#E8E8EE] md:block">|</span>
              <p className="text-left text-base text-[#E8E8EE] sm:ml-2">
                3:00 pm onwards
              </p>
            </div>

            <p className="pt-5 text-left text-xs font-medium text-[#E8E8EE] sm:text-base">
              The final pitch round where you present your final polished product to the judges
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TimelineComponent;