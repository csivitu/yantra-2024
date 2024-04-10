"use client";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Idea(){

    const router = useRouter();

    const [ideaData, setIdeaData] = useState({
        ideaDescription: "",
        ideaLink: "",
        track: "",
      });
    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
          const response = await axios.patch("/api/team/idea", ideaData);
          toast.success(response.data.message);
          router.push('/dashboard')
        } catch (error: any) {
          toast.error(error.response.data.message)
          console.error(error);
        }
      };
      const handleIdeaDataChange = (e: any) => {
        // console.log(e.target.value)
        e.preventDefault();
        setIdeaData({
          ...ideaData,
          [e.target.name]: e.target.value,
        });
        // console.log(ideaData)
      };
    return <div className="bg-black w-full h-full min-h-screen text-white flex items-center justify-center"><div className="flex flex-col gap-[1rem] items-center border-2 p-6 rounded-lg w-fit">
    <h2 className="w-full text-2xl mt-4 md:text-3xl font-ptMono text-center">
      Idea Submission
    </h2>
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex flex-col justify-center items-center gap-[2rem] "
    >
      <label className="flex flex-col gap-2gap-[1rem] justify-center items-center w-full">
        Idea Description:
        <input
          type="text"
          name="ideaDescription"
          value={ideaData.ideaDescription}
          onChange={handleIdeaDataChange}
          required
          className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono w-full px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
        />
      </label>
      <label className="flex flex-col gap-2gap-[1rem] justify-center items-center w-full">
        Idea Link:
        <input
          type="text"
          name="ideaLink"
          value={ideaData.ideaLink}
          onChange={handleIdeaDataChange}
          required
          className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono w-full px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
        />
      </label>
      <label className="flex flex-col gap-2gap-[1rem] justify-center items-center ">
        Track:
        <select
          name="track"
          value={ideaData.track}
          onChange={handleIdeaDataChange}
          required
          className="border-[2px] border-[#aeaeae70] bg-[#aeaeae50] text-gray-400 font-ptMono px-[1rem] rounded-lg py-1 md:py-[0.5rem] text-xl"
        >
          <option value="QUALITY EDUCATION">QUALITY EDUCATION</option>
          <option value="REDUCED INEQUALITIES">REDUCED INEQUALITIES</option>
          <option value="PARTNERSHIP FOR GOALS">PARTNERSHIP FOR GOALS</option>
          <option value="GENDER EQUALITY">GENDER EQUALITY</option>
          <option value="SUSTAINABLE CITIES COMMUNITIES">SUSTAINABLE CITIES COMMUNITIES</option>
          <option value="DECENT WORK AND ECONOMIC GROWTH">DECENT WORK AND ECONOMIC GROWTH</option>
        </select>
      </label>
      <button
        type="submit"
        className="flex flex-row gap-4 justify-center items-center font-ptMono px-6 py-2 w-full font-light  text-xl rounded-lg text-white bg-blue-500 border-b-4 border-transparent hover:scale-110 hover:border-b-4  hover:border-blue-700 transition-all duration-200 ease-in-out"
      >
        Submit
      </button>
    </form>
  </div></div>
}