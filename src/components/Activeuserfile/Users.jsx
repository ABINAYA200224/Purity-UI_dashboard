import React from "react";
// import user1 from "../../assets/images/user1.png";
// import percentage3 from '../../assets/images/percentage3.png'
function Users({user_name,amount,progress,user_imgae}) {
  return (
    <div>
      <div className="flex gap-[10px]">
        <div className="bg-[#4FD1C5] w-[25px] h-[25px] flex rounded-xl">
          <img
            src={user_imgae}
            alt="card1"
            className="flex m-auto justify-center h-[12.5px] w-[12.5px]"
          ></img>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[12px] text-[#A0AEC0] font-bold">{user_name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
      <h2 className="text-[14px] text-[#2D3748] font-bold">
        {amount}
      </h2>
      <img src={progress}></img>
      </div>
     
    </div>
  );
}

export default Users;