'use client'

import { useState } from "react";

//temporary that is why not in lib directory for now
type EventType = {
  name: string;
  type: string;
  startDate: string;
  endDate: string;
};

const generateEventData = (totalEvents: number): EventType[] => {
  const eventData: EventType[] = [];

  for (let i = 1; i <= totalEvents; i++) {
    const event: EventType = {
      name: `Event ${i}`,
      type: i % 2 === 0 ? "Workshop" : "Hackathon",
      startDate: "2022-05-01",
      endDate: "2022-05-03",
    };

    eventData.push(event);
  }

  return eventData;
};
//temporary ends

const EventsPage: React.FC = () => {
  const totalEvents = 50; // Total number of events
  const eventsPerPage = 10; // Number of events per page

  const [currentPage, setCurrentPage] = useState(1);
  const [eventTypeFilter, setEventTypeFilter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const allEventData = generateEventData(totalEvents);

  // Apply filters
  const filteredEvents = allEventData
    .filter(event => !eventTypeFilter || event.type === eventTypeFilter)
    .filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Paginate filtered events
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Event List</h1>
      <div>
        <label>
          Event Type:
          <select
            value={eventTypeFilter || ""}
            onChange={(e) => setEventTypeFilter(e.target.value || null)}
          >
            <option value="">All</option>
            <option value="Workshop">Workshop</option>
            <option value="Hackathon">Hackathon</option>
          </select>
        </label>
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
        {currentEvents.map((event, index) => (
          <li key={index}>
            <p>Name: {event.name}</p>
            <p>Type: {event.type}</p>
            <p>Start Date: {event.startDate}</p>
            <p>End Date: {event.endDate}</p>
            <hr />
          </li>
        ))}
      </ul>

      <div>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsPage;

