import { ProfileCardLayout } from "./card-layout";
import { ProfileCardTitle } from "./card-title";
import { ProfileCardSubTitle } from "./card-subtitle";
import { ProfileRangeLayout } from "./range-layout";
import { softSkill } from "../model/useTempSoftSkillInfo";

type ProfileSoftSkillsProps = {
  softSkills: softSkill[];
  title: string;
  subTitle: string;
};

export function ProfileSoftSkills({
  softSkills,
  title,
  subTitle,
}: ProfileSoftSkillsProps) {
  return (
    <ProfileCardLayout>
      <div className="flex flex-col gap-[5px]">
        <ProfileCardTitle>{title}</ProfileCardTitle>
        <ProfileCardSubTitle>{subTitle}</ProfileCardSubTitle>
      </div>
      <div className="flex flex-col gap-4">
        {softSkills.map((skill) => (
          <ProfileRangeLayout
            key={skill.id}
            color={skill.color}
            indicatorColor={skill.indicatorColor}
            labelText={skill.labelText}
            value={skill.value}
            id={skill.id}
          />
        ))}
      </div>
    </ProfileCardLayout>
  );
}
