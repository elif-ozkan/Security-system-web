import React from "react";
import Navbar from "../Login/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
        <div className="container bg-white shadow-lg rounded-3 p-5 text-center">
          <h1 className="display-4 fw-bold text-dark mb-4">Hakkımızda</h1>
          <p className="text-secondary fs-5 mb-3">
            Biz, modern ve yenilikçi çözümler sunarak kullanıcılarımıza en iyi
            deneyimi sağlamayı hedefleyen bir ekibiz.
          </p>
          <p className="text-secondary fs-5 mb-3">
            Teknolojiyi yakından takip ederek, müşteri memnuniyetini en üst
            seviyede tutmak için çalışıyoruz.
          </p>
          <p className="text-secondary fs-5">
            Daha fazla bilgi için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </>
  );
}
