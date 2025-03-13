import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Choose.css";

export default function Choose() {
  const [userRole, setUserRole] = useState("");
  const [roleSelected, setRoleSelected] = useState(false);
  const navigate = useNavigate();

  // Kullanıcı rolüne göre yönlendirme yap - sadece rol seçimi yapıldığında
  useEffect(() => {
    if (roleSelected && userRole) {
      if (userRole === "it_staff") {
        navigate("/ITWorker"); // IT çalışanları için özel sayfa
      } else {
        navigate("/Nıtworker"); // Diğer kullanıcılar için genel sayfa
      }
    }
  }, [roleSelected, userRole, navigate]);

  // Kullanıcı tercih yapabilecek bir form
  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  // Rol seçimini onaylayıp yönlendirme yapacak fonksiyon
  const handleContinue = () => {
    if (userRole) {
      setRoleSelected(true);
    }
  };

  return (
    <>
      <div className="choose-container">
        <h1 className="choose-title">Hoş Geldiniz</h1>
        <p className="choose-description">
          Lütfen sistem içinde devam etmek istediğiniz rolü seçin.
        </p>

        <div className="role-selection">
          <h2>Rol Seçimi</h2>
          <p>İlgili panele erişmek için rolünüzü seçin ve devam edin.</p>

          <div className="button-group">
            <button
              className={`role-button ${
                userRole === "it_staff" ? "active" : ""
              }`}
              onClick={() => handleRoleSelect("it_staff")}
            >
              IT Çalışanı
            </button>

            <button
              className={`role-button ${
                userRole === "regular_user" ? "active" : ""
              }`}
              onClick={() => handleRoleSelect("regular_user")}
            >
              IT Çalışanı Değilim
            </button>
          </div>

          <button
            className="continue-button"
            style={{ marginTop: 35 }}
            disabled={!userRole}
            onClick={handleContinue}
          >
            Devam Et
          </button>
        </div>
      </div>
    </>
  );
}
