import { z } from "zod";

export const ResponsibilityDTOSchema = z.object({
    id_responsibility: z.number(),
    id_work: z.number(),
    responsibility: z.string(),
  });
  export type ResponsibilityDTO = z.infer<typeof ResponsibilityDTOSchema>;