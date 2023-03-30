import React from "react";
import {InterfaceItems} from "../../../../interface/Items"

import { RiCalendarLine, RiCalendarFill } from "react-icons/ri";


const  IconCalendar:React.FC<InterfaceItems>=({ isFocus}) =>{
  return (
    <div>
      {isFocus ? <RiCalendarFill size={35} /> : <RiCalendarLine size={35} />}
    </div>
  );
}

export default IconCalendar;
