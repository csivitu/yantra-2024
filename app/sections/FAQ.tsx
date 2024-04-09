"use client";

import React, { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  const toggleQuestion = (questionNumber: number) => {
    switch (questionNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      case 6:
        setIsOpen6(!isOpen6);
        break;
      case 7:
        setIsOpen7(!isOpen7);
        break;
      case 8:
        setIsOpen8(!isOpen8);
        break;
      case 9:
        setIsOpen9(!isOpen9);
        break;

      default:
        break;
    }
  };

  return (
    <div
      id="guidelines"
      className="flex flex-col justify-center items-center gap-[1.5rem] px-[3rem]  w-full  font-aeonik"
    >
      {/* <Image
        src="/backgrounds/Mathematics.svg"
        alt="Your Image"
        layout="fill"
        objectFit="cover"
      /> */}
      <div className="flex flex-col w-full bg-herohackfaq py-[2rem] px-[3rem] gap-[1.5rem]">
        <div className="text-center tab:text-left leading-none font-ptMono text-[#eaeaea] mobile:text-3xl laptop:text-6xl border border-[#292929] w-full pb-4 pt-3 tab:pl-6 rounded-[20px]">
          GUIDELINES
        </div>

        <div className="flex flex-col gap-8 w-full ">
          {/* Question 1 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(1)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  01
                </div>
                <div className="">Eligibility</div>
              </div>
              <button onClick={() => toggleQuestion(1)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen1 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen1 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              To participate in the central hack, all individuals are welcome to
              create and submit their profiles via our website prior to the
              start of the hackathon. Submissions will undergo evaluation, and
              participants will be notified of their eligibility status.
            </div>
          </div>

          {/* Question 2 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(2)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  02
                </div>
                <div className="">Venue & Format</div>
              </div>
              <button onClick={() => toggleQuestion(2)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen2 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen2 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              The Central Hack will unfold across various venues, with each
              track being assigned a distinct location. Participants will
              receive notification of their track's venue prior to the
              hackathon's commencement.
            </div>
          </div>

          {/* Question 3 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(3)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  03
                </div>
                <div className="">Team Composition</div>
              </div>
              <button onClick={() => toggleQuestion(3)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen3 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen3 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              Teams must consist of a minimum of three members and a maximum of five individuals.
            </div>
          </div>

          {/* Question 4 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(4)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  04
                </div>
                <div className="">Duration</div>
              </div>
              <button onClick={() => toggleQuestion(4)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen4 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen4 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              During the Yantra week multiple clubs and chapters had conducted
              hackathons. The SDG Hackathon is exclusive only to the winning
              teams from these hackathons. Each Club and Chapter can send in 5
              member representatives as well to take part in the SDG Hackathon.
              We also entertain lateral entries for which you will be
              shortlisted to participate on the basis of your project
              submission. All the participants must be undergraduate students of
              Vellore Institute of Technology, Vellore and must be in campus to
              take part.
            </div>
          </div>

          {/* Question 5 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(5)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  05
                </div>
                <div className="">Tracks & Project Submission</div>
              </div>
              <button onClick={() => toggleQuestion(5)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen5 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen5 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              During the Yantra week multiple clubs and chapters had conducted
              hackathons. The SDG Hackathon is exclusive only to the winning
              teams from these hackathons. Each Club and Chapter can send in 5
              member representatives as well to take part in the SDG Hackathon.
              We also entertain lateral entries for which you will be
              shortlisted to participate on the basis of your project
              submission. All the participants must be undergraduate students of
              Vellore Institute of Technology, Vellore and must be in campus to
              take part.
            </div>
          </div>
          {/* Question 6 */}
          <div className="border border-white rounded-lg p-6 transition-all duration-300 ease-in-out cursor-pointer" onClick={() => toggleQuestion(9)}>
            <div className="flex flex-row w-full justify-between">
              <div className="flex text-white text-large laptop:text-3xl gap-4 ">
                <div className="flex rounded-[30px] border border-white px-2 items-center">
                  06
                </div>
                <div className="">Fair Play</div>
              </div>
              <button onClick={() => toggleQuestion(9)}>
                <Image
                  src="/icons/plus.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className={`${
                    isOpen9 ? "rotate-45" : "rotate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </button>
            </div>
            <div
              className={`${
                !isOpen9 ? "hidden" : "block"
              } text-white px-2 py-4 mt-6 text-sm laptop:text-2xl border-t border-white transition-all duration-300 ease-in-out`}
            >
              During the Yantra week multiple clubs and chapters had conducted
              hackathons. The SDG Hackathon is exclusive only to the winning
              teams from these hackathons. Each Club and Chapter can send in 5
              member representatives as well to take part in the SDG Hackathon.
              We also entertain lateral entries for which you will be
              shortlisted to participate on the basis of your project
              submission. All the participants must be undergraduate students of
              Vellore Institute of Technology, Vellore and must be in campus to
              take part.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
