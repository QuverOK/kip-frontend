import { z } from "zod";

export const ResumeDTOSchema = z.object({
  id_resume: z.number(),
  about_me: z.string(),
  id_user: z.number(),
});

export type ResumeDTO = z.infer<typeof ResumeDTOSchema>;
