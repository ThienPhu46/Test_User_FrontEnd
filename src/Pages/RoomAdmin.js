import React, { useState } from 'react';
import Sidebar from '../Components/Sliderbar';
import RoomCard from '../Components/RoomCard';
import '../Design_Css/RoomAdmin.css';

const Room = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dữ liệu mẫu cho các phòng
  const rooms = [
    { number: 'P101', status: 'Phòng trống', date: '0 ngày', note: '' },
    { number: 'P102', status: 'Phòng trống', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P103', status: 'Phòng trống', date: '0 ngày', note: 'Chưa đặt' },
    { number: 'P104', status: 'Phòng trống', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P105', status: 'Phòng trống', date: '0 ngày', note: '' },
    { number: 'P106', status: 'Phòng trống', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P201', status: 'Phòng bận', date: '0 ngày', note: '' },
    { number: 'P202', status: 'Phòng bận', date: 'Trần Gia Huy', note: 'Đơn đặt' },
    { number: 'P203', status: 'Phòng bận', date: '0 ngày', note: 'Chưa đặt' },
    { number: 'P204', status: 'Phòng bận', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P205', status: 'Phòng bận', date: '0 ngày', note: '' },
    { number: 'P206', status: 'Phòng bận', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P207', status: 'Phòng bận', date: '0 ngày', note: '' },
    { number: 'P208', status: 'Phòng bận', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P209', status: 'Phòng bận', date: '0 ngày', note: '' },
    { number: 'P210', status: 'Phòng bận', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P301', status: 'Phòng giao định', date: '0 ngày', note: '' },
    { number: 'P302', status: 'Phòng giao định', date: 'Vũ Văn Phúc', note: 'Đơn đặt' },
    { number: 'P303', status: 'Phòng giao định', date: '0 ngày', note: 'Đơn đặt' },
    { number: 'P304', status: 'Phòng giao định', date: '0 ngày', note: 'Đơn đặt' },
  ];

  return (
    <div className="room-container">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="room-header">
          <div className="menu-icon" onClick={toggleSidebar}>☰</div>
          <div className="header-info">
            <span>Chọn ngày: 11/04/2025</span>
            <span>3:52 PM</span>
            <input type="text" placeholder="Tìm phòng" />
          </div>
        </div>

        {/* Room Categories */}
        <div className="room-categories">
          <h2>Phòng trống</h2>
          <div className="room-list">
            {rooms
              .filter((room) => room.status === 'Phòng trống')
              .map((room) => (
                <RoomCard
                  key={room.number}
                  roomNumber={room.number}
                  status={room.status}
                  date={room.date}
                  note={room.note}
                />
              ))}
          </div>

          <h2>Phòng bận</h2>
          <div className="room-list">
            {rooms
              .filter((room) => room.status === 'Phòng bận')
              .map((room) => (
                <RoomCard
                  key={room.number}
                  roomNumber={room.number}
                  status={room.status}
                  date={room.date}
                  note={room.note}
                />
              ))}
          </div>

          <h2>Phòng giao định</h2>
          <div className="room-list">
            {rooms
              .filter((room) => room.status === 'Phòng giao định')
              .map((room) => (
                <RoomCard
                  key={room.number}
                  roomNumber={room.number}
                  status={room.status}
                  date={room.date}
                  note={room.note}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;