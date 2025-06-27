import { KIPIcon } from "@/shared";
import { SidebarNavigation } from "../ui/navigation";
import { SidebarHeader } from "../ui/header";
import { SidebarMain } from "../ui/main";
import { SidebarFooter } from "../ui/footer";
import { SidebarLayout } from "../ui/layout";

export type NavigationItem = {
  title: string;
  url: string;
  isActive: boolean;
};

const navigationList: NavigationItem[] = [
  { title: "Конкурсы", url: "#", isActive: false },
  { title: "Резюме", url: "#", isActive: false },
  { title: "Профиль", url: "#", isActive: true },
  { title: "Черновики", url: "#", isActive: false },
  { title: "Рейтинг", url: "#", isActive: false },
  { title: "История", url: "#", isActive: false },
  { title: "Настройки", url: "#", isActive: false },
];

export function Sidebar({}) {
  return (
    <SidebarLayout>
      <SidebarHeader>
        <KIPIcon />
      </SidebarHeader>
      <SidebarMain>
        <SidebarNavigation navigationList={navigationList} />
      </SidebarMain>
      <SidebarFooter>
        <></>
      </SidebarFooter>
    </SidebarLayout>
  );
}
