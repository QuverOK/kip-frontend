import { GroupId, TaskId } from "@/kernel/ids";

export type TaskEntity = {
  id: TaskId;
  name: string;
  type: string;
  description: string;
} & TaskConnections;

export type TaskConnections = {
  groupId: GroupId;
};
