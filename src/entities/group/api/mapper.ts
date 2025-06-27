import { GroupEntity } from "./../model/domain";
import { GroupDTO } from "./dto";

export const adaptGroupDTO = (dto: GroupDTO): GroupEntity => {
  return {
    id: String(dto.id_group),
    name: dto.group_name,
    startYear: dto.start_year,
    universityId: String(dto.id_university),
    directionId: String(dto.id_direction),
    educationId: String(dto.id_education),
  };
};
