import React from 'react'
import { InterfaceUrlImage } from '../../../interface/UrlImage'


const Imageprofile: React.FC<InterfaceUrlImage> = ({urlImage}) => {
  return (
    <div className='w-36  border-gray-300 p-1 border-2 bg-white rounded-full flex justify-center items-center'> 

      <img src={urlImage} alt="photo-profile" className='rounded-full ' />
    </div>
  )
}

export default Imageprofile