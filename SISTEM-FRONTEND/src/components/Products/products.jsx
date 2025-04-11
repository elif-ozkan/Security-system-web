import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const categories = [
    { id: "all", name: "Tüm Ürünler" },
    { id: "Bilgisayar Ürünleri", name: "Bilgisayar Ürünleri" },
    { id: "Güvenlik Ürünleri", name: "Güvenlik Ürünleri" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "";

        if (selectedCategory === "Bilgisayar Ürünleri") {
          url = "https://localhost:7191/api/ComputerProducts";
          const response = await axios.get(url);
          setProducts(response.data);
        } else if (selectedCategory === "Güvenlik Ürünleri") {
          url = "https://localhost:7191/api/SecurityProduct";
          const response = await axios.get(url);
          setProducts(response.data);
        } else {
          // Tüm ürünler için her iki API'den veriyi çek
          const [compRes, secRes] = await Promise.all([
            axios.get("https://localhost:7191/api/ComputerProducts"),
            axios.get("https://localhost:7191/api/SecurityProduct"),
          ]);
          setProducts([...compRes.data, ...secRes.data]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Ürünler alınamadı:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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
        {loading ? (
          <p>Yükleniyor...</p>
        ) : products.length === 0 ? (
          <p>Ürün bulunamadı.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <Link
                to={`/product/${product.id}`}
                className="product-card"
                key={product.id}
              >
                <img
                  src={product.img || "path_to_default_image.jpg"}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
