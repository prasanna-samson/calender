// src/components/AddEventForm.js
import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';

const AddEventForm = ({ onClose }) => {
  const { handleAddEvent } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { title, date, category };
    await handleAddEvent(newEvent);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Event
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
