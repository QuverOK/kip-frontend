"use client";

import { useTempHardSkillsInfo } from "../model/useTempHardSkillsInfo";
import { useTempSoftSkillInfo } from "../model/useTempSoftSkillInfo";
import { ProfileHardSkills } from "../ui/hard-skills";
import { ProfileSoftSkills } from "../ui/soft-skills";
import { ProfileOverallStats } from "../ui/overall-stats";
import { ProfileClasses } from "../ui/classes";
import { useOverallStats } from "../model/useOverallStats";
import { ProfileLayout } from "../ui/layout";

export function Profile({}) {
  const { softSkillInfo } = useTempSoftSkillInfo();
  const { labels, data } = useTempHardSkillsInfo();
  const { overallStats } = useOverallStats();
  return (
    <ProfileLayout>
      <ProfileSoftSkills
        softSkills={softSkillInfo}
        title="Софт скиллы"
        subTitle="Ваши важные общие навыки работы"
      />
      <ProfileClasses title={"Программист"} subTitle={"Я исправлю этот баг!"} />
      <ProfileHardSkills
        labels={labels}
        data={data}
        title="Навыки"
        subTitle="Ваши технические способности"
      />
      <ProfileOverallStats
        overallStats={overallStats}
        title="Общие статистика"
        subTitle="По всем персонажам"
      />
    </ProfileLayout>
  );
}
