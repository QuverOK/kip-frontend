import { ResumeEntity } from "../model/domain";
import { ResumeDTO } from "./dto";

export function adaptResumeDTO(dto: ResumeDTO): ResumeEntity {
  return {
    id: String(dto.id_resume),
    aboutMe: dto.about_me,
    userId: String(dto.id_user),
  };
}
