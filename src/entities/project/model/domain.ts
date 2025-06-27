import { ProjectId, ResumeId } from "@/kernel/ids";

export type ProjectEntity = {
  id: ProjectId;
  name: string;
  description: string;
  link: string;
} & ProjectConnections;

export type ProjectConnections = {
  resumeId: ResumeId;
};
