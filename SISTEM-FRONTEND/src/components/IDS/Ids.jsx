import React, { useEffect, useState } from "react";

export default function IDS() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("https://localhost:7191/api/SecurityProduct/grouped-by-type")
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
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            padding: 20px;
          }

          .grid-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            width: 100%;
            max-width: 1200px;
          }

          .itworker-btn {
            font-size: 18px;
            padding: 20px 20px;
            border-radius: 8px;
            transition: background-color 0.3s, transform 0.2s;
            width: 100%;
            text-align: center;
            cursor: pointer;
            border: none;
          }

          .itworker-btn-dark {
            background-color: black;
            color: white;
            min-height: 60px;
          }

          .itworker-btn-dark:hover {
            background-color: #343a40;
            transform: scale(1.05);
          }

          .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: white;
            padding: 20px;
            text-align: center;
            width: 100%;
            max-width: 400px;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .card-text {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="container">
        <div className="grid-container">
          {/* IDS Ürünleri */}
          {products["IDS"] && (
            <>
              <button type="button" className="itworker-btn itworker-btn-dark">
                IDS Ürünleri
              </button>
              {products["IDS"].map((product) => (
                <div className="card" key={product.securityProductId}>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    Başlangıç:{" "}
                    {new Date(product.licenseStartDate).toLocaleDateString()}
                    <br />
                    Bitiş:{" "}
                    {new Date(product.licenseEndDate).toLocaleDateString()}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detaylar
                  </a>
                </div>
              ))}
            </>
          )}

          {/* IPS Ürünleri */}
          {products["IPS"] && (
            <>
              <button type="button" className="itworker-btn itworker-btn-dark">
                IPS Ürünleri
              </button>
              {products["IPS"].map((product) => (
                <div className="card" key={product.securityProductId}>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    Başlangıç:{" "}
                    {new Date(product.licenseStartDate).toLocaleDateString()}
                    <br />
                    Bitiş:{" "}
                    {new Date(product.licenseEndDate).toLocaleDateString()}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detaylar
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
