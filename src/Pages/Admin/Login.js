import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Design_Css/Admin/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/Dashboard'); 
  };

  return (
    <div className="login-container">
      <div className="logo">
        <span>Debug Team</span>
      </div>
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="button login">
          <button type="submit">Đăng Nhập</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;