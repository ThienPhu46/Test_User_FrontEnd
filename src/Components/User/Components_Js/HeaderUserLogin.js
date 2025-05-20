
import { useState } from "react"
import { NavLink } from "react-router-dom"
 import "../Components_Css/HeaderUserLogin.css";

function HeaderUserLogin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <main className="main-container-loggedin">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            <a href="">
              <img src="/Img_User/debug-logo.png" alt="Debug Team Logo" className="logo" />
            </a>
          </div>

          <div className="desktop-nav">
            <NavLink to="/HomeLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Trang chủ
            </NavLink>
            <NavLink to="/IntroduceLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Giới thiệu
            </NavLink>
            <NavLink to="/RoomLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Phòng
            </NavLink>
            <NavLink to="/FeatureLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Tiện ích
            </NavLink>
            <NavLink to="/DiscountLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Khuyến mãi
            </NavLink>
            <NavLink
              to="/Booking_Room_LoggedIn"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Đặt phòng
            </NavLink>
            <NavLink to="/ContactLoggedIn" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Liên hệ
            </NavLink>
          </div>

          <div className="user-info">
            <div className="user-name" onClick={toggleProfileMenu}>
              <img src="/Img_User/UserLogin.png" alt="User Icon" className="user-icon" />
              <span className="user-text">Duy Độ</span>

              {isProfileOpen && (
                <div className="profile-popup">
                  <div className="profile-header">
                    <span className="profile-name">Duy Độ</span>
                    <div className="membership-status">
                      <img src="/Img_User/CoinUser.png" alt="Gold Member" className="gold-icon" />
                      <span>Bạn là thành viên Gold của Debug Hotel</span>
                    </div>
                  </div>
                  <div className="profile-menu-items">
                    
                    <a href="/EditProfile"><div className="profile-menu-item">
                      <img src="/Img_User/$.svg" alt="Points" className="menu-icon" />
                      <span>9999 Điểm</span>
                    </div>
                    </a>

                    <a href=""><div className="profile-menu-item">
                      <img src="/Img_User/user.svg" alt="Edit Profile" className="menu-icon" />
                      <span>Chỉnh sửa hồ sơ</span>
                    </div>
                    </a>

                    <a href=""><div className="profile-menu-item">
                      <img src="/Img_User/Lich.svg" alt="Transaction History" className="menu-icon" />
                      <span>Lịch sử giao dịch</span>
                    </div>
                    </a>

                    <a href="/"><div className="profile-menu-item">
                      <img src="/Img_User/logout.svg" alt="Logout" className="menu-icon" />
                      <span>Đăng xuất</span>
                    </div>
                    </a>

                  </div>
                </div>
              )}
            </div>
            <div className="user-points">
              <img src="/Img_User/CoinUser.png" alt="Coin Icon" className="coin-icon" />
              <span className="points-text">9999 Điểm</span>
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
              <a href="/HomeLoggedIn" className="mobile-nav-link">
                Trang chủ
              </a>
              <a href="/IntroduceLoggedIn" className="mobile-nav-link">
                Giới thiệu
              </a>
              <a href="/RoomLoggedIn" className="mobile-nav-link">
                Phòng
              </a>
              <a href="/FeatureLoggedIn" className="mobile-nav-link">
                Tiện ích
              </a>
              <a href="/DiscountLoggedIn" className="mobile-nav-link">
                Khuyến mãi
              </a>
              <a href="/Booking_Room_LoggedIn" className="mobile-nav-link">
                Đặt phòng
              </a>
              <a href="/ContactLoggedIn" className="mobile-nav-link">
                Liên hệ
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="hero-container">
        <div className="hero-image-container">
          <img src="/Img_User/Img_Page.png" alt="Luxury Hotel" className="hero-image" />
        </div>
      </div>
    </main>
  )
}

export default HeaderUserLogin
  