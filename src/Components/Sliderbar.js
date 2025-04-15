import React from 'react';
import './Sliderbar.css'; 

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="close-icon" onClick={toggleSidebar}>X</div>
        <div className="avatar-placeholder"></div>
        <p>Administrator</p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <span className="menu-icon">🏠</span> Trang Chủ
        </li>
        <li>
          <span className="menu-icon">🛏️</span> Phòng
        </li>
        <li>
          <span className="menu-icon">📅</span> Đặt Phòng
        </li>
        <li>
          <span className="menu-icon">📄</span> Hóa Đơn
        </li>
        <li>
          <span className="menu-icon">👥</span>QL Khách Hàng
        </li>
        <li>
          <span className="menu-icon">🏢</span> QL Phòng
        </li>
        <li>
          <span className="menu-icon">🏢</span> QL Loại Phòng
        </li>
        <li>
          <span className="menu-icon">🏢</span> QL Dịch vụ
        </li>
        <li>
          <span className="menu-icon">🔢</span> QLCT Tính Điểm
        </li>
        <li>
          <span className="menu-icon">🔢</span> QLLS Tích Điểm
        </li>
        <li>
          <span className="menu-icon">📋</span> QL Tài Khoản
        </li>
        <li>
          <span className="menu-icon">👤</span> QL Nhân Viên
        </li>
        <li>
          <span className="menu-icon">📊</span> Thống Kê
        </li>
        <li>
          <span className="menu-icon">📊</span> Đăng Xuất 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;