import React from 'react';
import './RoomCard.css'; // CSS cho RoomCard

const RoomCard = ({ roomNumber, status, date, note }) => {
  // Xác định màu sắc dựa trên trạng thái
  const statusClass = status === 'Phòng trống' ? 'room-available' :
                     status === 'Phòng bận' ? 'room-busy' :
                     status === 'Phòng giao định' ? 'room-reserved' : '';

  return (
    <div className={`room-card ${statusClass}`}>
      <div className="room-header">
        <span>{roomNumber}</span>
        <span className="close-icon">×</span>
      </div>
      <p>{status}</p>
      <div className="room-info">
        <span>{date}</span>
        <span>{note}</span>
      </div>
      <div className="room-actions">
        <button>Đặt phòng</button>
        <button>Đơn đặt</button>
      </div>
    </div>
  );
};

export default RoomCard;