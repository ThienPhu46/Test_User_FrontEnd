import { useState } from "react"
import { NavLink } from 'react-router-dom'
import "../Components_Css/HeaderUser.css";
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="main-container">

      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
       <div className="logo-container">
        <a href="/"><img src="/Img_User/debug-logo.png" alt="Debug Team Logo" className="logo" /></a>
        </div>
          </div>


          <div className="desktop-nav">
          <div className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Trang chủ</NavLink>
            <NavLink to="/Introduce" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Giới thiệu</NavLink>
            <NavLink to="/Room" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Phòng</NavLink>
            <NavLink to="/Feature" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Tiện ích</NavLink>
            <NavLink to="/Discount" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Khuyến mãi</NavLink>
            <NavLink to="/Booking_Room" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Đặt phòng</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Liên hệ</NavLink>
          </div>
            <div className="auth-buttons">
              <a href="/LoginUser" className="login-button">
                ĐĂNG NHẬP
              </a>
              <a href="/RegisterUser" className="register-button">
                ĐĂNG KÝ
              </a>
            </div>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-links">
              <a href="/" className="mobile-nav-link">
                Trang chủ
              </a>
              <a href="/Introduce" className="mobile-nav-link">
                Giới thiệu
              </a>
              <a href="/Room" className="mobile-nav-link">
                Phòng
              </a>
              <a href="/Feature" className="mobile-nav-link">
                Tiện ích
              </a>
              <a href="/Discount" className="mobile-nav-link">
                Khuyến mãi
              </a>
              <a href="/Booking_Room" className="mobile-nav-link">
                Đặt phòng
              </a>
              <a href="Contact" className="mobile-nav-link">
                Liên hệ
              </a>
              <div className="mobile-auth-buttons">
                <a href="/LoginUser" className="mobile-login-button">
                  ĐĂNG NHẬP
                </a>
                <a href="/register" className="mobile-register-button">
                  ĐĂNG KÝ
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="hero-container">
        <div className="hero-image-container">
          <img src="/Img_User/Img_Page.png" alt="Luxury Hotel" className="hero-image" />
        </div>
        <div className="hero-cta">
          <a href="/RegisterUser" className="register-now-button">
            ĐĂNG KÝ NGAY
          </a>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
