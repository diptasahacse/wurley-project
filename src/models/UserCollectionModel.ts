import { IUser, UserCollection } from "@/types/userCollection";

export class UserModel {
  private readonly id: number;
  private readonly name: string;
  private readonly email: string;
  private readonly role: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.role = data.role;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

export class UserCollectionModel {
  private readonly data: UserModel[];

  constructor(data: UserCollection) {
    this.data = data.data.map((user) => new UserModel(user));
  }
  getData() {
    return this.data;
  }

  getFilteredData(name: string, sortBy: "name" | "role" | undefined) {
    const filteredByName = this.data.filter((user) =>
      user.getName().toLowerCase().includes(name.toLowerCase())
    );
    if (sortBy === "name") {
      const sortedData = filteredByName.sort((a, b) => {
        if (a.getName() < b.getName()) {
          return -1;
        }
        if (a.getName() > b.getName()) {
          return 1;
        }
        return 0;
      });
      return sortedData;
    }
    if (sortBy === "role") {
      const sortedData = filteredByName.sort((a, b) => {
        if (a.getRole() < b.getRole()) {
          return -1;
        }
        if (a.getRole() > b.getRole()) {
          return 1;
        }
        return 0;
      });
      return sortedData;
    }
    return filteredByName;
  }
}
