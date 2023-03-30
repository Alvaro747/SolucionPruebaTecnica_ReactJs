import React from 'react'
import { IAddress } from '../../../interface/User';

const InformationAddress:React.FC<IAddress> =({location}) =>{

    const {number,name} = location.street
    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-gray-400">My Address is</h2>
          <h1 className="text-4xl">{number+ " " + name}</h1>
        </div>
      );
}

export default InformationAddress