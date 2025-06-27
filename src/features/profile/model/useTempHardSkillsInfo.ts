"use client";
import { useState } from "react";

type useTempHardSkillsInfo = {
  labels: string[];
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
  setLabels: React.Dispatch<React.SetStateAction<string[]>>;
};

export function useTempHardSkillsInfo(): useTempHardSkillsInfo {
  const labelsDefault = [
    "Тестирование",
    "Frontend",
    "Языки",
    "Backend",
    "БД",
    "Кибербезопасность",
  ];
  const dataDefault = [60, 70, 55, 45, 28, 100];

  const [data, setData] = useState<number[]>(dataDefault);
  const [labels, setLabels] = useState<string[]>(labelsDefault);

  return { labels, data, setData, setLabels };
}

// временное решение для хранения данных о софт скиллах
