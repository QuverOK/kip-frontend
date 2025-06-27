import {
  DegreeId,
  DirectionId,
  EducationId,
  ResumeId,
  UniversityId,
} from "@/kernel/ids";

export type EducationEntity = {
  id: EducationId;
  groupNumber: number;
  status: string;
} & EducationConnections &
  EducationDate;

export type EducationDate = {
  startDate: Date;
  endDate: Date;
};

export type EducationConnections = {
  resumeId: ResumeId;
  universityId: UniversityId;
  degreeId: DegreeId;
  directionId: DirectionId;
};
