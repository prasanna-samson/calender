// src/components/Calendar.js
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const Calendar = () => {
  const { events } = useContext(EventContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate, events]); // Re-render when events change

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= lastDate; i++) {
      daysArray.push(i);
    }

    setDaysInMonth(daysArray);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getFormattedDate = () => {
    return currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700">
          ◀
        </button>
        <h2 className="text-2xl font-semibold">{getFormattedDate()}</h2>
        <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700">
          ▶
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-600">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="font-medium">{day}</div>
        ))}
        {daysInMonth.map((day, index) => (
          <div key={index} className={`h-20 w-20 flex flex-col items-center justify-center rounded-lg ${day ? 'cursor-pointer hover:bg-blue-100' : 'invisible'}`}>
            <span>{day}</span>
            {Array.isArray(events) && events
              .filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === day && eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear();
              })
              .map(event => (
                <div key={event.id} className="text-xs bg-pink-200 p-1 mt-1 rounded">
                  <span>{event.title}</span>
                  <div className="flex space-x-1">
                    <Link to={`/edit/${event.id}`} className="text-blue-500 underline">Edit</Link>
                    <span> | </span>
                    <Link to={`/delete/${event.id}`} className="text-red-500 underline">Delete</Link>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
