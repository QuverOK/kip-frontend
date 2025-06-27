"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  Tooltip,
  PolarAreaController,
  RadialLinearScale,
  ChartData,
  ChartOptions,
} from "chart.js";

Chart.register(ArcElement, Tooltip, PolarAreaController, RadialLinearScale);

type ProfilePolarChartProps = {
  data: number[];
  labels: string[];
};

export default function ProfilePolarChart({
  data,
  labels,
}: ProfilePolarChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartData: ChartData<"polarArea"> = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            "rgba(255, 178, 100, 0.6)",
            "rgba(255, 97, 94, 0.6)",
            "rgba(73, 221, 20, 0.6)",
            "rgba(204, 94, 255, 0.6)",
            "rgba(94, 153, 255, 0.6)",
            "rgba(255, 237, 39, 0.6)",
          ],
          borderColor: [
            "rgba(255, 178, 100, 1)",
            "rgba(255, 97, 94, 1)",
            "rgba(73, 221, 20, 1)",
            "rgba(204, 94, 255, 1)",
            "rgba(94, 153, 255, 1)",
            "rgba(255, 237, 39, 1)",
          ],
          borderWidth: 5,
          offset: 15,
        },
      ],
    };

    const chartOptions: ChartOptions<"polarArea"> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          ticks: {
            display: false,
            stepSize: 35,
          },
          max: 105,
          beginAtZero: true,
          grid: {
            circular: true,
            color: "#DEDEDE",
            lineWidth: 5,
            offset: true,
          },
          pointLabels: {
            display: true,
            padding: 30,
            font: {
              size: 16,
              weight: 500,
              family: "Montserrat",
            },
            color: "#000",
            centerPointLabels: true,
          },
        },
      },
    };

    const chartInstance = new Chart(chartRef.current, {
      type: "polarArea",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, labels]);

  return (
    <canvas
      style={{ width: "100%", maxHeight: "264px", fontWeight: 500 }}
      ref={chartRef}
    ></canvas>
  );
}
