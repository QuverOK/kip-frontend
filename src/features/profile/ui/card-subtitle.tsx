import clsx from "clsx";

export function ProfileCardSubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={clsx("text-[0.94rem]", className)}>{children}</p>;
}
