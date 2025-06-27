import { RoleId, UserId } from "@/kernel/ids";

export type UserEntity = {
  id: UserId;
  passwordHash: string;
  birthDate: string; // temp
} & UserProperties;

export type UserProperties = UserProfile &
  UserContacts &
  UserFullName &
  UserConnetions;

export type UserProfile = {
  profilePhoto: string;
  lastLogin: string; // temp
  createdAt: string; // temp
};

export type UserContacts = {
  email: string;
  phone: string;
  address: string;
};

export type UserFullName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type UserConnetions = {
  roleId: RoleId;
};
