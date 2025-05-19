import { useState } from "react"
import "../Components_Css/RegisterUser.css";

function RegisterUser() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Registration attempt with:", { username, password, displayName, email, phoneNumber })
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h1 className="register-title">ĐĂNG KÝ</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên tài khoản</label>
            <input
              id="username"
              type="text"
              placeholder="Nhập tên tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="password-input-container">
              <input
                id="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="displayName">Tên hiển thị</label>
            <input
              id="displayName"
              type="text"
              placeholder="Nhập tên hiển thị"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Số điện thoại di động</label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Nhập số điện thoại"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Đăng ký
          </button>
        </form>

        <div className="login-text">
          <p>
            Bạn đã có tài khoản.{" "}
            <a href="/LoginUser" className="login-link">
              Đăng nhập ngay
            </a>
            .
          </p>
        </div>

        <div className="terms-text">
          <p>
            Bằng cách tiếp tục, bạn đồng ý với{" "}
            <a href="#" className="terms-link">
              Điều khoản và Điều kiện
            </a>{" "}
            này và bạn đã được thông báo về{" "}
            <a href="#" className="terms-link">
              Chính sách bảo vệ dữ liệu
            </a>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterUser
