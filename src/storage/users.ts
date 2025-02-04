import { IUser, UserCollection } from "@/types/userCollection";
const userList: IUser[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
  },
  {
    id: 3,
    name: "Mark Johnson",
    email: "mark.johnson@example.com",
    role: "Moderator",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "User",
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@example.com",
    role: "Editor",
  },
  {
    id: 6,
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    role: "Admin",
  },
  {
    id: 7,
    name: "James Anderson",
    email: "james.anderson@example.com",
    role: "User",
  },
  {
    id: 8,
    name: "Laura Thomas",
    email: "laura.thomas@example.com",
    role: "Moderator",
  },
  {
    id: 9,
    name: "Daniel White",
    email: "daniel.white@example.com",
    role: "Editor",
  },
  {
    id: 10,
    name: "Olivia Harris",
    email: "olivia.harris@example.com",
    role: "User",
  },
  {
    id: 11,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    id: 12,
    name: "John Dse",
    email: "john.dse@example.com",
    role: "Super Admin",
  },
  {
    id: 13,
    name: "Andrew Smith",
    email: "john.dse@example.com",
    role: "Super Admin",
  },
];
export const userCollection: UserCollection = {
  data: userList,
};
