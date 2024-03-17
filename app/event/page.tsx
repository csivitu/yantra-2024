'use client'
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import axios from 'axios';
import { EventsType } from "@/types/event";
import Navbar from "../components/Navbar";
const EventsPage = () => {
  const [events, setEvents] = useState<EventsType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [eventType, setEventType] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/event?page=${page}&limit=10&type=${eventType}&name=${searchTerm}`);
        setEvents(response.data.events);
      }
      catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [page, eventType, searchTerm])

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage > 0 ? prevPage - 1 : prevPage);
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <main className="w-full bg-black flex flex-col justify-around items-center gap-[2rem]  px-[2rem] py-[2rem]">
      <Navbar/>
     <div className="w-full flex latop:flex-row mobile:flex-col justify-between laptop:items-center mobile:gap-[1rem]">
     <h1 className="text-white font-ptMono text-5xl">Events</h1>
      <input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="border-[2px] border-[#fafafa] bg-black text-gray-400 font-ptMono px-[1rem] rounded-lg py-[0.5rem] text-xl"
  placeholder="Search"
/>
     </div>
     <div className="flex flex-col justify-between gap-[1rem] items-center w-full">
      {
        events.map((event, index) => (
          <EventCard key={index} description={event.description} name={event.eventName} club={event.clubName} date={event.eventStart} venue={event.venue} event_name={event.eventName} />
        ))
      }
{/* <EventCard/>
<EventCard/>
<EventCard/>
<EventCard/> */}
     </div>
    </main>
  );
};

export default EventsPage;

{/* <select name="eventType" onChange={(e) => setEventType(e.target.value)} className="w-full p-2">
<option value="">Select Event Type</option>
<option value="workshop">Workshop</option>
<option value="hackathon">Hackathon</option>
<option value="tech talk">Tech Talk</option>
<option value="tech competition">Tech Competition</option>
</select>
<label>
Search:

</label> */}

// {events.map((event, index) => (
//   <li key={index}>
//     <p>Name: {event.eventName}</p>
//     <p>Club: {event.clubName}</p>
//     <p>Description: {event.description}</p>
//     <p>Venue: {event.venue}</p>
//     <p>Start Date: {new Date(event.eventStart).toLocaleString()}</p>
//     <p>End Date: {new Date(event.eventEnd).toLocaleString()}</p>
//     <p>Is Overnight: {event.isOvernight}</p>
//     {event.collaboratingWith && <p>Collaborating With: {event.collaboratingWith}</p>}

//   </li>
// ))}
{/* <span>Page {page + 1}</span>
<button onClick={handlePreviousPage}>
  Previous
</button>
<button onClick={handleNextPage}>
  Next
</button> */}