import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    usertype: "IT Worker",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = async () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // RegisterController'a istek gönder
      const response = await fetch(
        "https://localhost:7191/api/Register/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Account created successfully!");

        // Başarılı kayıt sonrası kullanıcı bilgilerini localStorage'a kaydet
        localStorage.setItem("userId", result.userId);

        // Kullanıcı tipine göre varsayılan rol belirle
        let defaultRole = "regular_user";
        if (formData.usertype === "IT Worker") {
          defaultRole = "it_staff";
        } else {
          defaultRole = "regular_user";
        }

        // Kullanıcı rolünü localStorage'a kaydet
        localStorage.setItem("userRole", defaultRole);
        localStorage.setItem("user name", formData.name);

        // Kullanıcıyı UserPage'e yönlendir
        navigate(`/user/${result.userId}`);
      } else {
        alert(result.message || "Account creation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4 rounded"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-3">Create an Account</h2>

        <div className="text-center mb-3">
          <span className="text-muted">Have an account? </span>
          <button className="btn btn-link p-0" onClick={handleSignIn}>
            Sign In
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Surname</label>
          <input
            type="text"
            className="form-control"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Enter your surname"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">User Type</label>
          <select
            className="form-control"
            name="usertype"
            value={formData.usertype}
            onChange={handleChange}
          >
            <option value="IT Worker">IT Çalışanıyım</option>
            <option value="Not IT Worker">IT Çalışanı Değilim</option>
          </select>
        </div>

        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>

        <p className="text-center text-muted">
          By creating an account, you agree to our
          <a href="/terms-of-service" className="ms-1">
            Terms of Service
          </a>
        </p>

        <hr />

        <p className="text-center text-muted">Or create an account using:</p>

        <button
          className="btn btn-outline-danger w-100 mb-2 d-flex align-items-center justify-content-center"
          onClick={() => alert("Google sign-in coming soon")}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a73199f1bb1d3ea89b40297fa0cb3c5a5d23d64a09d3c0065afa4619abb32ce"
            alt="Google"
            className="me-2"
            style={{ width: "20px" }}
          />
          Continue with Google
        </button>

        <button
          className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
          onClick={() => alert("Facebook sign-in coming soon")}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3feb9724a7eb37edc68e698d2bf9cfdafff2e78a2d0733da73a89c1beed3d397"
            alt="Facebook"
            className="me-2"
            style={{ width: "20px" }}
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
