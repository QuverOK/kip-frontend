import { z } from "zod";

export const OrganizationDTOSchema = z.object({
  id_organization: z.number(),
  organization_name: z.string(),
  location: z.string(),
  website: z.string(),
});
export type OrganizationDTO = z.infer<typeof OrganizationDTOSchema>;
