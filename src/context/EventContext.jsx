// src/context/EventContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchEvents, addEvent, editEvent, deleteEvent } from '../api';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]); // Initialize with an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(Array.isArray(fetchedEvents) ? fetchedEvents : []);
      } catch (error) {
        setError(error);
      }
    };

    loadEvents();
  }, []);

  const handleAddEvent = async (newEvent) => {
    try {
      const addedEvent = await addEvent(newEvent);
      setEvents([...events, addedEvent]);
    } catch (error) {
      setError(error);
    }
  };

  const handleEditEvent = async (id, updatedEvent) => {
    try {
      const event = await editEvent(id, updatedEvent);
      setEvents(events.map((e) => (e.id === event.id ? event : e)));
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      setEvents(events.filter((e) => e.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <EventContext.Provider value={{ events, handleAddEvent, handleEditEvent, handleDeleteEvent, error }}>
      {children}
    </EventContext.Provider>
  );
};
