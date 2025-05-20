import { useState } from "react";
import "../../Design_Css/User/EditProfile.css";
import HeaderUserLogin from "../../Components/User/Components_Js/HeaderUserLogin";
import FooterUser from "../../Components/User/Components_Js/FooterUser";

export default function LoyaltyDashboard() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <>
    <HeaderUserLogin />
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-profile">
            <h2>Duy Đỗ</h2>
            <div className="user-status">
              <span className="gold-icon">🏅</span>
              <span>Bạn là thành viên Gold của Debug Hotel</span>
            </div>
          </div>

          <div className="points-display">
            <span className="dollar-icon">$</span>
            <span className="points-value">9999 Điểm</span>
          </div>

          <div className="menu-items">
            <button className="menu-button">
              <span className="menu-icon user-icon">👤</span>
              Chỉnh sửa hồ sơ
            </button>
            <button className="menu-button">
              <span className="menu-icon history-icon">📄</span>
              Lịch sử giao dịch
            </button>
            <button className="menu-button">
              <span className="menu-icon logout-icon">↩️</span>
              Đăng xuất
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1 className="main-title">Điểm thưởng của tôi</h1>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="card-content">
                <div className="card-points">
                  <span className="gold-icon">🏅</span>
                  <span className="points-value">9999 Điểm</span>
                </div>
                <button className="card-button">Thông tin về xu</button>
              </div>
            </div>

            <div className="info-card info-card-right">
              <div className="card-content">
                <div className="card-text">
                  <p>Hãy tìm hiểu về cách kiếm và đổi Xu!</p>
                </div>
                <button className="card-button">Tìm hiểu cách thức</button>
              </div>
            </div>
          </div>

          {/* History Tabs */}
          <div className="history-section">
            <h2 className="section-title">Lịch sử tích Xu</h2>

            <div className="tabs">
              <div className="tabs-list">
                <button
                  className={`tab-button ${activeTab === "active" ? "active" : ""}`}
                  onClick={() => setActiveTab("active")}
                >
                  Hoạt động
                </button>
                <button
                  className={`tab-button ${activeTab === "pending" ? "active" : ""}`}
                  onClick={() => setActiveTab("pending")}
                >
                  Đang chờ xử lý
                </button>
                <button
                  className={`tab-button ${activeTab === "expired" ? "active" : ""}`}
                  onClick={() => setActiveTab("expired")}
                >
                  Đã hết hạn
                </button>
                <button
                  className={`tab-button ${activeTab === "cancelled" ? "active" : ""}`}
                  onClick={() => setActiveTab("cancelled")}
                >
                  Đã hủy
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "active" && (
                  <div className="empty-state">
                    <div className="illustration-container">
                      <img
                        src="/placeholder.svg?height=160&width=160"
                        alt="Empty state illustration"
                        className="illustration"
                      />
                      <div className="badge">P</div>
                    </div>
                    <p className="empty-title">Bạn hiện chưa có Debug Points nào.</p>
                    <p className="empty-description">
                      Hãy cùng khám phá nhiều cách khác nhau để kiếm Xu và tận hưởng những lợi ích!
                    </p>
                    <button className="primary-button">Tìm hiểu cách thức</button>
                  </div>
                )}

                {activeTab === "pending" && (
                  <div className="empty-state">
                    <p className="empty-message">Không có giao dịch đang chờ xử lý</p>
                  </div>
                )}

                {activeTab === "expired" && (
                  <div className="empty-state">
                    <p className="empty-message">Không có giao dịch đã hết hạn</p>
                  </div>
                )}

                {activeTab === "cancelled" && (
                  <div className="empty-state">
                    <p className="empty-message">Không có giao dịch đã hủy</p>
                  </div>
                )}
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
