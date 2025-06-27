"use client";
import dynamic from "next/dynamic";

const ProfilePolarChart = dynamic(() => import("./polar-chart"), {
  ssr: false,
});

type ProfilePolarChartWrapperProps = {
  labels: string[];
  data: number[];
};

export function ProfilePolarChartWrapper({
  labels,
  data,
}: ProfilePolarChartWrapperProps) {
  return (
    <div className=" w-full flex justify-center">
      <ProfilePolarChart data={data} labels={labels} />
    </div>
  );
}
