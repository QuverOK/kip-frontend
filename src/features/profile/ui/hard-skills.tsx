import { ProfileCardLayout } from "./card-layout";
import { ProfileCardTitle } from "./card-title";
import { ProfileCardSubTitle } from "./card-subtitle";
import { ProfilePolarChartWrapper } from "./polar-chart-wrapper";

type ProfileHardSkillsProps = {
  labels: string[];
  data: number[];
  title: string;
  subTitle: string;
};

export function ProfileHardSkills({
  labels,
  data,
  title,
  subTitle,
}: ProfileHardSkillsProps) {
  return (
    <ProfileCardLayout>
      <div className="flex flex-col gap-[5px] ">
        <ProfileCardTitle>{title}</ProfileCardTitle>
        <ProfileCardSubTitle>{subTitle}</ProfileCardSubTitle>
      </div>
      <div className="flex justify-center">
        <ProfilePolarChartWrapper labels={labels} data={data} />
      </div>
    </ProfileCardLayout>
  );
}
