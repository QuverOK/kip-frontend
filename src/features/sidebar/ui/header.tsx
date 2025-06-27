export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[88px] py-[35px] flex items-center justify-center bg-white rounded-[1.25rem]">
      {children}
    </div>
  );
}
