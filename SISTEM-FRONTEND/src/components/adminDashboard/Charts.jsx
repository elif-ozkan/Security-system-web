import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Chart.js bileşenlerini global olarak kaydet
Chart.register(...registerables);

export default function Charts() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const xValues = ["Ergonomik Sandalye", "Klavye", "FortiSIEM", "Kulaklık"];
    const yValues = [55, 49, 44, 24];
    const barColors = ["red", "green", "blue", "orange"];

    // Önceki grafiği temizle
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Yeni grafiği oluştur
    chartRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Satılan Ürün İstatistikleri",
          },
        },
      },
    });

    // Bileşen unmount olduğunda grafiği yok et
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Boş array, sadece bileşen ilk render olduğunda çalışacak

  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
}
