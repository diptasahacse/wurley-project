"use client";

import { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IFilter } from "@/app/page";
interface IProps {
  setFilter: Dispatch<SetStateAction<IFilter>>;
  filter: IFilter;
}
const UsersFilter = ({ setFilter }: IProps) => {
  return (
    <div className=" flex gap-10">
      <Input
        placeholder=" Search by name"
        onChange={(e) => {
          setFilter((pre) => {
            return {
              ...pre,
              searchName: e.target.value,
            };
          });
        }}
        className=" w-full"
      />
      <Select
        onValueChange={(value: "name" | "role") => {
          setFilter((pre) => {
            return {
              ...pre,
              sort: value,
            };
          });
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort (asc)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="role">Role</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UsersFilter;
