export function SidebarMain({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[32px] py-[20px] bg-white rounded-[1.25rem]">
      {children}
    </div>
  );
}
