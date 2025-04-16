import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7191/api/ComputerProducts/grouped-by-type") // API endpoint'ini buraya yazın
      .then((response) => {
        // Kategorilere göre ürünleri gruplamak ve sadece categoryId 10 olanları almak
        const filteredProducts = response.data.filter(
          (product) => product.categoryId === 10
        );

        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Veri yüklenirken bir hata oluştu:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Antivirüs ve VPN Açıklamaları */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Antivirüs ve VPN Hakkında
        </h2>

        <div style={{ fontSize: "18px", color: "#555" }}>
          <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "10px" }}>
            Antivirüs Nedir?
          </h3>
          <p>
            Antivirüs yazılımları, bilgisayar sistemlerini ve ağları zararlı
            yazılımlardan (virüsler, truva atları, solucanlar, casus yazılımlar,
            vb.) korumak amacıyla tasarlanmış yazılımlardır. Bu yazılımlar,
            bilgisayarınıza zarar verebilecek ya da kişisel verilerinizi çalmaya
            çalışan kötü amaçlı yazılımları tespit edip temizler. Genellikle,
            antivirüs yazılımları gerçek zamanlı koruma, virüs taramaları ve
            zararlı yazılım analizleri sunar.
          </p>
        </div>

        <div style={{ fontSize: "18px", color: "#555", marginTop: "30px" }}>
          <h3 style={{ fontSize: "24px", color: "#333", marginBottom: "10px" }}>
            VPN (Virtual Private Network) Nedir?
          </h3>
          <p>
            VPN, internet üzerinden güvenli bir bağlantı kurarak verilerinizi
            şifreler ve çevrimiçi gizliliğinizi korur. VPN kullanarak internete
            bağlandığınızda, internet trafiğiniz şifrelenir ve IP adresiniz
            gizlenir. Bu, çevrimiçi etkinliklerinizi anonimleştirir ve
            verilerinizi kötü niyetli üçüncü taraflardan korur. Ayrıca, coğrafi
            kısıtlamaları aşmanıza yardımcı olabilir, çünkü VPN sunucuları
            farklı ülkelerdeki sunuculara bağlanarak coğrafi engelleri bypass
            eder.
          </p>
        </div>
      </section>

      {/* Kategori: 10 Ürün Kartları */}
      <h2
        style={{ textAlign: "center", fontSize: "28px", marginBottom: "30px" }}
      >
        Ürünlerimiz
      </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <div
            key={product.computerProductId}
            style={{
              flex: "0 0 30%",
              margin: "10px",
              boxSizing: "border-box",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 10px 15px rgba(0, 0, 0, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)")
              }
            >
              <div style={{ textAlign: "center" }}>
                <h5
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#343a40",
                    marginBottom: "10px",
                  }}
                >
                  {product.name}
                </h5>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#777",
                    marginBottom: "10px",
                  }}
                >
                  {product.brand} - {product.model}
                </p>
                {product.ram && (
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#777",
                      marginBottom: "15px",
                    }}
                  >
                    RAM: {product.ram}
                  </p>
                )}
                <a
                  href="#"
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007bff")
                  }
                >
                  Detaylar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
