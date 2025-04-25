import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");
  const { id, productId } = useParams(); // `id` ve `productId` URL'den alınıyor
  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (!storedId || storedId !== id) {
      navigate("/login"); // Kullanıcı girişi yapılmamışsa login sayfasına yönlendir
      return;
    }

    const storedRole = localStorage.getItem("userRole");
    if (!storedRole) {
      navigate("/choose"); // Kullanıcı rolü seçmemişse role seçim sayfasına yönlendir
      return;
    }

    setUserRole(storedRole); // Kullanıcı rolü state'e kaydediliyor

    axios
      .get(`https://localhost:7191/api/Users/${id}`)
      .then((res) => setUserData(res.data))
      .catch(() => setError("Veriler alınamadı."));

    if (productId) {
      axios
        .get(`https://localhost:7191/api/Products/${productId}`)
        .then((res) => setProductData(res.data))
        .catch(() => setError("Ürün verisi alınamadı."));
    }
  }, [id, productId, navigate]);

  const handleChangeRole = () => {
    navigate("/choose"); // Rol değiştir butonuna tıklandığında rol seçim sayfasına yönlendir
  };

  if (error) return <div>{error}</div>;
  if (!userData) return <div>Yükleniyor...</div>;

  const renderRoleSpecificContent = () => {
    switch (userRole) {
      case "it_staff":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">IT Çalışanı Paneli</h5>
              <p className="card-text">
                IT çalışanları için özel içerik ve araçlar burada
                gösterilecektir.
              </p>
            </div>
          </div>
        );
      case "guest_user":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Misafir Paneli</h5>
              <p className="card-text">
                Misafir kullanıcılar için sınırlı özellikler ve içerik burada
                gösterilecektir.
              </p>
            </div>
          </div>
        );
      case "regular_user":
        return (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Standart Kullanıcı Paneli</h5>
              <p className="card-text">
                IT çalışanı olmayanlar için uygun araçlar ve içerikler burada
                gösterilecektir.
              </p>
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
            <h2 className="card-title">Hoşgeldin, {userData.name}</h2>
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

        {productData && (
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Ürün Detayları</h3>
              <p className="card-text">Ürün Adı: {productData.name}</p>
              <p className="card-text">
                Ürün Açıklaması: {productData.description}
              </p>
              <p className="card-text">Fiyat: {productData.price} TL</p>
            </div>
          </div>
        )}

        <button
          className="btn btn-outline-primary mt-3"
          onClick={() => navigate("/")}
        >
          Siteye Geri Dön
        </button>
      </div>
    </>
  );
};

export default UserPage;
