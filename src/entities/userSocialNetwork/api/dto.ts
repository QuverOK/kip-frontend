import { z } from "zod";

export const UserSocialNetworkDTOSchema = z.object({
    id_user_social_network: z.number(),
    id_resume: z.number(),
    id_social_network_type: z.number(),
    profile_link: z.string().url(),
  });
  export type UserSocialNetworkDTO = z.infer<typeof UserSocialNetworkDTOSchema>;