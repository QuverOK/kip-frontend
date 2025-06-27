import { TaskEntity } from "../model/domain";
import { TaskDTO } from "./dto";

export const adaptTaskDTO = (dto: TaskDTO): TaskEntity => {
  return {
    id: String(dto.id_task),
    name: dto.task_name,
    type: dto.task_type,
    description: dto.task_description,
    groupId: String(dto.id_group),
  };
};
