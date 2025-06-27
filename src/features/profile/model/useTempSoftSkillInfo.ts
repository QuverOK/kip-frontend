"use client";
import { useState } from "react";

export type softSkill = {
  id: string;
  color: string;
  indicatorColor: string;
  labelText: string;
  value: number;
};

type useTempSoftSkillInfo = {
  softSkillInfo: softSkill[];
  setSoftSkillInfo: React.Dispatch<React.SetStateAction<softSkill[]>>;
};

export function useTempSoftSkillInfo(): useTempSoftSkillInfo {
  const softSkills: softSkill[] = [
    {
      id: "leadershipRange",
      color: "bg-[#FFC9C8]",
      indicatorColor: "bg-[#FF615E]",
      labelText: "Лидерство",
      value: 50,
    },
    {
      id: "workInTeamRange",
      color: "bg-[#FFE3C8]",
      indicatorColor: "bg-[#FFB264]",
      labelText: "Работа в команде",
      value: 30,
    },
    {
      id: "adaptabilityRange",
      color: "bg-[#C3FFAE]",
      indicatorColor: "bg-[#49DD14]",
      labelText: "Адапативность",
      value: 60,
    },
    {
      id: "timeManagementRange",
      color: "bg-[#CFEBFF]",
      indicatorColor: "bg-[#5E99FF]",
      labelText: "Тайм-менеджмент",
      value: 40,
    },
    {
      id: "englishRange",
      color: "bg-[#F6E3FF]",
      indicatorColor: "bg-[#CC5EFF]",
      labelText: "Английский язык",
      value: 20,
    },
  ];

  const [softSkillInfo, setSoftSkillInfo] = useState<softSkill[]>(softSkills);

  return { softSkillInfo, setSoftSkillInfo };
}

// временное решение для хранения данных о софт скиллах
