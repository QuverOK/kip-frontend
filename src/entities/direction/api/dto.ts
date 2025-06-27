import { z } from "zod";

export const DirectionDTOSchema = z.object({
  id_direction: z.number(),
  direction_code: z.string(),
  direction_name: z.string(),
});
export type DirectionDTO = z.infer<typeof DirectionDTOSchema>;
