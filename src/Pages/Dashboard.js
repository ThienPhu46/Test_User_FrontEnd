import React, { useState } from 'react';
import '../Design_Css/Dashboard.css';
import Sidebar from '../Components/Sliderbar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    console.log("Người dùng đã đăng xuất");
    setShowLogoutConfirm(false);
    // Thêm logic đăng xuất thực tế tại đây (ví dụ: xóa token, chuyển hướng về trang đăng nhập)
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        onLogoutClick={handleLogoutClick} 
      />
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
      
      {showLogoutConfirm && (
  <div className="logout-modal">
    <div className="logout-modal-content">
      <div className="logout-modal-header">
        <span className="header-text">Thông Báo</span>
        <span className="close-icon" onClick={handleCancelLogout}>X</span>
      </div>
      <p className="logout-message">Bạn có muốn đăng xuất?</p>
      <div className="logout-modal-buttons">
        <button className="confirm-button" onClick={handleConfirmLogout}>
          YES
        </button>
        <button className="cancel-button" onClick={handleCancelLogout}>
          NO
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Dashboard;