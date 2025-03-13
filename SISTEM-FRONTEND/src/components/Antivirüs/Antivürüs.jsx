import React from "react";
import "./Antivirüs.css"; // CSS dosyasını dahil edin

export default function Antivirüs() {
  return (
    <div
      className="container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Antivirüs Başlık */}
      <div
        style={{
          textAlign: "center",
          margin: "10px 0",
          marginTop: "40px",
        }}
      >
        <button
          type="button"
          style={{
            backgroundColor: "#343a40",
            color: "white",
            padding: "15px 30px",
            border: "none",
            borderRadius: "8px" /* Daha yuvarlak köşeler */,
            fontSize: "18px" /* Font boyutunu biraz büyüttük */,
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-block",
            marginTop: "40px" /* Üst marjı biraz daha uygun hale getirdik */,
            transition:
              "background-color 0.3s ease, transform 0.2s ease" /* Hover efektleri için geçiş */,
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1)" /* Butona hafif gölge ekledik */,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              "#23272b"; /* Hover renk değişimi */
            e.target.style.transform =
              "scale(1.05)"; /* Hover ile buton büyütme */
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor =
              "#343a40"; /* Hover sonrası eski rengi geri döndürme */
            e.target.style.transform =
              "scale(1)"; /* Hover sonrası eski boyuta geri dönme */
          }}
        >
          Antivirüs Nedir Neden Kullanılır?
        </button>
      </div>

      {/* Antivirüs İçerik */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
            margin: "0",
          }}
        >
          Antivirüs, bilgisayarlar, telefonlar ve diğer dijital cihazları kötü
          amaçlı yazılımlardan (virüsler, trojanlar, casus yazılımlar, fidye
          yazılımları vb.) koruyan bir güvenlik yazılımıdır. Temel amacı,
          zararlı yazılımları tespit etmek, engellemek ve temizlemektir. Zararlı
          yazılımların cihazınıza bulaşmasını önler.
        </p>
      </div>

      {/* Kartlar Bölümü */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div style={{ flex: "0 0 48%", marginBottom: "20px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#343a40",
                  marginBottom: "15px",
                }}
              >
                Ürün 1
              </h5>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                Ürün 1 ile ilgili detaylar
              </p>
              <a
                href="#"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Detaylar
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: "0 0 48%", marginBottom: "20px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#343a40",
                  marginBottom: "15px",
                }}
              >
                Ürün 2
              </h5>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                Ürün 2 ile ilgili detaylar
              </p>
              <a
                href="#"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Detaylar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* VPN Başlık */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          type="button"
          style={{
            backgroundColor: "#343a40",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          VPN Nedir Neden Kullanılır?
        </button>
      </div>

      {/* VPN İçerik */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
            margin: "0",
          }}
        >
          VPN (Virtual Private Network - Sanal Özel Ağ), internet trafiğinizi
          şifreleyerek sizi daha güvenli hale getiren bir teknolojidir. VPN,
          cihazınızla hedef sunucu arasında güvenli bir tünel oluşturur ve
          böylece internet üzerindeki etkinlikleriniz gizlenir. İnternet Servis
          Sağlayıcınız (ISP), devlet kurumları veya üçüncü taraflar tarayıcı
          geçmişinizi göremez.
        </p>
      </div>

      {/* VPN Kartları */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div style={{ flex: "0 0 48%", marginBottom: "20px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#343a40",
                  marginBottom: "15px",
                }}
              >
                VPN Ürün 1
              </h5>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                VPN Ürün 1 ile ilgili detaylar
              </p>
              <a
                href="#"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Detaylar
              </a>
            </div>
          </div>
        </div>
        <div style={{ flex: "0 0 48%", marginBottom: "20px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              height: "100%",
            }}
          >
            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#343a40",
                  marginBottom: "15px",
                }}
              >
                VPN Ürün 2
              </h5>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                VPN Ürün 2 ile ilgili detaylar
              </p>
              <a
                href="#"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Detaylar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
