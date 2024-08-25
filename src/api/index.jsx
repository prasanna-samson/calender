// src/api/index.js
import axios from 'axios';

const BASE_URL = 'https://calendar-api.free.beeceptor.com';

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching events", error);
    return [];
  }
};

export const addEvent = async (event) => {
  const response = await axios.post(`${BASE_URL}/events`, event);
  return response.data;
};

export const editEvent = async (id, event) => {
  const response = await axios.put(`${BASE_URL}/events/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id) => {
  await axios.delete(`${BASE_URL}/events/${id}`);
};
