import { z } from "zod";

export const RoleDTOSchema = z.object({
  id_role: z.number(),
  role_name: z.string(),
});

export type RoleDTO = z.infer<typeof RoleDTOSchema>;
