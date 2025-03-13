import React from "react";

export default function Blog() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#fff",
          padding: "20px 30px",
          textAlign: "center",
          marginTop: "-60px",
        }}
      >
        <h2 style={{ marginTop: "-30px" }}>Siber Güvenlik Blogu</h2>
        <p>
          En son güvenlik tehditleri ve çözümler hakkında yazılarımızı keşfedin.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <div style={{ width: "30%" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1797/1797500.png"
              alt="Blog Post"
              style={{ width: "30%", height: "auto" }}
            />
            <h3>Güvenlik İhlalleri ve Sonuçları</h3>
            <p>
              Günümüzde en çok karşılaşılan güvenlik ihlalleri ve bunlardan
              korunma yöntemleri hakkında bilgi edinin.
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1797/1797500.png"
              alt="Blog Post"
              style={{ width: "30%", height: "auto" }}
            />
            <h3>Gelişmiş Tehdit Savunma Yöntemleri</h3>
            <p>
              Şirketlerin kullanabileceği ileri düzey tehdit tespit ve engelleme
              stratejilerini keşfedin.
            </p>
          </div>
          <div style={{ width: "30%" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1797/1797500.png"
              alt="Blog Post"
              style={{ width: "30%", height: "auto" }}
            />
            <h3>Yapay Zeka ve Siber Güvenlik</h3>
            <p>
              Yapay zekanın siber güvenlik alanındaki rolünü inceleyin ve nasıl
              korunabileceğiniz hakkında bilgi sahibi olun.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
