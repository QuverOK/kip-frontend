import { ProfileCardLayout } from "./card-layout";
import { ProfileCardTitle } from "./card-title";
import { ProfileCardSubTitle } from "./card-subtitle";

type ProfileClassesProps = {
  title: string;
  subTitle: string;
};

export function ProfileClasses({ title, subTitle }: ProfileClassesProps) {
  return (
    <ProfileCardLayout>
      <div className="flex flex-col gap-[5px]">
        <ProfileCardTitle>{title}</ProfileCardTitle>
        <ProfileCardSubTitle>{subTitle}</ProfileCardSubTitle>
      </div>
    </ProfileCardLayout>
  );
}
