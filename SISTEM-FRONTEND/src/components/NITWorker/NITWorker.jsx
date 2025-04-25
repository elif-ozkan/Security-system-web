import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Login/Navbar";

export default function NITWorker() {
  const navigate = useNavigate();

  const handleViewOnUserPage = (productId) => {
    const userId = localStorage.getItem("userId");
    navigate(`/user/${userId}/${productId}`);
  };

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
            flex-direction: column;
            align-items: center;
            gap: 40px;
            padding-top: 40px;
          }

          .btn-group {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .itworker-btn {
            font-size: 22px;
            padding: 20px 40px;
            border-radius: 15px;
            width: 280px;
            transition: background-color 0.3s, transform 0.2s;
          }

          .itworker-btn:hover {
            background-color: #343a40;
            transform: scale(1.1);
          }

          .itworker-btn-dark {
            background-color: #343a40;
            color: white;
            border: none;
          }

          .itworker-btn-dark:hover {
            background-color: #343a40;
          }

          .card-btn {
            margin-top: 10px;
          }
        `}
      </style>

      <div className="container">
        <div className="btn btn-group">
          {/* Ergonomik */}
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/NITWorker/ergonomıc"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ergonomik Çözümler
            </Link>
          </button>
          <button
            className="btn btn-secondary card-btn"
            onClick={() => handleViewOnUserPage(1)} // 1 numaralı ürün ID’si varsayıldı
          >
            Sayfamda Görüntüle
          </button>

          {/* Depolama */}
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/storage"
              style={{ textDecoration: "none", color: "white" }}
            >
              Depolama Ürünlerimizi İnceleyin
            </Link>
          </button>
          <button
            className="btn btn-secondary card-btn"
            onClick={() => handleViewOnUserPage(2)} // 2 numaralı ürün ID’si
          >
            Sayfamda Görüntüle
          </button>

          {/* Antivirüs */}
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/Nıtworker/Antıvırus"
              style={{ textDecoration: "none", color: "white" }}
            >
              Antivirüs/VPN Ürünleri
            </Link>
          </button>
          <button
            className="btn btn-secondary card-btn"
            onClick={() => handleViewOnUserPage(3)} // 3 numaralı ürün ID’si
          >
            Sayfamda Görüntüle
          </button>

          {/* Directory */}
          <button type="button" className="itworker-btn itworker-btn-dark">
            <Link
              to="/Nıtworker/dırectory"
              style={{ textDecoration: "none", color: "white" }}
            >
              Ne Kadar Güvendesiniz
            </Link>
          </button>
          <button
            className="btn btn-secondary card-btn"
            onClick={() => handleViewOnUserPage(4)} // 4 numaralı ürün ID’si
          >
            Sayfamda Görüntüle
          </button>
        </div>
      </div>
    </>
  );
}
