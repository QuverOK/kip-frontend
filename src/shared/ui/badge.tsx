export function Badge({
  children,
  value,
}: {
  children: React.ReactNode;
  value: number;
}) {
  return (
    <div className="bg-white shadow-[0_0_50px_0] shadow-[rgba(177,_205,_255,_0.2)] flex max-h-8 leading-normal rounded-[0.62rem] w-max">
      <span className="font-medium text-[0.94rem] text-center py-[7px] px-[10px] flex items-center justify-center">
        {children}
      </span>
      <div className="border-[2px] border-[#5E99FF] px-[0.44rem] py-[0.62rem] rounded-[0.62rem] font-bold text-[0.94rem]  text-[#5E99FF] flex items-center justify-center">
        {value}
      </div>
    </div>
  );
}
 