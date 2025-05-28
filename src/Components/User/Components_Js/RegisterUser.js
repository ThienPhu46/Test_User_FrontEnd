import { useState } from "react";
import "../Components_Css/RegisterUser.css";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [accountId, setAccountId] = useState(null);
  const [savedEmail, setSavedEmail] = useState("");

  const apiBaseUrl = "http://localhost:5282/api/auth";

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const validateUsername = async (username) => {
    if (!username) {
      setUsernameError("Tên tài khoản không được để trống");
      return false;
    }

    try {
      const response = await fetch(`http://localhost:5282/api/accounts/validate/username/${encodeURIComponent(username)}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const result = await response.json();
      console.log("Validate username response:", result);
      if (!result.hasOwnProperty("data")) {
        throw new Error("Response không đúng định dạng: thiếu trường 'data'");
      }
      if (result.data) {
        setUsernameError("Tên tài khoản đã tồn tại");
        return false;
      }
      setUsernameError("");
      return true;
    } catch (error) {
      console.error("Lỗi validate username:", error);
      setUsernameError(`Lỗi khi kiểm tra tên tài khoản: ${error.message}`);
      return false;
    }
  };

  const validateEmail = async (email) => {
    if (!email || !isValidEmail(email)) {
      setEmailError("Email không hợp lệ");
      return false;
    }

    try {
      const response = await fetch(`http://localhost:5282/api/accounts/validate/email/${encodeURIComponent(email)}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const result = await response.json();
      console.log("Validate email response:", result);
      if (!result.hasOwnProperty("data")) {
        throw new Error("Response không đúng định dạng: thiếu trường 'data'");
      }
      if (result.data) {
        setEmailError("Email đã tồn tại");
        return false;
      }
      setEmailError("");
      return true;
    } catch (error) {
      console.error("Lỗi validate email:", error);
      setEmailError(`Lỗi khi kiểm tra email: ${error.message}`);
      return false;
    }
  };

  const validatePassword = (password) => {
    if (!isValidPassword(password)) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validatePhone = (phone) => {
    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Số điện thoại không hợp lệ (phải bắt đầu bằng 0 và có 10 chữ số)");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    const isUsernameValid = await validateUsername(username);
    const isEmailValid = await validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPhoneValid = validatePhone(phoneNumber);

    if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isPhoneValid) {
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        tenTaiKhoan: username,
        matKhau: password,
        tenHienThi: displayName,
        email: email,
        phone: phoneNumber,
        maVaiTro: 1,
      };
      console.log("Sending registration payload:", payload);

      const response = await fetch(`${apiBaseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Registration response:", result);

      if (response.ok) {
        if (result.success && result.data) {
          console.log("Account ID received:", result.data);
          const accountIdValue = Number(result.data);
          if (isNaN(accountIdValue) || accountIdValue <= 0) {
            setError("Mã tài khoản không hợp lệ từ server.");
            setIsLoading(false);
            return;
          }
          setAccountId(accountIdValue);
          setSavedEmail(email);
          setSuccess("Vui lòng kiểm tra email để lấy mã OTP và hoàn tất đăng ký.");
          setShowOtpForm(true);
          setUsername("");
          setPassword("");
          setDisplayName("");
          setEmail("");
          setPhoneNumber("");
        } else {
          setError(result.message || "Không nhận được accountId. Vui lòng thử lại.");
        }
      } else {
        setError(`Đăng ký thất bại: ${result.message || "Không xác định lỗi từ server"} ${result.errors ? JSON.stringify(result.errors) : ""}`);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API đăng ký:", error);
      setError(`Lỗi kết nối đến server: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (!accountId || isNaN(accountId) || accountId <= 0) {
      setError("Mã tài khoản không hợp lệ. Vui lòng thử lại từ đầu.");
      setIsLoading(false);
      return;
    }

    if (!otp || otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setError("Mã OTP phải là 6 chữ số. Vui lòng kiểm tra lại.");
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        MaTaiKhoan: accountId,
        OtpCode: otp.trim(),
      };
      console.log("Sending OTP payload:", payload);

      const response = await fetch(`${apiBaseUrl}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("OTP verification response:", result);

      if (response.ok) {
        setSuccess("Đăng ký thành công! Bạn sẽ được chuyển hướng đến trang đăng nhập.");
        setTimeout(() => {
          window.location.href = "/LoginUser";
        }, 2000);
      } else {
        const errorMessage = result.message || "Không xác định lỗi từ server";
        const errorDetails = result.errors ? ` - Chi tiết: ${JSON.stringify(result.errors)}` : "";
        if (errorMessage.toLowerCase().includes("otp") || errorMessage.toLowerCase().includes("hết hạn")) {
          setError(`Xác thực thất bại: ${errorMessage}${errorDetails}. OTP có thể đã hết hạn (2 phút). Vui lòng nhấn "Gửi lại OTP" để nhận mã mới.`);
        } else {
          setError(`Xác thực thất bại: ${errorMessage}${errorDetails}`);
        }
      }
    } catch (error) {
      console.error("Lỗi khi xác thực OTP:", error);
      setError(`Lỗi kết nối đến server: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (!accountId || isNaN(accountId) || accountId <= 0) {
      setError("Mã tài khoản không hợp lệ. Vui lòng thử lại từ đầu.");
      setIsLoading(false);
      return;
    }

    if (!savedEmail) {
      setError("Không tìm thấy email để gửi lại OTP. Vui lòng thử lại từ đầu.");
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        MaTaiKhoan: accountId,
        Email: savedEmail,
      };
      console.log("Sending resend OTP payload:", payload);

      const response = await fetch(`${apiBaseUrl}/resend-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Resend OTP response:", result);

      if (response.ok) {
        setSuccess("OTP mới đã được gửi đến email!");
      } else {
        const errorMessage = result.message || "Không thể gửi lại OTP";
        const errorDetails = result.errors ? ` - Chi tiết: ${JSON.stringify(result.errors)}` : "";
        setError(`Không thể gửi lại OTP: ${errorMessage}${errorDetails}`);
      }
    } catch (error) {
      console.error("Lỗi khi gửi lại OTP:", error);
      setError(`Lỗi kết nối đến server: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h1 className="register-title">ĐĂNG KÝ</h1>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        {!showOtpForm ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên tài khoản</label>
              <input
                id="username"
                type="text"
                placeholder="Nhập tên tài khoản (ví dụ: thienphu46)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() => validateUsername(username)}
                required
              />
              {usernameError && <span className="error-text">{usernameError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu (ít nhất 6 ký tự)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => validatePassword(password)}
                required
              />
              {passwordError && <span className="error-text">{passwordError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="displayName">Tên hiển thị</label>
              <input
                id="displayName"
                type="text"
                placeholder="Nhập tên hiển thị (ví dụ: Thien Phu)"
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
                placeholder="Nhập email (ví dụ: vuanhu1904@gmail.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
                required
              />
              {emailError && <span className="error-text">{emailError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Số điện thoại di động</label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Nhập số điện thoại (ví dụ: 0865864336)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => validatePhone(phoneNumber)}
                required
              />
              {phoneError && <span className="error-text">{phoneError}</span>}
            </div>

            <button
              type="submit"
              className="register-button"
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý..." : "Đăng ký"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="form-group">
              <label htmlFor="otp">Mã OTP</label>
              <input
                id="otp"
                type="text"
                placeholder="Nhập mã OTP từ email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="register-button"
              disabled={isLoading}
            >
              {isLoading ? "Đang xác thực..." : "Xác thực OTP"}
            </button>
            <button
              type="button"
              className="resend-otp-button"
              onClick={handleResendOtp}
              disabled={isLoading}
            >
              {isLoading ? "Đang gửi lại..." : "Gửi lại OTP"}
            </button>
          </form>
        )}

        {!showOtpForm && (
          <div className="login-text">
            <p>
              Bạn đã có tài khoản.{" "}
              <a href="/LoginUser" className="login-link">
                Đăng nhập ngay
              </a>
              .
            </p>
          </div>
        )}

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
  );
}

export default RegisterUser;