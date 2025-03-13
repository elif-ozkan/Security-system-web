import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    brand: "",
    model: "",
    ram: "",
    product_type: "",
    license_start_date: "",
    license_end_date: "",
    category: "",
  });
  const [editing, setEditing] = useState(false);
  const [filter, setFilter] = useState("");
  const categories = ["Computer Products", "Security Products"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!formData.name || !formData.category) return;
    setProducts([...products, { ...formData, id: Date.now() }]);
    setFormData({
      id: "",
      name: "",
      brand: "",
      model: "",
      ram: "",
      product_type: "",
      license_start_date: "",
      license_end_date: "",
      category: "",
    });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  const editProduct = (product) => {
    setFormData(product);
    setEditing(true);
  };

  const updateProduct = () => {
    setProducts(
      products.map((prod) => (prod.id === formData.id ? formData : prod))
    );
    setFormData({
      id: "",
      name: "",
      brand: "",
      model: "",
      ram: "",
      product_type: "",
      license_start_date: "",
      license_end_date: "",
      category: "",
    });
    setEditing(false);
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      <nav className="bg-dark text-white p-3" style={{ width: "200px" }}>
        <h2>Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Ürünler
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Ayarlar
            </a>
          </li>
          <li className="nav-item">
            <Link to="/admin/charts"> İstatistikler</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow-1 p-4">
        <h1 className="mb-4">Admin Panel</h1>
        <div className="card p-4 mb-4">
          <h2 className="mb-3">Ürün Ekle / Güncelle/Sil</h2>
          <div className="row g-2">
            <div className="col-md-3">
              <input
                className="form-control"
                name="name"
                placeholder="Ürün Adı"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {formData.category === "Computer Products" && (
              <>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="brand"
                    placeholder="Marka"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="model"
                    placeholder="Model"
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="ram"
                    placeholder="RAM"
                    value={formData.ram}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formData.category === "Security Products" && (
              <>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="product_type"
                    placeholder="Ürün Türü"
                    value={formData.product_type}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="license_start_date"
                    type="date"
                    value={formData.license_start_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    className="form-control"
                    name="license_end_date"
                    type="date"
                    value={formData.license_end_date}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="col-md-3">
              <select
                className="form-control"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Kategori Seç</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              {editing ? (
                <button
                  className="btn btn-primary w-100"
                  onClick={updateProduct}
                >
                  Güncelle
                </button>
              ) : (
                <button className="btn btn-success w-100" onClick={addProduct}>
                  Ekle
                </button>
              )}
              <button
                className="btn btn-danger w-100"
                onClick={() => deleteProduct(product.id)}
              >
                Sil
              </button>
              <button className="btn btn-primary w-100" onClick={updateProduct}>
                Güncelle
              </button>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ürün Adı</th>
              {filter === "Computer Products" && (
                <>
                  <th>Marka</th>
                  <th>Model</th>
                  <th>RAM</th>
                </>
              )}
              {filter === "Security Products" && (
                <>
                  <th>Ürün Türü</th>
                  <th>Başlangıç Tarihi</th>
                  <th>Bitiş Tarihi</th>
                </>
              )}
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => !filter || product.category === filter)
              .map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  {product.category === "Computer Products" && (
                    <>
                      <td>{product.brand}</td>
                      <td>{product.model}</td>
                      <td>{product.ram}</td>
                    </>
                  )}
                  {product.category === "Security Products" && (
                    <>
                      <td>{product.product_type}</td>
                      <td>{product.license_start_date}</td>
                      <td>{product.license_end_date}</td>
                    </>
                  )}
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => editProduct(product)}
                    >
                      Düzenle
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
