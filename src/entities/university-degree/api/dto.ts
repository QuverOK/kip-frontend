import { z } from "zod";

export const UniversityDegreeDTOSchema = z.object({
  id: z.number(),
  id_university: z.number(),
  id_degree: z.number(),
});
export type UniversityDegreeDTO = z.infer<typeof UniversityDegreeDTOSchema>;
