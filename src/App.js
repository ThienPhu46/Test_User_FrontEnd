import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Admin/Login';
import Dashboard from './Pages/Admin/Dashboard';
import RoomAdmin from './Pages/Admin/RoomAdmin';
import BookingRoom from './Pages/Admin/BookingRoom';

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