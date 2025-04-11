import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Ergonomics() {
  const [products, setProducts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Kategori eşlemesi: API'de gelen "categoryId" 7 → Sandalye, 8 → Klavye, 9 → Kulaklık
  const categoryMapping = {
    7: "Sandalye",
    8: "Klavye",
    9: "Kulaklık",
  };

  useEffect(() => {
    fetch("https://localhost:7191/api/ComputerProducts")
      .then((res) => res.json())
      .then((data) => {
        // Gelen ürünler düz liste halinde geliyor, sadece ergonomik ürünleri (categoryId: 7, 8, 9) filtrele
        const ergonomicProducts = data.filter((item) =>
          [7, 8, 9].includes(item.categoryId)
        );
        // Ürünleri kategori adlarına göre gruplama
        const grouped = {};
        ergonomicProducts.forEach((item) => {
          const category = categoryMapping[item.categoryId] || "Diğer";
          if (!grouped[category]) {
            grouped[category] = [];
          }
          grouped[category].push(item);
        });
        console.log("Gruplanmış veri:", grouped);
        setProducts(grouped);
      })
      .catch((error) => console.error("API hatası:", error));
  }, []);

  // Kart yapısını AxCrypt'e benzer şekilde düzenleyelim; buradaki alanlar tamamen JSON verisinden geliyor.
  const renderCard = (product) => (
    <div
      className="card text-center mt-3"
      style={{
        width: "250px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <h5 className="card-title">{product.name}</h5>
      <p>
        <strong>Marka:</strong> {product.brand}
      </p>
      <p>
        <strong>Model:</strong> {product.model}
      </p>
      {product.ram && (
        <p>
          <strong>RAM:</strong> {product.ram}
        </p>
      )}
      <Link
        to={`/product/${product.computerProductId}`}
        className="btn btn-primary"
      >
        Ürün Seç
      </Link>
    </div>
  );

  return (
    <div className="container">
      {/* Dinamik Kategori Butonları */}
      <div
        className="grid-container mb-4"
        style={{ display: "flex", gap: "10px", justifyContent: "center" }}
      >
        {Object.keys(products).map((category) => (
          <button
            key={category}
            type="button"
            className="itworker-btn itworker-btn-dark me-2"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Seçilen Kategoriye Göre Ürün Kartları */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {selectedCategory &&
          products[selectedCategory]?.map((product) => (
            <div key={product.computerProductId}>{renderCard(product)}</div>
          ))}
      </div>

      {/* Henüz kategori seçilmediyse mesaj */}
      {!selectedCategory && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>Lütfen bir kategori seçiniz.</p>
        </div>
      )}
    </div>
  );
}

export default Ergonomics;
