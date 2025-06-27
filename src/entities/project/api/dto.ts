import { z } from "zod";

export const ProjectDTOSchema = z.object({
    id_project: z.number(),
    id_resume: z.number(),
    project_name: z.string(),
    project_description: z.string(),
    project_link: z.string().url(),
  });
  export type ProjectDTO = z.infer<typeof ProjectDTOSchema>;