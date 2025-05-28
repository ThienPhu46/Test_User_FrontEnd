import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/User/HomePage';
import Introduce from './Pages/User/Introduce';
import Room from './Pages/User/Room';
import Feature from './Pages/User/Feature';
import Discount from './Pages/User/Discount';
import Contact from './Pages/User/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Discount" element={<Discount />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  );
};

export default App;