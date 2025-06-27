"use client";
import { useState } from "react";

type useOverallStats = {
  overallStats: OverallStat[];
  setOverallStats: (stats: OverallStat[]) => void;
};

export type OverallStat = {
  id: string;
  label: string;
  value: number;
};

export function useOverallStats(): useOverallStats {
  const overallStatsDefault: OverallStat[] = [
    {
      id: "1",
      label: "Frontend",
      value: 3,
    },
    {
      id: "2",
      label: "Лидерство",
      value: 4,
    },
    {
      id: "3",
      label: "Робототехника",
      value: 1,
    },
    {
      id: "4",
      label: "3D моделирование",
      value: 650,
    },
    {
      id: "5",
      label: "Неорганическая химия",
      value: 100,
    },
  ];

  const [overallStats, setOverallStats] =
    useState<OverallStat[]>(overallStatsDefault);

  return { overallStats, setOverallStats };
}

// временное решение для хранения данных о софт скиллах
