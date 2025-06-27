import { ResponsibilityEntity } from "../model/domain";
import { ResponsibilityDTO } from "./dto";

export const adaptResponsibilityDTO = (
  dto: ResponsibilityDTO,
): ResponsibilityEntity => {
  return {
    id: String(dto.id_responsibility),
    value: dto.responsibility,
    workId: String(dto.id_work),
  };
};
