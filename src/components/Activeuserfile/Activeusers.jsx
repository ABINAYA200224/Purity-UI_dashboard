import React from "react";
import Users from "./Users";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

import percentage2 from "../../assets/images/percentage2.png";
import percentage3 from "../../assets/images/percentage3.png";
import percentage4 from "../../assets/images/percentage4.png";

import ActiveUserImg from "./ActiveUserImg";
function Active() {
  return (
    <div classname=" ">
      <div className=" bg-[#fff] w-[30rem] h-[420px] ml-[10px] mt-[20px] rounded-2xl">
        <div className="">
        <ActiveUserImg/>
        </div>
        
        <div className="flex flex-col gap-[20px] px-[30px]">
          <div>
            <div>
              <h1 className="text-[14px] font-bold text-[#2D3748]">
                Active Users
              </h1>
            </div>

            <div className="flex">
              <div className=" text-[12px] font-bold text-[#48BB78]">(+23)</div>
              <div className=" flex justify-center items-center">
                <p className="text-[12px] font-bold text-[#A0AEC0]">
                  than last week
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-[50px]">
            <Users
              user_imgae={user1}
              user_name="Users"
              amount="32,984"
              progress={percentage4}
            />
            <Users
              user_imgae={user2}
              user_name="Clicks"
              amount="2,42m"
              progress={percentage2}
            />
            <Users
              user_imgae={user3}
              user_name="Sales"
              amount="2,400$"
              progress={percentage3}
            />
            <Users
              user_imgae={user4}
              user_name="Items"
              amount="320"
              progress={percentage4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Active;
