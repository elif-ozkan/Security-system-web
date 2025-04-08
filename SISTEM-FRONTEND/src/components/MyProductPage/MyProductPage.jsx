import React, { useState, useEffect } from "react";
import axios from "axios";
export default function MyProductPage({ userid }) {
  const [assignedProducts, setAssignedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://localhost:7191/api/ProductAssignment/assigned/${userId}`
        );
        setAssignedProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Atanan ürünler alınamadı:", error);
        setLoading(false);
      }
    };

    fetchAssignedProducts();
  }, [userId]);
  return (
    <div className="container">
      <h2>Atanan Ürünler</h2>

      {loading ? (
        <p>Yükleniyor...</p>
      ) : assignedProducts.length === 0 ? (
        <p>Henüz atanan ürününüz yok.</p>
      ) : (
        <div className="product-list">
          {assignedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img || "path_to_default_image.jpg"}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Tür: {product.category}</p>
              <p>
                Atanma Tarihi:{" "}
                {new Date(product.assignmentDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
