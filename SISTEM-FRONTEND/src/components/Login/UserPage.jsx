import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id, productId, productType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Kullanıcı kimlik doğrulama kontrolü
        const storedId = localStorage.getItem("userId");
        if (!storedId || storedId !== id) {
          navigate("/login");
          return;
        }

        const storedRole = localStorage.getItem("userRole");
        if (!storedRole) {
          navigate("/choose");
          return;
        }

        setUserRole(storedRole);

        // Kullanıcı verisini al
        const userResponse = await axios.get(
          `https://localhost:7191/api/Users/${id}`
        );
        setUserData(userResponse.data);

        // Ürün bilgilerini kontrol et - önce localStorage'dan
        let productInfo = null;
        const storedProduct = localStorage.getItem("selectedProduct");

        if (storedProduct) {
          productInfo = JSON.parse(storedProduct);
          console.log("Stored product data:", productInfo);
          setProductData(productInfo);
        }
        // Eğer localStorage'da ürün yoksa API'den çek
        else if (productId && productType) {
          console.log("Fetching product from API:", productType, productId);
          let apiUrl = "";

          if (productType === "computer") {
            apiUrl = `https://localhost:7191/api/ComputerProducts/${productId}`;
          } else if (productType === "security") {
            apiUrl = `https://localhost:7191/api/SecurityProduct/${productId}`;
          }

          if (apiUrl) {
            const productResponse = await axios.get(apiUrl);
            console.log("API product response:", productResponse.data);
            setProductData({
              ...productResponse.data,
              productType: productType,
            });
          }
        }

        setLoading(false);
      } catch (err) {
        console.error("Veri yükleme hatası:", err);
        setError("Veriler alınamadı. Lütfen daha sonra tekrar deneyiniz.");
        setLoading(false);
      }
    };

    loadData();
  }, [id, productId, productType, navigate]);

  const handleChangeRole = () => {
    navigate("/choose");
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };

  if (loading)
    return (
      <>
        <Navbar />
        <div className="container mt-4 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
          <p>Veriler yükleniyor...</p>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="container mt-4 alert alert-danger" role="alert">
          {error}
        </div>
      </>
    );

  const renderRoleSpecificContent = () => {
    switch (userRole) {
      case "it_staff":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">IT Çalışanı Paneli</h5>
              <p className="card-text">IT çalışanları için özel içerik.</p>
            </div>
          </div>
        );
      case "guest_user":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Misafir Paneli</h5>
              <p className="card-text">
                Misafir kullanıcılar için sınırlı içerik.
              </p>
            </div>
          </div>
        );
      case "regular_user":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Standart Kullanıcı Paneli</h5>
              <p className="card-text">Standart kullanıcılar için içerik.</p>
            </div>
          </div>
        );
      default:
        return <p>Lütfen bir rol seçin.</p>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Hoşgeldin, {userData?.name}</h2>
            <p className="card-text">
              Rol:{" "}
              {userRole === "it_staff"
                ? "IT Çalışanı"
                : userRole === "guest_user"
                ? "Misafir Kullanıcı"
                : "Standart Kullanıcı"}
            </p>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleChangeRole}
            >
              Rolü Değiştir
            </button>
          </div>
        </div>

        {renderRoleSpecificContent()}

        {/* Ürün Detayları */}
        {productData && (
          <div className="card mt-4">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Ürün Detayları</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center mb-3">
                  {productData.img ? (
                    <img
                      src={productData.img}
                      alt={productData.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: "300px" }}
                    />
                  ) : (
                    <div
                      className="bg-light p-5 rounded d-flex align-items-center justify-content-center"
                      style={{ height: "300px" }}
                    >
                      <p className="text-muted">Ürün görseli bulunamadı</p>
                    </div>
                  )}
                </div>
                <div className="col-md-8">
                  <h4 className="card-title">
                    {productData.name || "İsimsiz Ürün"}
                  </h4>
                  <hr />
                  <p className="card-text">
                    {productData.description || "Açıklama bulunmamaktadır."}
                  </p>
                  <div className="mt-4">
                    {/* Ürün türüne göre teknik bilgiler */}
                    {productData.productType === "computer" && (
                      <div className="specs mt-3">
                        <h6>Bilgisayar Ürün Özellikleri:</h6>
                        <ul className="list-group list-group-flush">
                          {productData.brand && (
                            <li className="list-group-item">
                              Marka: {productData.brand}
                            </li>
                          )}
                          {productData.model && (
                            <li className="list-group-item">
                              Model: {productData.model}
                            </li>
                          )}
                          {productData.ram && (
                            <li className="list-group-item">
                              RAM: {productData.ram}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {productData.productType === "security" && (
                      <div className="specs mt-3">
                        <h6>Güvenlik Ürünü Özellikleri:</h6>
                        <ul className="list-group list-group-flush">
                          {productData.product_type && (
                            <li className="list-group-item">
                              Tür: {productData.product_type}
                            </li>
                          )}
                          {productData.license_start_date && (
                            <li className="list-group-item">
                              Lisans Başlangıç: {productData.license_start_date}
                            </li>
                          )}
                          {productData.license_end_date && (
                            <li className="list-group-item">
                              Lisans Bitiş: {productData.license_end_date}
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                      <button className="btn btn-success">Sepete Ekle</button>
                      <button className="btn btn-outline-primary">
                        Favorilere Ekle
                      </button>
                      <button className="btn btn-danger">Ürünü Sil</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <button
            className="btn btn-outline-primary me-2"
            onClick={handleBackToProducts}
          >
            Ürünlere Geri Dön
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </>
  );
};

export default UserPage;
