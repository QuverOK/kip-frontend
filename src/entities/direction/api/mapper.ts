import { DirectionEntity } from "../model/domain";
import { DirectionDTO } from "./dto";

export const adaptDirectionDTO = (dto: DirectionDTO): DirectionEntity => {
  return {
    id: String(dto.id_direction),
    code: dto.direction_code,
    name: dto.direction_name,
  };
};
