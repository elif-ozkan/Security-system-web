import React from "react";

export default function Ergonomics() {
  return (
    <>
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            padding: 20px;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            width: 100%;
            max-width: 1200px;
          }

          .itworker-btn {
            font-size: 18px;
            padding: 15px 20px;
            border-radius: 8px;
            transition: background-color 0.3s, transform 0.2s;
            width: 100%;
            text-align: center;
            cursor: pointer;
            border: none;
          }

          .itworker-btn-dark {
            background-color: rgba(0, 0, 0, 0.1);
            color: white;
          }

          .itworker-btn-dark:hover {
            background-color: #343a40;
            transform: scale(1.05);
          }

          .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: white;
            padding: 20px;
            text-align: center;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .card-text {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="container">
        <div className="grid-container">
          <button type="button" className="itworker-btn itworker-btn-dark">
            Sandalyeler
          </button>
          <div className="card">
            <h5 className="card-title">Ergonomik Sandalye</h5>
            <p className="card-text">
              Ergonomik Sandalye ile ilgili özellikler bu kısımda olacak.
            </p>
            <a href="#" className="btn btn-primary">
              Detaylar
            </a>
          </div>

          <button type="button" className="itworker-btn itworker-btn-dark">
            Klavyeler
          </button>
          <div className="card">
            <h5 className="card-title">Ergonomik Klavye</h5>
            <p className="card-text">
              Klavye ile ilgili özellikler bu kısımda olacak.
            </p>
            <a href="#" className="btn btn-primary">
              Detaylar
            </a>
          </div>

          <button type="button" className="itworker-btn itworker-btn-dark">
            Kulaklıklar
          </button>
          <div className="card">
            <h5 className="card-title">Kulaklıklar</h5>
            <p className="card-text">Kulaklıklar bu kısımda olacak.</p>
            <a href="#" className="btn btn-primary">
              Detaylar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
