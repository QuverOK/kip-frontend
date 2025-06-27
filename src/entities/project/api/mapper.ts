import { ProjectEntity } from "../model/domain";
import { ProjectDTO } from "./dto";

export const adaptProjectDTO = (dto: ProjectDTO): ProjectEntity => {
  return {
    id: String(dto.id_project),
    name: dto.project_name,
    description: dto.project_description,
    link: dto.project_link,
    resumeId: String(dto.id_resume),
  };
};
