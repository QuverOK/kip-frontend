import { UniversityId } from "@/kernel/ids";

export type UniversityEntity = {
  id: UniversityId;
} & UniversityNaming &
  UniversityProperties;

export type UniversityNaming = {
  shortName: string;
  fullName: string;
};

export type UniversityProperties = {
  location: string;
  website: string;
  contactInfo: string;
};
