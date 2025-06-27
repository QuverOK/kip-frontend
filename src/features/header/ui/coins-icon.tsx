export function CoinsIcon({
  className = "text-[#FFB264]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.5" cy="18" r="17.5" />
      <circle cx="17.5" cy="18" r="11" stroke="white" strokeWidth="3" />
    </svg>
  );
}
