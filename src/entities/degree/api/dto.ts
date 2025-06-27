import { z } from "zod";

export const DegreeDTOSchema = z.object({
  id_degree: z.number(),
  degree_name: z.string(),
});
export type DegreeDTO = z.infer<typeof DegreeDTOSchema>;
