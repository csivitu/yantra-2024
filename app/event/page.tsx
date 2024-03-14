'use client'
import { useState, useEffect } from "react";
import axios from 'axios';
import { EventsType } from "@/types/event";

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
    <div>
      <h1>Event List</h1>
      <div>
        <select name="eventType" onChange={(e) => setEventType(e.target.value)} className="w-full p-2">
          <option value="">Select Event Type</option>
          <option value="workshop">Workshop</option>
          <option value="hackathon">Hackathon</option>
          <option value="tech talk">Tech Talk</option>
          <option value="tech competition">Tech Competition</option>
        </select>
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <p>Name: {event.eventName}</p>
            <p>Club: {event.clubName}</p>
            <p>Description: {event.description}</p>
            <p>Venue: {event.venue}</p>
            <p>Start Date: {new Date(event.eventStart).toLocaleString()}</p>
            <p>End Date: {new Date(event.eventEnd).toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <div>
        <span>Page {page + 1}</span>
        <button onClick={handlePreviousPage}>
          Previous
        </button>
        <button onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsPage;

