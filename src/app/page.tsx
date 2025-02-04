"use client";
import CommonNotFound from "@/components/CommonNotFound";
import UserCard from "@/components/UserList/UserCard";
import UsersFilter from "@/components/UserList/UsersFilter";
import { UserCollectionModel } from "@/models/UserCollectionModel";
import { userCollection } from "@/storage/users";
import { UserCollection } from "@/types/userCollection";
import { useState } from "react";
export interface IFilter {
  searchName: string;
  sort: "name" | "role" | undefined;
  sortedOrder: "asc" | "desc";
}
export default function Home() {
  // Imagine the data is came from the server
  const [userCollectionResponse] = useState<UserCollection>(userCollection);

  const [filter, setFilter] = useState<IFilter>({
    searchName: "",
    sort: undefined,
    sortedOrder: "asc",
  });

  const userList = new UserCollectionModel(
    userCollectionResponse
  ).getFilteredData(filter.searchName, filter.sort);

  return (
    <div className="container mx-auto px-10 py-10">
      <div className=" space-y-5">
        <UsersFilter filter={filter} setFilter={setFilter} />
        <div className=" text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {userList.length ? (
            userList.map((user) => <UserCard key={user.getId()} user={user} />)
          ) : (
            <CommonNotFound />
          )}
        </div>
      </div>
    </div>
  );
}
