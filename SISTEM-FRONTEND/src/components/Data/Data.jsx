import React, { useEffect, useState } from "react";
import "./DataProduct.css";

export default function DataPassword() {
  const [dataProducts, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7191/api/SecurityProduct/grouped-by-type")
      .then((res) => res.json())
      .then((data) => {
        // Sadece Veri Şifreleme ürünlerini al
        const encryptionCategory = data.find(
          (group) => group.productType === "Veri Şifreleme Ürünü"
        );
        if (encryptionCategory) {
          setProducts(encryptionCategory.securityProducts);
        }
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="title-container">Veri Şifreleme Ürünleri</div>
        <div className="grid-container">
          {dataProducts.length > 0 ? (
            dataProducts.map((product) => (
              <div className="card" key={product.securityProductId}>
                <div className="card-title">{product.name}</div>
                <p>
                  Lisans Başlangıç:{" "}
                  {new Date(product.licenseStartDate).toLocaleDateString()}
                  <br />
                  Lisans Bitiş:{" "}
                  {new Date(product.licenseEndDate).toLocaleDateString()}
                </p>
                <button>Ürün Seç</button>
              </div>
            ))
          ) : (
            <p>Veri Şifreleme ürünleri yükleniyor veya bulunamadı.</p>
          )}
        </div>
      </div>
    </>
  );
}
