import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Login/Navbar";

export default function Products() {
  const categories = [
    { id: "all", name: "Tüm Ürünler" },
    { id: "Bilgisayar Ürünleri", name: "Bilgisayar Ürünleri" },
    { id: "Güvenlik Ürünleri", name: "Güvenlik Ürünleri" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId") || "1";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        if (selectedCategory === "Bilgisayar Ürünleri") {
          const response = await axios.get(
            "https://localhost:7191/api/ComputerProducts"
          );
          const productsWithType = response.data.map((product) => ({
            ...product,
            productType: "computer",
          }));
          setProducts(productsWithType);
        } else if (selectedCategory === "Güvenlik Ürünleri") {
          const response = await axios.get(
            "https://localhost:7191/api/SecurityProduct"
          );
          const productsWithType = response.data.map((product) => ({
            ...product,
            productType: "security",
          }));
          setProducts(productsWithType);
        } else {
          // Tüm ürünler için her iki API'den veriyi çek
          const [compRes, secRes] = await Promise.all([
            axios.get("https://localhost:7191/api/ComputerProducts"),
            axios.get("https://localhost:7191/api/SecurityProduct"),
          ]);

          const computerProducts = compRes.data.map((product) => ({
            ...product,
            productType: "computer",
          }));

          const securityProducts = secRes.data.map((product) => ({
            ...product,
            productType: "security",
          }));

          setProducts([...computerProducts, ...securityProducts]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Ürünler alınamadı:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleProductClick = (product) => {
    // Product nesnesini localStorage'a kaydet
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Navigate ile yönlendirme yap
    navigate(`/user/${userId}/${product.productType}/${product.id}`);
  };

  return (
    <>
      <Navbar />
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
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={product.img || "path_to_default_image.jpg"}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>{product.price} TL</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
