// src/components/Dashboard.js
import React, { useState } from 'react';
import '../Design_Css/Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logout-button">
            Đăng xuất
          </div>
          <div className="close-icon" onClick={toggleSidebar}>≪</div>
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
        </ul>
      </div>

      {/* Top Header (Trang Chủ) */}
      <div className="top-header">
        <div className="top-title-container">
          <div className="menu-icon" onClick={toggleSidebar}>☰</div>
          <div className="top-title">Trang Chủ</div>
        </div>
        <div className="more-icon">⋮</div>
      </div>

    

      {/* Main Title */}
      <h1 className="main-title">Phần mềm<br />quản lý khách sạn</h1>

      {/* Month Selector with Wrapper */}
      <div className="month-selector-wrapper">
        <div className="month-selector">
          <select>
            <option>Tháng 1</option>
            <option>Tháng 2</option>
            <option>Tháng 3</option>
          </select>
        </div>
      </div>

      {/* Content Wrapper (bao bọc tất cả các ô) */}
      <div className="content-wrapper">
        {/* Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <h3>Doanh thu</h3>
            <p>200,3 tr</p>
          </div>
          <div className="stat-card">
            <h3>Chi phí</h3>
            <p>47,9 tr</p>
          </div>
          <div className="stat-card">
            <h3>Lợi nhuận</h3>
            <p>152,4 tr</p>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="employee-container">
          <div className="employee-card">
            <div className="avatar" style={{ backgroundColor: '#f4c430' }}></div>
            <p>Nguyễn Văn A</p>
          </div>
          <div className="employee-card employee-card-middle">
            <div className="avatar" style={{ backgroundColor: '#1e6bd0' }}></div>
            <p>Minh Đức</p>
          </div>
          <div className="employee-card">
            <div className="avatar" style={{ backgroundColor: '#1e6bd0' }}></div>
            <p>Minh Đức</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;