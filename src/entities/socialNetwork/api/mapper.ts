import { SocialNetworkDTO } from "./dto";

export const adaptSocialNetworkDTO = (dto: SocialNetworkDTO) => {
  return {
    id: String(dto.id_social_network_type),
    name: dto.network_name,
  };
};
