import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FooterUser from "../../Components/User/Components_Js/FooterUser"
import "../../Design_Css/User/EditProfilePage.css"
import HeaderUserLogin from "../../Components/User/Components_Js/HeaderUserLogin"

function EditProfilePage() {
  const navigate = useNavigate()

  const handleMenuItemClick = (item) => {
    if (item === "points") {
      navigate("/")
    } else {
      window.location.hash = item
    }
  }

  return (
    <>
      <HeaderUserLogin />

      <div className="dashboard-container">
        {/* Left Container - Profile Section */}
        <div className="left-container">
          <div className="profile-popup">
            <div className="profile-header">
              <span className="profile-name">Duy Độ</span>
              <div className="membership-status">
                <img src="/Img_User/CoinUser.png" alt="Gold Member" className="gold-icon" />
                <span>Bạn là thành viên Gold của Debug Hotel</span>
              </div>
            </div>
            <div className="profile-menu-items">
            <a href="EditProfile">
              <div
                className="profile-menu-item"
                onClick={() => handleMenuItemClick("points")}
              >
                <img src="/Img_User/$.svg" alt="Points" className="menu-icon" />
                <span>9999 Điểm</span>
              </div>
              </a>
                <a href="EditProfilePage">
              <div
                className="profile-menu-item active-menu-item"
                onClick={() => handleMenuItemClick("edit-profile")}
              >
                <img src="/Img_User/user.svg" alt="Edit Profile" className="menu-icon" />
                <span>Chỉnh sửa hồ sơ</span>
              </div>
              </a>
                <a href="TransactionHistory">
              <div
                className="profile-menu-item"
                onClick={() => handleMenuItemClick("history")}
              >
                <img src="/Img_User/Lich.svg" alt="Transaction History" className="menu-icon" />
                <span>Lịch sử giao dịch</span>
              </div>
              </a>
                <a href="/">
              <div
                className="profile-menu-item"
                onClick={() => handleMenuItemClick("logout")}
              >
                <img src="/Img_User/logout.svg" alt="Logout" className="menu-icon" />
                <span>Đăng xuất</span>
              </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="right-container">
          <h1 className="rewards-title">Thông tin tài khoản</h1>
          <div className="edit-profile-section">
            <h2 className="section-title">Dữ liệu cá nhân</h2>
            <div className="form-group">
              <label>Tên đầy đủ</label>
              <input
                type="text"
                value="Duy Độ"
                readOnly
                className="form-input"
                placeholder="Tên trong hồ sơ được rút ngắn từ tên của bạn."
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Giới tính</label>
                <select className="form-select">
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <div className="date-row">
                  <select className="form-select date-select">
                    <option>Tháng 5</option>
                    <option>Tháng 1</option>
                    <option>Tháng 2</option>
                    <option>Tháng 3</option>
                    <option>Tháng 4</option>
                    <option>Tháng 6</option>
                    <option>Tháng 7</option>
                    <option>Tháng 8</option>
                    <option>Tháng 9</option>
                    <option>Tháng 10</option>
                    <option>Tháng 11</option>
                    <option>Tháng 12</option>
                  </select>
                  <select className="form-select date-select">
                    <option>2000</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2000 - i}>{2000 - i}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Thành phố cư trú</label>
              <input type="text" className="form-input" placeholder="Nhập thành phố cư trú" />
            </div>
            <div className="form-actions">
              <button className="cancel-button">Có thể để sau</button>
              <button className="save-button">Lưu</button>
            </div>
          </div>

          <div className="edit-profile-section">
            <div className="section-header">
              <h2 className="section-title">Email</h2>
              <p className="section-description">Chỉ có thể sử dụng tối đa 3 email</p>
            </div>
            <div className="email-list">
              <div className="email-item">
                <span>1. duyđộ13062004@gmail.com</span>
                <span className="email-label">Nối Nhận thông báo</span>
              </div>
              <div className="email-item">
                <span>2. duyđộ13062004@gmail.com</span>
              </div>
              <div className="email-item">
                <span>3. duyđộ13062004@gmail.com</span>
              </div>
            </div>
            <button className="add-button">+ Thêm email</button>
          </div>

          <div className="edit-profile-section">
            <div className="section-header">
              <h2 className="section-title">Số di động</h2>
              <p className="section-description">Chỉ có thể sử dụng tối đa 3 số di động</p>
            </div>
            <button className="add-button">+ Thêm số di động</button>
          </div>

          <div className="edit-profile-section">
            <div className="section-header">
              <h2 className="section-title">Tài khoản đã Liên kết</h2>
              <p className="section-description">Liên kết tài khoản mạng xã hội của bạn để đăng nhập Traveloka dễ dàng</p>
            </div>
            <div className="linked-accounts">
              <div className="account-item">
                <div className="account-info">
                  <img src="/Img_User/facebook-icon.png" alt="Facebook" className="account-icon" />
                  <span>Facebook</span>
                </div>
                <button className="link-button">Liên kết</button>
              </div>
              <div className="account-item">
                <div className="account-info">
                  <img src="/Img_User/google-icon.png" alt="Google" className="account-icon" />
                  <span>Google</span>
                </div>
                <button className="link-button">Liên kết</button>
              </div>
              <div className="account-item">
                <div className="account-info">
                  <img src="/Img_User/apple-icon.png" alt="Apple" className="account-icon" />
                  <span>Apple</span>
                </div>
                <button className="link-button">Liên kết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </>
  )
}

export default EditProfilePage