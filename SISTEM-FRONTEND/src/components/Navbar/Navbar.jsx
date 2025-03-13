import React from "react";
import "./Navbar.css"; // Navbar'ı stilize etmek için CSS dosyası
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>CyberXpert</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link to="/Team">Ekibimiz</Link>
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
      <div className="navbar-contact">
        <button className="btn btn-light" type="button">
          <Link to="/choose">Giriş Yap</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
