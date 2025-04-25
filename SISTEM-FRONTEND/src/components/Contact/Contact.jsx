import React from "react";
import "./Contact.css";
import Navbar from "../Login/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="contact-title">İletişim Formu</h1>

      <div className="mb-5">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          style={{ maxWidth: 580 }}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button>Gönder</button>
    </>
  );
}
