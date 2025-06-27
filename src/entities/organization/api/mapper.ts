import { OrganizationEntity } from "../model/domain";
import { OrganizationDTO } from "./dto";

export const adaptOrganizationDTO = (
  dto: OrganizationDTO,
): OrganizationEntity => {
  return {
    id: String(dto.id_organization),
    name: dto.organization_name,
    location: dto.location,
    websiteURL: dto.website,
  };
};
