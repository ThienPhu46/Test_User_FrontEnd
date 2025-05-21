import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FooterUser from "../../Components/User/Components_Js/FooterUser"
import "../../Design_Css/User/TransactionHistory.css"
import HeaderUserLogin from "../../Components/User/Components_Js/HeaderUserLogin"

function TransactionHistoryPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("90-ngay-qua")
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const handleMenuItemClick = (item) => {
    if (item === "points") {
      navigate("/")
    } else if (item === "edit-profile") {
      navigate("/edit-profile")
    } else {
      window.location.hash = item
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab !== "ngay-tuy-chon") {
      setSelectedDate(null)
    } else {
      setCurrentMonth(new Date().getMonth())
      setCurrentYear(new Date().getFullYear())
    }
  }

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1)
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1)
  }

  const handleDayClick = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    setSelectedDate(date.toLocaleDateString("vi-VN"))
  }

  const months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ]
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDayIndex = getFirstDayOfMonth(currentMonth, currentYear)

  const renderCalendar = () => {
    const calendarDays = []
    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty" />)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && new Date(currentYear, currentMonth, day).toLocaleDateString("vi-VN") === selectedDate
      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>
      )
    }
    return calendarDays
  }

  return (
    <>
      <HeaderUserLogin />

      <div className="dashboard-container dashboard-container-custom">
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
                className="profile-menu-item"
                onClick={() => handleMenuItemClick("edit-profile")}
              >
                <img src="/Img_User/user.svg" alt="Edit Profile" className="menu-icon" />
                <span>Chỉnh sửa hồ sơ</span>
              </div>
              </a>
                <a href="TransactionHistory">
              <div
                className="profile-menu-item active-menu-item"
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

        <div className="right-container right-container-custom">
          <h1 className="rewards-title rewards-title-custom">
            Lịch sử giao dịch
          </h1>

          <div className="history-section">
            <div className="tabs-container">
              <div className="tabs-list tabs-list-custom">
                <button
                  className={`tab-button ${activeTab === "90-ngay-qua" ? "active" : ""}`}
                  onClick={() => handleTabClick("90-ngay-qua")}
                >
                  90 ngày qua
                </button>
                <button
                  className={`tab-button ${activeTab === "thang-4-2025" ? "active" : ""}`}
                  onClick={() => handleTabClick("thang-4-2025")}
                >
                  Tháng 4 2025
                </button>
                <button
                  className={`tab-button ${activeTab === "thang-3-2025" ? "active" : ""}`}
                  onClick={() => handleTabClick("thang-3-2025")}
                >
                  Tháng 3 2025
                </button>
                <button
                  className={`tab-button ${activeTab === "ngay-tuy-chon" ? "active" : ""}`}
                  onClick={() => handleTabClick("ngay-tuy-chon")}
                >
                  Ngày tùy chọn
                </button>
              </div>

              {activeTab === "ngay-tuy-chon" && (
                <div className="custom-calendar-container">
                  <div className="calendar-header">
                    <button className="calendar-nav" onClick={handlePrevMonth}>❮</button>
                    <span className="calendar-title">{months[currentMonth]} {currentYear}</span>
                    <button className="calendar-nav" onClick={handleNextMonth}>❯</button>
                  </div>
                  <div className="calendar-days">
                    {days.map((day) => (
                      <div key={day} className="calendar-day-label">{day}</div>
                    ))}
                    {renderCalendar()}
                  </div>
                  {selectedDate && (
                    <div className="selected-date">
                      Ngày đã chọn: {selectedDate}
                    </div>
                  )}
                </div>
              )}

              <div className="tab-content tab-content-custom">
                <div className="tab-panel">
                  <div className="empty-state empty-state-custom">
                    <div className="illustration-container">
                      <img
                        src="/Img_User/transaction-illustration.png"
                        alt="Transaction Illustration"
                        className="illustration-image illustration-image-custom"
                      />
                    </div>
                    <p className="empty-description empty-description-custom">
                      Không tìm thấy giao dịch <br />
                      Không tìm thấy giao dịch nào phù hợp với bạn chọn. Đã thử lọc để xem tất cả giao dịch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </>
  )
}

export default TransactionHistoryPage