import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Login/Navbar";

export default function ITWorker() {
  return (
    <>
      <Navbar />
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 60px); /* Navbar yüksekliğini hesaba katar */
          }

          .btn-group {
            display: flex;
            flex-direction: column;
            gap: 30px; /* Butonlar arasındaki mesafeyi artırdım */
          }

          /* ITWorker bileşeni için butonlar */
          .itworker-btn {
            font-size: 22px; 
            padding: 20px 40px; 
            border-radius: 15px; 
            width: 280px; 
            transition: background-color 0.3s, transform 0.2s;
          }

          .itworker-btn:hover {
            background-color: #343a40; 
            transform: scale(1.1); /* Hoverda buton biraz büyüsün */
          }

          .itworker-btn-dark {
            background-color: #343a40;
            color: white;
            border: none;
          }

          .itworker-btn-dark:hover {
            background-color: #343a40; 
          }
        `}
      </style>
      <div className="container">
        <div className="btn btn-group">
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link to="/ITWorker/NetworkSecurity">Ağ Güvenliği Ürünleri</Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/ITWorker/IDS"
              style={{ textDecoration: "none", color: "white" }}
            >
              IDS/IPS Ürünleri
            </Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/ITWorker/dataproduct"
              style={{ textDecoration: "none", color: "white" }}
            >
              Veri Şifreleme Ürünleri
            </Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/ITWorker/questıons"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sıkça Sorulan Sorular
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
