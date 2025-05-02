import React, { useEffect, useState } from "react";
import Navbar from "../Login/Navbar";
import { useNavigate } from "react-router-dom";

export default function IDS() {
  const [products, setProducts] = useState({});
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

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

  // Ürün tıklandığında çalışan fonksiyon
  const handleProductClick = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/user/${userId}/product/${product.securityProductId}`);
  };

  if (!userId) {
    return <div>Kullanıcı bulunamadı. Lütfen giriş yapın.</div>;
  }

  return (
    <>
      <Navbar />
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

                  <button
                    onClick={() => handleProductClick(product)}
                    className="btn-primary"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    Ürün Seç
                  </button>
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

                  <button
                    onClick={() => handleProductClick(product)}
                    className="btn-primary"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    Ürün Seç
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
