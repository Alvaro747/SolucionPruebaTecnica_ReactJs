import React from "react";
import { HiLockClosed, HiOutlineLockClosed } from "react-icons/hi";
import {InterfaceItems} from "../../../../interface/Items"

const IconLoock : React.FC<InterfaceItems> = ({isFocus}) =>{
  return (
    <div>
      {isFocus ? <HiLockClosed size={35}/>:  <HiOutlineLockClosed size={35} />}
      
     
    </div>
  );
}

export default IconLoock;
