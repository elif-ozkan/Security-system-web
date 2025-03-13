import React from "react";

export default function NetworkSecurity() {
  return (
    <>
      <div className="NetworkSecurity-btn-1">
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginTop: 125, width: 450 }}
        >
          EDR Ürünleri
        </button>
      </div>

      {/* Card for EDR Ürünleri */}
      <div className="card mt-3">
        <div className="card-header">
          <h5 className="mb-0">EDR Ürünleri</h5>
        </div>
        <div className="card-body">
          <p>Details and description for EDR Ürünleri will go here.</p>
        </div>
      </div>

      <div className="NetworkSecurity-btn-2 mt-3">
        <button type="button" className="btn btn-dark" style={{ width: 450 }}>
          Ağ Trafiği İzleme Araçları
        </button>
      </div>

      {/* Card for Ağ Trafiği İzleme Araçları */}
      <div className="card mt-3">
        <div className="card-header">
          <h5 className="mb-0">Ağ Trafiği İzleme Araçları</h5>
        </div>
        <div className="card-body">
          <p>
            Details and description for Ağ Trafiği İzleme Araçları will go here.
          </p>
        </div>
      </div>

      <div className="NetworkSecurity-btn-2 mt-3">
        <button type="button" className="btn btn-dark" style={{ width: 450 }}>
          FireWall Çözümleri
        </button>
      </div>

      {/* Card for Firewall Cihazları */}
      <div className="card mt-3">
        <div className="card-header">
          <h5 className="mb-0">Firewall Ürünü</h5>
        </div>
        <div className="card-body">
          <p>Details and description for Firewall Cihazları will go here.</p>
        </div>
      </div>
    </>
  );
}
