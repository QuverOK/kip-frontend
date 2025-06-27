import { ProfileCardLayout } from "./card-layout";
import { ProfileCardTitle } from "./card-title";
import { ProfileCardSubTitle } from "./card-subtitle";
import { Badge } from "@/shared";
import { OverallStat } from "../model/useOverallStats";

type ProfileOverallStatsProps = {
  title: string;
  subTitle: string;
  overallStats: OverallStat[];
};

export function ProfileOverallStats({
  title,
  subTitle,
  overallStats,
}: ProfileOverallStatsProps) {
  return (
    <ProfileCardLayout>
      <div className="flex flex-col gap-[5px]">
        <ProfileCardTitle>{title}</ProfileCardTitle>
        <ProfileCardSubTitle>{subTitle}</ProfileCardSubTitle>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {overallStats.map((stat) => (
          <Badge key={stat.id} value={stat.value}>
            {stat.label}
          </Badge>
        ))}
      </div>
    </ProfileCardLayout>
  );
}
