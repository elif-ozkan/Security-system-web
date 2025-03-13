import React from "react";
import "./DataProduct.css";

export default function DataPassword() {
  return (
    <>
      <div className="container">
        <div className="title-container">Veri Şifreleme Ürünleri</div>
        <div className="grid-container">
          <div className="card">
            <div className="card-title">AxCrypt</div>
            <p>
              AxCrypt, bireysel kullanıcılar ve küçük işletmeler için veri
              şifrelemesi sağlayan bir yazılımdır. Basit ve kullanıcı dostu
              arayüzü ile tanınır.
            </p>
            <button>Ürün Seç</button>
          </div>
          <div className="card">
            <div className="card-title">BitLocker(Microsoft)</div>
            <p>
              {" "}
              BitLocker, Windows işletim sistemlerinde yerleşik olarak bulunan
              bir tam disk şifreleme aracıdır. Kurumsal sürümler ve Windows
              Pro/Enterprise sürümleri ile kullanılabilir.
            </p>
            <button>Ürün Seç</button>
          </div>
          <div className="card">
            <div className="card-title">Symantec Encryption</div>
            <p>
              Symantec, kurumsal düzeyde şifreleme çözümleri sunan bir güvenlik
              şirketidir. Symantec Encryption, e-posta, dosya ve tam disk
              şifreleme çözümleri sunar.
            </p>
            <button>Ürün Seç</button>
          </div>
        </div>
      </div>
    </>
  );
}
