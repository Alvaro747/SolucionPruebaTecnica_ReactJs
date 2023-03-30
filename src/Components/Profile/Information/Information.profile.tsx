import React from "react";
import { IUserName } from "../../../interface/User";

const Informationprofile: React.FC<IUserName> = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl text-gray-400">Hi, My name is</h2>
      <h1 className="text-4xl">{name.first + "" + name.last}</h1>
    </div>
  );
};

export default Informationprofile;
