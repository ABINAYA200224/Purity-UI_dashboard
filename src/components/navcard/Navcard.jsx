import React from 'react'

function Navcard({dashboard_name,user_img}) {
  return (
    <div>
       <div className="flex gap-[10px]">
        <div className="bg-[#FFFFFF] w-[25px] h-[25px] flex rounded-xl">
          <img
            src={user_img}
            alt="card1"
            className="flex m-auto justify-center h-[15.5px] w-[15.5px]"
          ></img>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[10px] text-[#A0AEC0] font-bold">{dashboard_name}</p>
        </div>
      </div>
    </div>
  )
}

export default Navcard
