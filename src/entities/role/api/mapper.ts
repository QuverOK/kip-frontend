import { RoleEntity } from "../entities/domain";
import { RoleDTO } from "./dto";

export function adaptRoleDTO(dto: RoleDTO): RoleEntity {
  return {
    id: String(dto.id_role),
    name: dto.role_name,
  };
}
