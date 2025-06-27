import { z } from "zod";
import axios from "axios";

import { adaptUserDTO } from "./mapper";
import { UserDTO, UserDTOSchema } from "./dto";
import { UserEntity } from "../model/domain";
import { apiUsersUrl } from "@/shared";

export const getListUsers = async (): Promise<UserEntity[]> => {
  const response = await axios.get<UserDTO[]>(apiUsersUrl);
  const validatedUsers = z.array(UserDTOSchema).parse(response.data);

  return validatedUsers.map(adaptUserDTO);
};
