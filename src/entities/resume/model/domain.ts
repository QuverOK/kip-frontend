import { ResumeId, UserId } from "@/kernel/ids";

export type ResumeEntity = {
  id: ResumeId;
  aboutMe: string;
} & ResumeConnections;

export type ResumeConnections = {
  userId: UserId;
};
