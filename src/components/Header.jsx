import React from "react";
import searchicon from "../assets/images/searchicon.svg";
import personicon from "../assets/images/personicon.png";
import settingicon from "../assets/images/settingicon.png";
import notificaton from "../assets/images/notificationicon.png";
function Header() {
    return (
      <>
      <div className="container ml-[8px]">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-start gap-[7px] ">
            <div className="flex gap-[5px]">
              <div className="text-[#A0AEC0] text-[12px] font-bold">page</div>
              <div className="text-[12px] font-bold text-[#2D3748]">/ Dashboard</div>
            </div>
  
            <div className="text-[14px] font-bold text-[#2D3748]">Dashboard</div>
          </div>
  
          <div className="flex  justify-end">
            <div className="flex gap-[10px]">
              <div className="flex bg-[#fff] w-[148px]  h-[28px]  m-[auto] rounded-2xl">
                <div className="flex m-auto justify-center gap-[5px]">
                  <div className="flex justify-center m-auto">
                    <img src={searchicon} className="w-[15px] h-[15px]"></img>
                  </div>
  
                  <div className="flex justify-center">
                    <input
                      type="text"
                      className="  text-[12px] w-[120px] h-[20px] flex justify-center border-[#A0AEC0]"
                      placeholder="Type here"
                    ></input>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-[10px]">
                <div className="flex">
                  <div className="flex text-[12px] m-auto font-bold">
                    <img src={personicon} className="w-[12px] h-[12px] "></img>
                  </div>
                  <div className="flex m-auto">
                    <p className="text-[12px] font-bold">sign in</p>
                  </div>
                </div>
  
                <div className="flex m-auto">
                  <img src={settingicon} className="w-[12px] h-[12px]"></img>
                </div>
                <div className="flex m-auto">
                  <img src={notificaton} className="w-[12px] h-[12px]"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      
  
      
    );
  }
  
  export default Header;
  