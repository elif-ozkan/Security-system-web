import React, { useEffect, useState } from "react";
import "./StorageProduct.css";
import axios from "axios";

const StorageProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7191/api/ComputerProducts/grouped-by-type")
      .then((response) => {
        // `category_id` 11 olan ürünleri filtrele
        const filteredProducts = response.data.filter(
          (product) => product.categoryId === 11
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Veri yüklenirken bir hata oluştu:", error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h2 className="category-title">Depolama Ürünleri</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.computerProductId} className="product-card">
            <div className="card-content">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-info">
                {product.brand} - {product.model}
              </p>
              {product.ram && <p className="product-ram">RAM: {product.ram}</p>}
              <a href="#" className="details-button">
                Detaylar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageProductList;
