import { DegreeEntity } from "../model/domain";
import { DegreeDTO } from "./dto";

export const adaptDegreeDTO = (dto: DegreeDTO): DegreeEntity => {
  return {
    id: String(dto.id_degree),
    name: dto.degree_name,
  };
};
