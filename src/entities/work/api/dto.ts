import { z } from "zod";

export const WorkDTOSchema = z.object({
  id_work: z.number(),
  id_resume: z.number(),
  position: z.string(),
  start_date: z.date(),
  end_date: z.date(),
});
export type WorkDTO = z.infer<typeof WorkDTOSchema>;
