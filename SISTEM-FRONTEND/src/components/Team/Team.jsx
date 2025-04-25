import React from "react";
import "./Ekibimiz.css"; // CSS dosyasını import ediyoruz
import Navbar from "../Login/Navbar";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="ekibimiz-container">
        <h2 className="ekibimiz-heading">Ekibimiz</h2>
        <p style={{ fontSize: "1.8rem" }}>
          Alanında uzman ekibimizle sizi en iyi şekilde korumak için buradayız.
        </p>

        <div className="card-container">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Founder&Ceo</h5>
              <p className="card-text">Elif Özkan</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Network Security Team Lead</h5>
              <p className="card-text">Azra Zorlu</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Purple Team Lead</h5>
              <p className="card-text">Melike Alkan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
