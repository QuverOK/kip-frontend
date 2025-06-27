import clsx from "clsx";

type HeaderItemLayoutProps = {
  isButton?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function HeaderItemLayout({
  isButton,
  children,
  className,
}: HeaderItemLayoutProps) {
  const styles = clsx(
    "shadow-[0_0_50px_0] shadow-[rgba(177,_205,_255,_0.2)] bg-white flex gap-[17px] items-center justify-center px-[30px]  rounded-[6.25rem] text-[1.38rem] font-semibold min-h-[64px] h-full",
    className,
  );

  if (isButton) {
    return <button className={styles}>{children}</button>;
  }

  return <div className={styles}>{children}</div>;
}
