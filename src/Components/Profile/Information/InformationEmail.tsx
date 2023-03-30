import React from 'react'
import { IEmail } from '../../../interface/User';

const InformationEmail:React.FC<IEmail> = ({email}) => {
    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-gray-400">My Email is</h2>
          <h1 className="text-4xl">{email}</h1>
        </div>
      );
}

export default InformationEmail