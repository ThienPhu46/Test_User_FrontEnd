import { useState } from "react"
import "../Components_Css/LoginUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginUser() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    // Basic validation
    if (!username || !password) {
      setError("Vui lòng nhập tên tài khoản và mật khẩu")
      return
    }

    setIsLoading(true)
    
    try {
      const response = await axios.post("http://localhost:5282/api/auth/login", {
        TenTaiKhoan: username,
        MatKhau: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.success) {
        // Save tokens to localStorage or context
        localStorage.setItem("accessToken", response.data.data.AccessToken)
        localStorage.setItem("refreshToken", response.data.data.RefreshToken)
        localStorage.setItem("user", JSON.stringify(response.data.data))
        
        // Redirect to home page
        navigate("/HomeLoggedIn");
      } else {
        setError(response.data.message || "Đăng nhập thất bại")
      }
    } catch (err) {
      // Handle different error cases
      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 401) {
          setError("Tên đăng nhập hoặc mật khẩu không đúng")
        } else if (err.response.status === 403) {
          setError("Tài khoản chưa được kích hoạt. Vui lòng xác minh OTP.")
        } else {
          setError(err.response.data?.message || "Đã xảy ra lỗi khi đăng nhập")
        }
      } else if (err.request) {
        // The request was made but no response was received
        setError("Không thể kết nối đến máy chủ")
      } else {
        // Something happened in setting up the request
        setError("Đã xảy ra lỗi khi thiết lập yêu cầu")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="login-title">ĐĂNG NHẬP</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên tài khoản</label>
            <input
              id="username"
              type="text"
              placeholder="Nhập tên tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showPassword ? (
                  <span className="eye-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                      <line x1="2" x2="22" y1="2" y2="22"></line>
                    </svg>
                  </span>
                ) : (
                  <span className="eye-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="login-button" 
            disabled={isLoading}
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>

          {/* Hiển thị thông báo lỗi dưới button đăng nhập */}
          {error && (
            <div className="error-message" style={{
              color: 'red',
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '14px'
            }}>
              {error}
            </div>
          )}
        </form>

        <div className="register-text">
          <p>
            Bạn chưa có tài khoản?{" "}
            <a href="RegisterUser" className="register-link">
              Đăng kí ngay
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

export default LoginUser