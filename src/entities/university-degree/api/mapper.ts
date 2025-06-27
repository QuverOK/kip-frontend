import { UniversityDegreeDTO } from "./dto";
import { UniversityDegreeEntity } from "../model/domain";

export const adaptUniversityDegreeDTO = (
  dto: UniversityDegreeDTO,
): UniversityDegreeEntity => {
  return {
    id: String(dto.id),
    universityId: String(dto.id_university),
    degreeId: String(dto.id_degree),
  };
};
