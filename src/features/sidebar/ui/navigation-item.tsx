import { cn } from "@/shared";
import Link from "next/link";

type NavigationItemProps = {
  title: string;
  href: string;
  isActive: boolean;
};

export function NavigationItem({ title, href, isActive }: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 relative",
        isActive && "bg-[#e8f6ff]",
      )}
    >
      <div
        hidden={!isActive}
        className="rounded-r-[1.25rem] bg-[#5e99ff] w-[0.62rem] min-h-full absolute left-0 top-0"
      ></div>
      <span className="py-[13px] pl-[31px] pr-[17px] text-[1.20rem] font-medium">
        {title}
      </span>
    </Link>
  );
}
