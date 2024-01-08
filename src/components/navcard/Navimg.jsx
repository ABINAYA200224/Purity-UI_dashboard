import React from "react";
import questionmark from "../../assets/images/questionmark.png";
function Navimg() {
  return (
    <div>
      <div className="w-[180px] h-[180px] bg-[#4FD1C5] rounded-2xl">
        <div className="flex flex-col gap-[45px] ">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-xl justify-start ml-[10px] mt-[10px]">
            <img
              src={questionmark}
              alt="card1"
              className="flex m-auto justify-center h-[24.5px] w-[24.5px]"
            ></img>
          </div>
          <div className=" flex flex-col gap-[15px] ">
            <div className="ml-[10px]">
              <h2 className="font-bold text-[14px] text-[#FFFFFF]">
                Need help?
              </h2>
              <p className="font-bold text-[12px] text-[#FFFFFF]">
                Please check our docs
              </p>
            </div>

            <div className=" flex justify-center items-center m-auto">
              <div className="w-[150px] h-[30px] bg-[#FFFFFF] rounded-2xl flex justify-center items-center ">
                <div className="flex justify-center items-center m-auto">
                  <h2 className="font-bold text-[10px] text-[#2D3748]">
                    DOCUMENTATION
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navimg;
