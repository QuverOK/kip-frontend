import { SkillEntity } from "../model/domain";
import { SkillDTO } from "./dto";

export const adaptSkillDTO = (dto: SkillDTO): SkillEntity => {
  return {
    id: String(dto.id_skill),
    name: dto.skill_name,
  };
};
