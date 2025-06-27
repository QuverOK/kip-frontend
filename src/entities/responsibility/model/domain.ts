import { WorkId } from "@/kernel/ids";
import { ResponsibilityId } from "@/kernel/ids";

export type ResponsibilityEntity = {
  id: ResponsibilityId;
  value: string;
} & ResponsibilityConnections;

export type ResponsibilityConnections = {
  workId: WorkId;
};
