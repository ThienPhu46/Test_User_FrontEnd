import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import RoomAdmin from './Pages/RoomAdmin';
import BookingRoom from './Pages/BookingRoom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/RoomAdmin" element={<RoomAdmin />} />
        <Route path="/BookingRoom" element={<BookingRoom />} />
      </Routes>
    </Router>
  );
};

export default App;