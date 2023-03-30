import React from 'react'
import { IBirthday } from '../../../interface/User';

const InformationBirthday:React.FC<IBirthday> = ({dob}) => {

const date = dob.date.split("-")
const year = date[0]
const month = date[1]
const day = date[2].split("T")[0]

    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-gray-400">My Birthday is</h2>
          <h1 className="text-4xl">{day+"/"+month+"/"+year}</h1>
        </div>
      );
}

export default InformationBirthday