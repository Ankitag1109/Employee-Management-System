import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import idmsLogo from "../assetss/idms_logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8082/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <div className="login-card">
          <img src={idmsLogo} alt="IDMS Logo" className="logo" />
          <p className="subtitle">Welcome to HR Admin Panel</p>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>

            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
