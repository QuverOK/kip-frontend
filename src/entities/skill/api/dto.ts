import { z } from "zod";

export const SkillDTOSchema = z.object({
    id_skill: z.number(),
    skill_name: z.string(),
  });
  export type SkillDTO = z.infer<typeof SkillDTOSchema>;