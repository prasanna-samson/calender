// src/pages/EditEventPage.js
import React from 'react';
import EditEventForm from '../components/EditEventForm';
import { useNavigate, useParams } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import { useContext } from 'react';

const EditEventPage = () => {
  const { id } = useParams();
  const { handleDeleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await handleDeleteEvent(id);
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <EditEventForm />
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
      >
        Delete Event
      </button>
    </div>
  );
};

export default EditEventPage;
