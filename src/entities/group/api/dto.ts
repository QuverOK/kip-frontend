import { z } from "zod";

export const GroupDTOSchema = z.object({
  id_group: z.number(),
  group_name: z.string(),
  start_year: z.date(),
  id_university: z.number(),
  id_direction: z.number(),
  id_education: z.number(),
});
export type GroupDTO = z.infer<typeof GroupDTOSchema>;
