import { CoinsIcon } from "../ui/coins-icon";
import { ExperienceIcon } from "../ui/experience-icon";
import { FaqIcon } from "../ui/faq-icon";
import { HeaderLayout } from "../ui/layout";
import { HeaderItemLayout } from "../ui/item-layout";

const experience = "1 123 234";
const coins = "1 123 234";
const salary = "40к";

export function Header() {
  return (
    <>
      <HeaderLayout>
        <HeaderItemLayout>Зарплата: {salary}</HeaderItemLayout>
        <HeaderItemLayout>
          <ExperienceIcon />
          {experience}
        </HeaderItemLayout>
        <HeaderItemLayout>
          <CoinsIcon />
          {coins}
        </HeaderItemLayout>
        <HeaderItemLayout isButton>
          <FaqIcon />
        </HeaderItemLayout>
      </HeaderLayout>
    </>
  );
}
