import React from "react";

import { InterfaceItems } from "../../../../interface/Items";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";

const IconTelephone: React.FC<InterfaceItems> = ({ isFocus }) => {
  return (
    <div>
      {isFocus ? <BsTelephoneFill size={35} /> : <BsTelephone size={35} />}
    </div>
  );
};

export default IconTelephone;
