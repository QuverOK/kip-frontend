import { z } from "zod";

export const UniversityDirectionDTOSchema = z.object({
  id_university_direction: z.number(),
  id_university: z.number(),
  id_direction: z.number(),
});
export type UniversityDirectionDTO = z.infer<
  typeof UniversityDirectionDTOSchema
>;
