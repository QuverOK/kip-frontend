import { cn, Progress } from "@/shared";

type ProfileRangeLayoutProps = {
  color: string;
  indicatorColor: string;
  labelText: string;
  value: number;
  id: string;
};

export function ProfileRangeLayout({
  color,
  indicatorColor,
  labelText,
  value,
  id,
}: ProfileRangeLayoutProps) {
  return (
    <div className="flex items-center">
      <label className="font-medium text-[0.94rem] w-[50%]" htmlFor={id}>
        {labelText}
      </label>
      <div className="flex gap-6 items-center w-full">
        <Progress
          id={id}
          value={value}
          className={color}
          indicatorClassName={cn("transition-all", indicatorColor)}
        />
        <span className="text-[#424242] font-bold text-right text-[0.88rem]">
          {value}
        </span>
      </div>
    </div>
  );
}
