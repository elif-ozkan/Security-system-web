import React from "react";
import { Navigate } from "react-router-dom";

function CreateAccount() {
  const handleSignIn = () => {
    // Handle sign in logic
  };

  const handleCreateAccount = () => {
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput.checkValidity()) {
      alert("Create account logic placeholder");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in logic
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4 rounded"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <h2 className="text-center mb-3">Create an Account</h2>

        <div className="text-center mb-3">
          <span className="text-muted">Have an account? </span>
          <button className="btn btn-link p-0" onClick={handleSignIn}>
            Sign In
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email Address"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Create Password"
          />
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
          onClick={handleGoogleSignIn}
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
          onClick={handleFacebookSignIn}
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
