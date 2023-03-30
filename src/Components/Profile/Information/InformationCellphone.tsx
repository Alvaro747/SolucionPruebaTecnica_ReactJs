import React from 'react'
import { ICell } from '../../../interface/User';

const InformationCellphone:React.FC<ICell> = ({cell}) => {
    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-gray-400">My Cellphone is</h2>
          <h1 className="text-4xl">{cell}</h1>
        </div>
      );
}

export default InformationCellphone