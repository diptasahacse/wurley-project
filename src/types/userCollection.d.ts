export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
export interface UserCollection {
  data: IUser[];
}
