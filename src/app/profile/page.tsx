import { Header } from "@/features/header";
import { Profile } from "@/features/profile";
import { Sidebar } from "@/features/sidebar";

export default function ProfilePage() {
  return (
    <div className="flex gap-[97px] h-full py-8">
      <Sidebar />
      <div className="flex flex-col gap-8">
        <Header />
        <main>
          <Profile />
        </main>
      </div>
    </div>
  );
}
