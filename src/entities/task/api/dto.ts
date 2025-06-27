import { z } from "zod";

export const TaskDTOSchema = z.object({
  id_task: z.number(),
  task_name: z.string(),
  task_type: z.string(),
  id_group: z.number(),
  task_description: z.string(),
});
export type TaskDTO = z.infer<typeof TaskDTOSchema>;
