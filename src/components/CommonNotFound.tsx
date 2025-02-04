import React from "react";

interface IProps {
  message?: string;
}
const CommonNotFound = ({ message = "Data not found" }: IProps) => {
  return <div>{message}</div>;
};

export default CommonNotFound;
