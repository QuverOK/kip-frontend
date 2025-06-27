import { OrganizationId } from "@/kernel/ids";

export type OrganizationEntity = {
  id: OrganizationId;
  name: string;
  location: string;
  websiteURL: string;
};
