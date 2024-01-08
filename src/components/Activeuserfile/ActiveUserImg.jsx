import React from 'react'
import percentage1 from '../../assets/images/percentage1.png'
import Userline from './Userline'
function ActiveUserImg() {
  return (
    <div className=''>
      
      <div className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center m-auto h-[269px]">
            <img src={percentage1} className='w-[400px] h-[200px]'></img>
              <div className="absolute index-x-0 top-0 flex items-center">
                <Userline/>
              </div>
            </div>
    </div>
  )
}

export default ActiveUserImg
