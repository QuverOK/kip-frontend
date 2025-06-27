import { z } from "zod";

export const SocialNetworkDTOSchema = z.object({
  id_social_network_type: z.number(),
  network_name: z.string(),
});
export type SocialNetworkDTO = z.infer<typeof SocialNetworkDTOSchema>;
