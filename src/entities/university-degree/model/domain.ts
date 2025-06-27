import { DegreeId, UniversityDegreeId, UniversityId } from "@/kernel/ids";

export type UniversityDegreeEntity = {
  id: UniversityDegreeId;
  universityId: UniversityId;
  degreeId: DegreeId;
};
