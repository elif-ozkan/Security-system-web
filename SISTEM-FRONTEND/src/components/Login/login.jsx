import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault(); // Formun sayfayı yeniden yüklemesini engelliyoruz

    try {
      // Kullanıcı adı ve şifre ile API'ye giriş isteği
      const response = await axios.post("", {
        username,
        password,
      });

      const user = response.data; // API'den gelen kullanıcı verisi

      // Kullanıcı verisini localStorage'a kaydediyoruz
      localStorage.setItem("userId", user.id);

      // Kullanıcının rolüne göre yönlendirme işlemi
      if (user.role === "IT Çalışanıyım") {
        navigate("/Itworker"); // IT ürünleri sayfasına yönlendirme
      } else if (user.role === "IT Çalışanı Değilim") {
        navigate("/Nıtworker"); // Normal kullanıcı sayfasına yönlendirme
      }
    } catch (error) {
      setError("Başarısız giriş. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "22rem" }}>
        <h2 className="text-center mb-4">Login</h2>

        {/* Kullanıcı Adı Alanı */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter your username"
          />
        </div>

        {/* Şifre Alanı */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Giriş Butonu */}
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>

        {/* Kayıt Ol Butonu */}
        <Link to="/createaccount">
          <button className="btn btn-secondary w-100 mt-2">
            Create Account
          </button>
        </Link>

        {/* Yardım Alanı */}
        <div className="alert alert-info mt-3 text-center">
          <strong>Need help?</strong> Contact support for assistance.
        </div>
      </div>
    </div>
  );
}
