import React, { useState } from "react";
import "./Product.css";

export default function Products() {
  const categories = [
    { id: "all", name: "Tüm Ürünler" },
    { id: "Bilgisayar Ürünleri", name: "Bilgisayar Ürünleri" },
    { id: "Güvenlik Ürünleri", name: "Güvenlik Ürünleri" },
  ];
  const allProducts = [
    {
      id: 1,
      name: "Laptop",
      category: "Bilgisayar Ürünleri",
      img: "",
    },
    {
      id: 2,
      name: "FortiSIEM",
      category: "Güvenlik Ürünleri",
      img: "",
    },
    {
      id: 3,
      name: "Kulaklık",
      category: "Bilgisayar Ürünleri",
      img: "",
    },
    {
      id: 4,
      name: "Splunk Enterprise Security",
      category: "Güvenlik Ürünleri",
      img: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  // Kategoriye göre filtreleme
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="container">
      <h2>Ürün Listesi</h2>

      {/* Kategori Seçimi */}
      <div className="form-group">
        <label htmlFor="category">Kategori Seçin:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Ürün Listesi */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
