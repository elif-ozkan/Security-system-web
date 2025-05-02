import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, type, onClick }) {
  return (
    <div
      className="product-card"
      onClick={() => onClick(product)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={product.img || "/no-image.jpg"}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>

      {type === "computer" && (
        <>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Model:</strong> {product.model}
          </p>
          <p>
            <strong>RAM:</strong> {product.ram}
          </p>
        </>
      )}

      {type === "security" && (
        <>
          <p>
            <strong>Type:</strong> {product.product_type}
          </p>
          <p>
            <strong>License Start:</strong> {product.license_start_date}
          </p>
          <p>
            <strong>License End:</strong> {product.license_end_date}
          </p>
        </>
      )}

      <p>
        <strong>Kategori:</strong> {product.category_name}
      </p>
    </div>
  );
}
