import { z } from "zod";

export const UserDTOSchema = z.object({
  id_user: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  birth_date: z.string(), // temp
  role_id: z.number(),
  created_at: z.string(), // temp
  last_login: z.string(), // temp
  profile_photo: z.string(),
  address: z.string(),
});

export type UserDTO = z.infer<typeof UserDTOSchema>;
