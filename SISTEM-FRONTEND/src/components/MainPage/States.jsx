import React from "react";
export default function States() {
  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2>Siber Güvenlik İstatistikleri</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <div>
          <h3>500M+</h3>
          <p>Siber Saldırı</p>
        </div>
        <div>
          <h3>98%</h3>
          <p>Veri Koruma Başarı Oranı</p>
        </div>
        <div>
          <h3>2000+</h3>
          <p>Tehdit Tespiti</p>
        </div>
      </div>
    </section>
  );
}
