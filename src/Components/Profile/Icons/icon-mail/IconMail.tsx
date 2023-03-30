import React from "react";

import {InterfaceItems} from "../../../../interface/Items"

import { RiMailLine, RiMailFill } from "react-icons/ri";

const IconMail : React.FC<InterfaceItems> = ({isFocus}) => {
  return (
    <div>
        {isFocus ? <RiMailFill size={35} />: <RiMailLine size={35} />}
      
      
    </div>
  );
}

export default IconMail;
