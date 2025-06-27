import { DirectionId, EducationId, GroupId, UniversityId } from "@/kernel/ids";

export type GroupEntity = {
  id: GroupId;
  name: string;
  startYear: Date;
} & GroupConnections;

export type GroupConnections = {
  universityId: UniversityId;
  directionId: DirectionId;
  educationId: EducationId;
};
