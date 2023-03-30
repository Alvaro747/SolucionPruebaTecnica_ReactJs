import React from "react";

import { InterfaceItems } from "../../../../interface/Items";
import { RiUser3Fill, RiUser3Line } from "react-icons/ri";

const IconUser: React.FC<InterfaceItems> = ({ isFocus }) => {
  return (
    <div>{isFocus ? <RiUser3Fill size={35} /> : <RiUser3Line size={35} />}</div>
  );
};

export default IconUser;
