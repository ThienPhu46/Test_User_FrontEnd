import React from "react";
import "../Components_Css/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <h2>Duy Đỗ</h2>
      </div>
      <div className="user-info">
        <p>Bạn đang thành viên Bronze tại Debug Hotel</p>
      </div>
      <div className="user-points">
        <span className="icon">💰</span>
        <span>0 Điểm</span>
      </div>
      <div className="user-menu">
        <div className="menu-item">
          <span className="icon">👤</span>
          <span>Chỉnh sửa hồ sơ</span>
        </div>
        <div className="menu-item">
          <span className="icon">📅</span>
          <span>Lịch sử giao dịch</span>
        </div>
        <div className="menu-item">
          <span className="icon">🔋</span>
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;