import clsx from "clsx";

export function ProfileCardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        "py-9 px-[30px] rounded-[1.25rem] shadow-[0_0_50px_0_#d9e6ff] bg-white flex flex-col gap-8 ",
        className,
      )}
    >
      {children}
    </section>
  );
}
