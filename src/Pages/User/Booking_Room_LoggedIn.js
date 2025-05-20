import { useState } from "react";
import "../../Design_Css/User/Booking_Room.css";
import HeaderBookingRoom from "../../Components/User/Components_Js/HeaderBookingRoom";
import FooterUser from "../../Components/User/Components_Js/FooterUser";
import Notification_BookingRoom from "../../Components/User/Components_Js/Notification_BookingRoom";

export default function Booking_Room_LoggedIn() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [remainingChars, setRemainingChars] = useState(500);
  const [isModalOpen, setIsModalOpen] = useState(false); // State để hiển thị thông báo

  // Dữ liệu dịch vụ
  const services = [
    {
      id: "one-way",
      title: "Đưa đón sân bay một chiều",
      price: 1000000,
      priceText: "1.000.000 VND",
    },
    {
      id: "two-way",
      title: "Đưa đón sân bay hai chiều",
      price: 2000000,
      priceText: "2.000.000 VND",
    },
  ];

  // Dữ liệu phòng
  const [rooms, setRooms] = useState([
    {
      id: "single",
      name: "Phòng Đơn",
      title: "Phòng Đơn (Single Room)",
      description: "Không gian riêng tư dành cho 1 khách, đầy đủ tiện nghi như TV, wifi, minibar và bàn làm việc.",
      price: 1000000,
      priceText: "1.000.000 VND",
      bedType: "Giường đôi",
      capacity: "1 đêm, 1 người",
      images: [
        "./Img_User/Img_Room_1.png",
        "./Img_User/Img_Room_2.png",
        "./Img_User/Img_Room_3.png",
        "./Img_User/Img_Room_1.png",
      ],
      features: [
        { icon: "🍳", text: "Bao gồm bữa sáng" },
        { icon: "❌", text: "Không thể hủy, sửa đổi" },
        { icon: "💳", text: "Thanh toán sau" },
      ],
    },
    {
      id: "double",
      name: "Phòng Đôi",
      title: "Phòng Đôi (Double Room)",
      description: "Không gian thoải mái dành cho 2 khách, đầy đủ tiện nghi như TV, wifi, minibar và bàn làm việc.",
      price: 1500000,
      priceText: "1.500.000 VND",
      bedType: "Giường đôi lớn",
      capacity: "1 đêm, 2 người",
      images: [
        "./Img_User/Img_Room_1.png",
        "./Img_User/Img_Room_2.png",
        "./Img_User/Img_Room_3.png",
        "./Img_User/Img_Room_1.png",
      ],
      features: [
        { icon: "🍳", text: "Bao gồm bữa sáng" },
        { icon: "✓", text: "Miễn phí hủy trước 3 ngày" },
        { icon: "💳", text: "Thanh toán sau" },
      ],
    },
    {
      id: "deluxe",
      name: "Phòng Deluxe",
      title: "Phòng Deluxe (Deluxe Room)",
      description: "Phòng sang trọng với không gian rộng rãi, view đẹp và đầy đủ tiện nghi cao cấp.",
      price: 2000000,
      priceText: "2.000.000 VND",
      bedType: "Giường King",
      capacity: "1 đêm, 2 người",
      images: [
        "./Img_User/Img_Room_1.png",
        "./Img_User/Img_Room_2.png",
        "./Img_User/Img_Room_3.png",
        "./Img_User/Img_Room_1.png",
      ],
      features: [
        { icon: "🍳", text: "Bao gồm bữa sáng" },
        { icon: "✓", text: "Miễn phí hủy trước 1 ngày" },
        { icon: "🛁", text: "Bồn tắm và vòi sen riêng" },
      ],
    },
  ]);

  // State cho chỉ mục ảnh hiện tại
  const [currentImageIndices, setCurrentImageIndices] = useState({
    single: 0,
    double: 0,
    deluxe: 0,
  });

  // Xử lý chọn dịch vụ
  function handleServiceToggle(serviceId) {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  }

  // Xử lý chọn phòng
  function handleRoomToggle(roomId) {
    setSelectedRooms((prev) => {
      if (prev.includes(roomId)) {
        return prev.filter((id) => id !== roomId);
      } else {
        return [...prev, roomId];
      }
    });
  }

  // Tính tổng tiền
  function calculateTotal() {
    let total = 0;
    for (const roomId of selectedRooms) {
      const selectedRoomData = rooms.find((room) => room.id === roomId);
      if (selectedRoomData) {
        total += selectedRoomData.price;
      }
    }
    for (let i = 0; i < services.length; i++) {
      if (selectedServices.includes(services[i].id)) {
        total += services[i].price;
      }
    }
    return new Intl.NumberFormat("vi-VN").format(total);
  }

  // Xử lý nút tiếp theo
  function handleNextStep() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  }

  // Xử lý thay đổi textarea
  function handleTextAreaChange(e) {
    const text = e.target.value;
    setAdditionalInfo(text);
    setRemainingChars(500 - text.length);
  }

  // Xử lý chuyển ảnh
  function handlePrevImage(roomId) {
    setCurrentImageIndices((prev) => {
      const room = rooms.find((r) => r.id === roomId);
      if (!room) return prev;
      const currentIndex = prev[roomId];
      const newIndex = currentIndex === 0 ? room.images.length - 1 : currentIndex - 1;
      return { ...prev, [roomId]: newIndex };
    });
  }

  function handleNextImage(roomId) {
    setCurrentImageIndices((prev) => {
      const room = rooms.find((r) => r.id === roomId);
      if (!room) return prev;
      const currentIndex = prev[roomId];
      const newIndex = currentIndex === room.images.length - 1 ? 0 : currentIndex + 1;
      return { ...prev, [roomId]: newIndex };
    });
  }

  function handleDotClick(roomId, index) {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [roomId]: index,
    }));
  }

  // Render bước 1
  function renderStep1() {
    return (
      <div className="step-container">
        <h1 className="page-title">Chọn phòng</h1>
        <p className="page-subtitle">
          <strong>Tự tin đặt phòng:</strong> bạn đang trên trang web của khách sạn.
        </p>

        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="room-header">
              <h2>{room.name}</h2>
            </div>

            <div className="room-image-container">
              <div className="image-slider">
                {room.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${room.name} ${index + 1}`}
                    className={`room-image ${index === currentImageIndices[room.id] ? "active" : ""}`}
                  />
                ))}
              </div>
              <div className="navigation-buttons">
                <button className="nav-button prev" onClick={() => handlePrevImage(room.id)}>
                  <span>❮</span>
                </button>
                <button className="nav-button next" onClick={() => handleNextImage(room.id)}>
                  <span>❯</span>
                </button>
              </div>
              <div className="image-dots">
                {room.images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImageIndices[room.id] ? "active" : ""}`}
                    onClick={() => handleDotClick(room.id, index)}
                  ></span>
                ))}
              </div>
            </div>

            <div className="room-info-bar">
              <div className="bed-info">
                <span className="bed-icon">🛏️</span>
                <span>{room.bedType}</span>
              </div>
              <div className="more-info">
                <span>Thông tin và hình ảnh phòng</span>
              </div>
            </div>

            <div className="room-details">
              <div className="room-details-left">
                <h3 className="room-name">{room.title}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-features">
                  {room.features.map((feature, index) => (
                    <div className="feature" key={index}>
                      <span className="feature-icon">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="room-details-right">
                <div className="room-capacity">
                  <span>{room.capacity}</span>
                </div>
                <div className="room-price">
                  <span>{room.priceText}</span>
                </div>
                <button
                  className={`apply-button ${selectedRooms.includes(room.id) ? "selected" : ""}`}
                  onClick={() => handleRoomToggle(room.id)}
                >
                  {selectedRooms.includes(room.id) ? "ĐÃ CHỌN" : "ÁP DỤNG"}
                </button>
              </div>
            </div>
            <div className="tax-info">Bao gồm thuế VAT / thuế tiêu thụ</div>
          </div>
        ))}
      </div>
    );
  }

  // Render bước 2
  function renderStep2() {
    return (
      <div className="step-container">
        <h1 className="page-title">Chọn dịch vụ thêm cho kỳ nghỉ của bạn</h1>
        <p className="page-subtitle">
          <strong>Tự tin đặt phòng:</strong> bạn đang trên trang web của khách sạn.
        </p>

        <div className="section-header">
          <h2>Dịch vụ thêm cho kỳ nghỉ của bạn</h2>
        </div>

        <div className="service-item">
          <div className="service-image">
            <img src="./Img_User/Img_Service_1.png" alt="Đưa đón sân bay một chiều" className="service-img" />
          </div>
          <div className="service-details">
            <h3 className="service-title">Đưa đón sân bay một chiều</h3>
            <button className="service-detail-btn">Chi tiết ▸</button>
            <p className="service-price">
              1.000.000 VND <span className="price-note">(1.000.000 VND mỗi phòng)</span>
            </p>
            <p className="service-tax">Bao gồm thuế VAT / thuế tiêu thụ</p>
          </div>
          <div className="service-action">
            <div className="checkbox-container">
              <span className="checkbox-label">Chọn</span>
              <div
                className={`checkbox ${selectedServices.includes("one-way") ? "checked" : ""}`}
                onClick={() => handleServiceToggle("one-way")}
              ></div>
            </div>
          </div>
        </div>

        <div className="service-item">
          <div className="service-image">
            <img src="./Img_User/Img_Service_2.png" alt="Đưa đón sân bay hai chiều" className="service-img" />
          </div>
          <div className="service-details">
            <h3 className="service-title">Đưa đón sân bay hai chiều</h3>
            <button className="service-detail-btn">Chi tiết ▸</button>
            <p className="service-price">
              2.000.000 VND <span className="price-note">(2.000.000 VND mỗi phòng)</span>
            </p>
            <p className="service-tax">Bao gồm thuế VAT / thuế tiêu thụ</p>
          </div>
          <div className="service-action">
            <div className="checkbox-container">
              <span className="checkbox-label">Chọn</span>
              <div
                className={`checkbox ${selectedServices.includes("two-way") ? "checked" : ""}`}
                onClick={() => handleServiceToggle("two-way")}
              ></div>
            </div>
          </div>
        </div>

        <div className="section-header">
          <h2>Dịch vụ thêm cho kỳ nghỉ của bạn</h2>
        </div>

        <div className="additional-info">
          <p>Vui lòng cung cấp thêm thông tin: thời gian đến, số thích ăn uống, số thể thành viên...</p>
          <textarea
            className="info-textarea"
            value={additionalInfo}
            onChange={handleTextAreaChange}
            maxLength={500}
          />
          <div className="char-count">{remainingChars}/500</div>
          <p className="info-note">
            Yêu cầu đặc biệt của quý khách sẽ được xem xét cẩn thận, chúng tôi sẽ cố gắng để đáp ứng các yêu cầu đặc
            biệt của quý khách.
          </p>
        </div>
      </div>
    );
  }

  // Render bước 3
  function renderStep3() {
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };

    const handleBookNow = () => {
      setIsModalOpen(true); // Mở modal khi nhấn nút
    };

    return (
      <div className="step-container">
        <h1 className="page-title">Kết thúc kỳ nghỉ của bạn</h1>
        <p className="page-subtitle">
          <strong>Tự tin đặt phòng:</strong> bạn đang trên trang web của khách sạn.
        </p>

        <div className="section-header booking-dates">
          <h2>Đặt phòng của bạn - từ 16 Tháng Tư 2025 đến 18 Tháng Tư 2025</h2>
        </div>

        <div className="hotel-info">
          <h3 className="hotel-name">Debug Hotel</h3>

          <div className="hotel-details">
            <div className="hotel-details-column">
              <div className="hotel-detail-item">
                <div className="detail-label">Địa chỉ :</div>
                <div className="detail-value">Vũng Tàu</div>
              </div>

              <div className="hotel-detail-item">
                <div className="detail-label">Nhận phòng từ :</div>
                <div className="detail-value">2:00 CH</div>
              </div>

              <div className="hotel-detail-item">
                <div className="detail-label">Trả phòng trước :</div>
                <div className="detail-value">12:00 CH</div>
              </div>

              <div className="hotel-detail-item">
                <div className="detail-label">Liên hệ :</div>
                <div className="detail-value">+84 1113060704</div>
              </div>
            </div>

            <div className="hotel-details-column">
              <div className="hotel-detail-item">
                <div className="detail-label">Lễ tân : </div>
                <div className="detail-value">Họat động 24/24</div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          {rooms
            .filter((room) => selectedRooms.includes(room.id))
            .map((room, index) => (
              <div className="room-summary" key={room.id}>
                <div className="room-summary-header">
                  <div className="room-summary-title">Phòng {index + 1}</div>
                  <div className="room-summary-price">{room.priceText}</div>
                </div>

                <div className="room-summary-details">
                  <div className="room-summary-description">
                    <div className="room-type">{room.title}</div>
                    <div className="room-capacity">{room.capacity}</div>
                    <div className="room-features">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="room-feature">
                          <span className="feature-icon">{feature.icon}</span>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="room-summary-amenities">
                    <div className="amenity-badge">
                      <span className="amenity-icon">✓</span>
                      <span>Xuất sắc</span>
                    </div>
                    <div className="amenity-text">Bao gồm bữa sáng</div>
                  </div>
                </div>
              </div>
            ))}

          <div className="discount-row">
            <div className="discount-label">Tổng giảm giá được áp dụng</div>
            <div className="discount-value">0 VND</div>
          </div>

          <div className="total-row main-total">
            <div className="total-label">Tổng</div>
            <div className="total-value">
              {formatPrice(
                rooms
                  .filter((room) => selectedRooms.includes(room.id))
                  .reduce((total, room) => total + room.price, 0) +
                  services
                    .filter((service) => selectedServices.includes(service.id))
                    .reduce((total, service) => total + service.price, 0)
              )}{" "}
              VND
            </div>
          </div>

          <div className="tax-rows">
            <div className="tax-row">
              <div className="tax-label">Bao gồm: Phí dịch vụ</div>
              <div className="tax-value">0 VND</div>
            </div>
            <div className="tax-row">
              <div className="tax-label">Bao gồm: Thuế VAT / Thuế tiêu thụ</div>
              <div className="tax-value">0 VND</div>
            </div>
          </div>
        </div>

        <div className="customer-info">
          <h3 className="section-title">Thông tin khách hàng</h3>

          <div className="form-group">
            <label htmlFor="fullName">Họ và tên:</label>
            <input type="text" id="fullName" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại:</label>
            <input type="text" id="phone" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="idCard">CCCD:</label>
            <input type="text" id="idCard" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Địa chỉ:</label>
            <input type="text" id="address" className="form-control" />
          </div>
        </div>

        <div className="special-requests">
          <h3 className="section-title">Yêu cầu đặc biệt</h3>
          <p className="request-note">
            Vui lòng cung cấp thêm thông tin: thời gian đến, sở thích ăn uống, số thể thành viên...
          </p>
          <textarea
            className="request-textarea"
            value={additionalInfo}
            onChange={handleTextAreaChange}
            maxLength={500}
          ></textarea>
          <p className="char-count">{remainingChars}/500</p>
          <p className="request-disclaimer">
            Yêu cầu đặc biệt của quý khách sẽ được xem xét cẩn thận, chúng tôi sẽ cố gắng để đáp ứng các yêu cầu đặc
            biệt của quý khách.
          </p>
        </div>

        <div className="terms-conditions">
          <p className="terms-text">
            Tôi đồng ý với các điều khoản đặt phòng và chính sách của Debug Hotel. Khi nhấn nút Đặt ngay, tôi đồng ý
            với:
          </p>
          <div className="terms-checkbox">
            <input type="checkbox" id="termsAgree" />
            <label htmlFor="termsAgree">
              Tôi đã đọc các{" "}
              <a href="#" className="terms-link">
                điều khoản và điều kiện
              </a>{" "}
              và{" "}
              <a href="#" className="terms-link">
                chính sách bảo mật
              </a>
              , và tôi xác nhận đã hiểu và chấp nhận các điều khoản này.
            </label>
          </div>
        </div>

        <button className="book-now-button" onClick={handleBookNow}>
          ĐẶT NGAY
        </button>

        <p className="booking-disclaimer">
          Debug Hotel Rất thấp đỏ khi quý vị đặt phòng của quý vị. Để biết thêm thông tin về chính sách ý dịch vụ của
          nhà và để thực hiện các thay đổi cho việc đặt phòng của quý vị, vui lòng liên hệ trực tiếp với chúng tôi.
        </p>
      </div>
    );
  }

  // Render sidebar
  function renderSidebar() {
    return (
      <div className="sidebar-card">
        <div className="sidebar-header">
          {currentStep === 1
            ? `Chọn phòng (${selectedRooms.length})`
            : currentStep === 2
            ? "Chọn dịch vụ thêm"
            : "Xác nhận đặt phòng"}
        </div>

        <div className="sidebar-content">
          <div className="total-row">
            <span>Tổng</span>
            <span>{calculateTotal()} VND</span>
          </div>
        </div>

        <button className="next-button" onClick={handleNextStep}>
          KẾ TIẾP
        </button>

        <div className="rating-container">
          <div className="rating-badge">4.5</div>
          <div>
            <div className="rating-text">Xuất sắc</div>
            <div className="rating-stars">
              ★★★★★ <span>790 đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render chính
  return (
    <>
      <div className="booking-container">
        <HeaderBookingRoom currentStep={currentStep} onStepChange={setCurrentStep} />

        <div className="booking-content">
          <div className="booking-main">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </div>

          {currentStep !== 3 && <div className="booking-sidebar">{renderSidebar()}</div>}
        </div>
      </div>
      <FooterUser />
      {isModalOpen && <Notification_BookingRoom onClose={() => setIsModalOpen(false)} />}
    </>
  );
}