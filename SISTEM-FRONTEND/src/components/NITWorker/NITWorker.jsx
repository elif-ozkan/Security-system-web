import React from "react";
import { Link } from "react-router-dom";

export default function NITWorker() {
  return (
    <>
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
            <Link
              to="/NITWorker/ergonomıc"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ergonomik Çözümler
            </Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/storage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Depolama Ürünlerimizi İnceleyin
            </Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/Nıtworker/Antıvırus"
              style={{ textDecoration: "none", color: "white" }}
            >
              Antivirüs/VPN Ürünleri
            </Link>
          </button>
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/Nıtworker/dırectory"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ne Kadar Güvendesiniz
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
