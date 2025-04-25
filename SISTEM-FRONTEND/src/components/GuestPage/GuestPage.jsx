import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestPage() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("3 saniye sonra kayıt sayfasına yönlendirileceksiniz!!");
    // 3 saniye bekle, sonra kayıt sayfasına yönlendir
    const timer = setTimeout(() => {
      navigate("/createaccount");
    }, 3000);

    return () => clearTimeout(timer); // bileşen unmount olursa timer iptal et
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg text-center">
        <h2 className="text-danger">Yetkiniz Yok</h2>
        <p className="mt-3">
          Bu sayfayı görüntülemek için gerekli yetkiye sahip değilsiniz.
        </p>
      </div>
    </div>
  );
}
