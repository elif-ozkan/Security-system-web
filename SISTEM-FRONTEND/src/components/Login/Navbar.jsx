import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("user name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user name");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    setUsername(null);
    navigate("/"); // Ana sayfaya yönlendir
  };

  const goToUserProfile = () => {
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");

    if (userId) {
      if (userRole) {
        // Rol seçilmişse, rol sayfasına yönlendir (ITWorker, Nıtworker veya guestpage)
        if (userRole === "it_staff") {
          navigate("/ITWorker");
        } else if (userRole === "guest_user") {
          navigate("/guestpage");
        } else {
          navigate("/Nıtworker");
        }
      } else {
        // Rol seçilmemişse Choose sayfasına yönlendir
        navigate("/choose");
      }
    } else {
      // Giriş yapmamışsa login sayfasına yönlendir
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">CyberXpert</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/team">Ekibimiz</Link>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
        <li>
          <Link to="/about">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/products">Ürünlerimiz</Link>
        </li>
      </ul>

      <div className="user-section">
        {username ? (
          <div className="user-controls">
            <span
              className="username"
              onClick={goToUserProfile}
              style={{ cursor: "pointer" }}
            >
              {username}
            </span>
            <button onClick={handleLogout} className="logout-button">
              Çıkış Yap
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-button">
            Giriş Yap
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
