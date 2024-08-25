// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import EditEventPage from './pages/EditEventPage';
import { EventProvider } from './context/EventContext';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/edit/:id" element={<EditEventPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;
