import React from 'react';
import '../Components_Css/Notification_BookingRoom.css';


const Notification_BookingRoom = ({ onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <span className="modal-title">Thông Báo</span>
        <button className="modal-close" onClick={onClose}>
          <img src="./Img_User/X-Cancel.jpg" alt="close" />
        </button>
      </div>
      <div className="modal-body">
        <p className="modal-message">Đặt phòng thành công !</p>
        <button className="modal-ok" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Notification_BookingRoom;