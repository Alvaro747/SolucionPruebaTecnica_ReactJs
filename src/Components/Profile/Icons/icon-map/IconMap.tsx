import React from "react";

import { InterfaceItems } from "../../../../interface/Items";

import { RiRoadMapFill, RiRoadMapLine } from "react-icons/ri";

const IconMap: React.FC<InterfaceItems> = ({ isFocus }) => {
  return (
    <div>
      {isFocus ? <RiRoadMapFill size={35} /> : <RiRoadMapLine size={35} />}
    </div>
  );
};

export default IconMap;
