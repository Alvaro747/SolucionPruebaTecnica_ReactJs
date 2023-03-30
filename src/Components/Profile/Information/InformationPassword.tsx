import React from 'react'
import { IUserLogin } from "../../../interface/User";


const  InformationPassword: React.FC<IUserLogin> = ({login}) =>{
    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-gray-400">My Password is</h2>
          <h1 className="text-4xl">{login.password }</h1>
        </div>
      );
}

export default InformationPassword