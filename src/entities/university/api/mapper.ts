import { UniversityEntity } from "../entities/domain";
import { UniversityDTO } from "./dto";

export function adaptUniversityDTO(dto: UniversityDTO): UniversityEntity {
  return {
    id: String(dto.id_university),
    shortName: dto.short_name,
    fullName: dto.full_name,
    location: dto.location,
    website: dto.website,
    contactInfo: dto.contact_info,
  };
}
