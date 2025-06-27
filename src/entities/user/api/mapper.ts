import { UserEntity } from "../model/domain";
import { UserDTO } from "./dto";

export function adaptUserDTO(dto: UserDTO): UserEntity {
  return {
    id: String(dto.id_user),
    passwordHash: dto.password,
    profilePhoto: dto.profile_photo,
    lastLogin: dto.last_login,
    createdAt: dto.created_at,
    email: dto.email,
    phone: dto.phone,
    address: dto.address,
    firstName: dto.first_name,
    lastName: dto.last_name,
    middleName: dto.middle_name,
    roleId: String(dto.role_id),
    birthDate: dto.birth_date,
  };
}
