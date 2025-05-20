import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/User/HomePage';
import Introduce from './Pages/User/Introduce';
import Room from './Pages/User/Room';
import Feature from './Pages/User/Feature';
import Discount from './Pages/User/Discount';
import Booking_Room from './Pages/User/Booking_Room';
import Contact from './Pages/User/Contact';
import LoginUser from './Components/User/Components_Js/LoginUser';
import RegisterUser from './Components/User/Components_Js/RegisterUser';
import HomeLoggedIn from './Pages/User/HomeLoggedIn';
import IntroduceLoggedIn from './Pages/User/IntroduceLoggedIn';
import RoomLoggedIn from './Pages/User/RoomLoggedIn';
import FeatureLoggedIn from './Pages/User/FeatureLoggedIn';
import DiscountLoggedIn from './Pages/User/DiscountLoggedIn';
import Booking_Room_LoggedIn from './Pages/User/Booking_Room_LoggedIn';
import ContactLoggedIn from './Pages/User/ContactLoggedIn';
import EditProfile from './Pages/User/EditProfile';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Discount" element={<Discount />} />
        <Route path="/Booking_Room" element={<Booking_Room />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LoginUser" element={<LoginUser />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/HomeLoggedIn" element={<HomeLoggedIn />} />
        <Route path="/IntroduceLoggedIn" element={<IntroduceLoggedIn />} />
        <Route path="/RoomLoggedIn" element={<RoomLoggedIn />} />
        <Route path="/FeatureLoggedIn" element={<FeatureLoggedIn />} />
        <Route path="/DiscountLoggedIn" element={<DiscountLoggedIn />} />
        <Route path="/Booking_Room_LoggedIn" element={<Booking_Room_LoggedIn />} />
        <Route path="/ContactLoggedIn" element={<ContactLoggedIn />} />
        <Route path="/EditProfile" element={<EditProfile />} />

      </Routes>
    </Router>
  );
};

export default App;