import { z } from "zod";

export const UniversityDTOSchema = z.object({
  id_university: z.number(),
  short_name: z.string(),
  full_name: z.string(),
  location: z.string(),
  website: z.string(),
  contact_info: z.string(),
});

export type UniversityDTO = z.infer<typeof UniversityDTOSchema>;
