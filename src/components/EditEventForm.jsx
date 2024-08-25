// src/components/EditEventForm.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EditEventForm = () => {
  const { id } = useParams();
  const { events, handleEditEvent } = useContext(EventContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: ''
  });

  useEffect(() => {
    const event = events.find((e) => e.id === parseInt(id));
    if (event) {
      setFormData({
        title: event.title,
        date: event.date,
        category: event.category
      });
    }
  }, [id, events]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEditEvent(id, formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditEventForm;
