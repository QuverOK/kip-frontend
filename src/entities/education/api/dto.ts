import { z } from "zod";

export const EducationDTOSchema = z.object({
  id_education: z.number(),
  id_resume: z.number(),
  id_university: z.number(),
  id_degree: z.number(),
  id_direction: z.number(),
  group_number: z.number(),
  start_date: z.date(),
  end_date: z.date(),
  status: z.string(),
});
export type EducationDTO = z.infer<typeof EducationDTOSchema>;
