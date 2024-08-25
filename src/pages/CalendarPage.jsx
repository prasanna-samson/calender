// src/pages/CalendarPage.js
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import AddEventForm from '../components/AddEventForm';

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-8">
      <Calendar />
      <button
        onClick={openModal}
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        +
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
            <AddEventForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
