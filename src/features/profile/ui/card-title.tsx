import clsx from "clsx";

export function ProfileCardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={clsx("font-bold text-[1.75rem]", className)}>{children}</h3>
  );
}
