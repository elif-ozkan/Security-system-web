import React, { useState } from "react";
import "./Add.css";

export default function Add() {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [ram, setRam] = useState("");
  const [licenseStartDate, setLicenseStartDate] = useState("");
  const [licenseEndDate, setLicenseEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [securityprice, setSecurityPrice] = useState("");
  const [securityname, setSecurityName] = useState("");
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi
    console.log({
      productName,
      productDescription,
      category,
    });
  };

  const productData = {
    name: productName,
    brand,
    model,
    category_id: category,
    ram,
    product_type: productType,
    license_start_date: licenseStartDate,
    license_end_date: licenseEndDate,
  };
  console.log("Form Verisi:", productData);
  return (
    <div className="form-container">
      <h2>Ürün Güncelle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Kategori</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Kategori Seçin</option>
            <option value="1">Bilgisayar</option>
            <option value="2">Güvenlik Ürünü</option>
          </select>
        </div>

        {/* Bilgisayar ürünü için özel alanlar */}
        {category === "1" && (
          <>
            <div className="form-group">
              <label htmlFor="productName">Ürün Adı</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Ürün adını girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Marka</label>
              <input
                type="text"
                id="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Marka adını girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ram">RAM</label>
              <input
                type="text"
                id="ram"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
                placeholder="RAM miktarını girin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Fiyat</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Fiyatı girin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                id="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Modeli girin"
                required
              />
            </div>
          </>
        )}

        {/* Güvenlik ürünü için özel alanlar */}
        {category === "2" && (
          <>
            <div className="form-group">
              <label htmlFor="securityName">Ürün Adı</label>
              <intup
                type="text"
                id="securityName"
                value={securityname}
                onChange={(e) => setSecurityName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productType">Ürün Tipi</label>
              <input
                type="text"
                id="productType"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                placeholder="Ürün tipini girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="licenseStartDate">Lisans Başlangıç Tarihi</label>
              <input
                type="date"
                id="licenseStartDate"
                value={licenseStartDate}
                onChange={(e) => setLicenseStartDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="licenseEndDate">Lisans Bitiş Tarihi</label>
              <input
                type="date"
                id="licenseEndDate"
                value={licenseEndDate}
                onChange={(e) => setLicenseEndDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="securityprice">Ürün Fiyatı</label>
              <input
                type="number"
                id="securityprice"
                value={securityprice}
                onChange={(e) => setSecurityPrice(e.target.value)}
              />
            </div>
          </>
        )}

        <button type="submit">Ürünü Güncelle</button>
      </form>
    </div>
  );
}
