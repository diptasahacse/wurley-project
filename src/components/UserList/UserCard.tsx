import { UserModel } from "@/models/UserCollectionModel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface IProps {
  user: UserModel;
}
const UserCard = ({ user }: IProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{user.getName()}</span>{" "}
          <span className="  font-normal">{user.getRole()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{user.getEmail()}</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
