import React, { useState } from "react";
import Datepicker from "react-datepicker";
import data from "./data/data.json";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [events, setEvents] = useState([] as any);

  const handleChange = (date: Date) => {
    setStartDate(date);
    console.log(date);
    console.log(startDate);

    const shortDate = date.toLocaleDateString();
    const filteredEvents = data.filter((item) => item.date === shortDate);
    console.log(filteredEvents);
    setEvents(filteredEvents);
    console.log(filteredEvents);
  };

  return (
    <div className="calendar">
      <Datepicker
        selected={startDate}
        onChange={handleChange}
        highlightDates={data.map((day) => {
          const date = new Date(day.date);
          date.setDate(date.getDate());
          return date;
        })}
        popperPlacement="center"
        placeholderText="Atlasīt laika periodu"
      />

      <div className="mt-5">
        {events.map((event: any, i: any) => {
          return (
            <div key={i}>
              <div>
                <p className="calendar-result-title">
                  {event.title}{" "}
                  <span className="calendar-result-type">({event.type})</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
