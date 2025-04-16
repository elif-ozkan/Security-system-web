import React, { useEffect, useState } from "react";

export default function NetworkSecurity() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7191/api/ComputerProducts/grouped-by-type") //istek url
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        data.forEach((group) => {
          grouped[group.productType] = group.securityProducts;
        });
        setProducts(grouped);
      });
  }, []);
  return (
    <>
      {/* Dinamik Butonlar ve Kartlar */}
      {Object.keys(products).map((productType) => (
        <div key={productType}>
          <div className={`NetworkSecurity-btn-${productType} mt-3`}>
            <button
              type="button"
              className="btn btn-dark"
              style={{ width: 450 }}
            >
              {productType}
            </button>
          </div>

          {/* Dinamik Kartlar */}
          {products[productType].length > 0 ? (
            products[productType].map((product) => (
              <div className="card mt-3" key={product.security_product_id}>
                <div className="card-header">
                  <h5 className="mb-0">{product.name}</h5>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Category:</strong> {product.category_id}
                  </p>
                  <p>
                    <strong>License Start Date:</strong>{" "}
                    {new Date(product.license_start_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>License End Date:</strong>{" "}
                    {new Date(product.license_end_date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Type:</strong> {product.product_type}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products available for {productType}</p>
          )}
        </div>
      ))}
    </>
  );
}
