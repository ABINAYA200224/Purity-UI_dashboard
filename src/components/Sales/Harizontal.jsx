import React from "react";
import lines from "../../assets/images/lines.png";

function Harizontal() {
  return (
    <div >
      <div className="flex flex-col gap-[24px]">
        <div className="flex gap-[30px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">500</p>
          </div>
          <div className="flex justify-start  items-center w-[680px]">
            <img src={lines} className="w-600px"></img>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">400</p>
          </div>
          <div className="flex justify-center items-center w-[680px]">
            <img src={lines}></img>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">300</p>
          </div>
          <div className="flex justify-center items-center w-[680px]">
            <img src={lines}></img>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">200</p>
          </div>
          <div className="flex justify-center items-center w-[680px]">
            <img src={lines}></img>
          </div>
        </div>

        <div className="flex gap-[30px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">100</p>
          </div>
          <div className="flex justify-center items-center w-[680px] ">
            <img src={lines}></img>
          </div>
        </div>

        <div className="flex gap-[40px]">
          <div>
            <p className="text-[10px] text-[#CBD5E0] font-bold ml-[15px]">0</p>
          </div>
          <div className="flex justify-center items-center w-[680px]">
            <img src={lines}></img>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Harizontal;
