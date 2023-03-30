import React, { useState } from "react";
import { TableUserByNationality } from "./TableUserByNationality";

const UserNationality = () => {

    const [selectedValue, setSelectedValue] = useState('CA');

    function handleSelectChange(event:any) {
        setSelectedValue(event.target.value);
      }
  return (
    <>
      <section className="container px-5 mx-auto p-3">
        <div>
          <div>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value="1" disabled>Nacionalidades</option>
                <option value="CA">CA</option>
                <option value="US">US</option>
                <option value="NO">NO</option>
            </select>
          </div>
        </div>

        <TableUserByNationality nationality={selectedValue}/>


        
      </section>
    </>
  );
};

export default UserNationality;
