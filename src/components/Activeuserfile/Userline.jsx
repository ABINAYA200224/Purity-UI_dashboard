import React from "react";
import saleimg1 from "../../assets/images/saleimg1.png";
import saleimg2 from "../../assets/images/saleimg2.png";
import saleimg3 from "../../assets/images/saleimg3.png";
import saleimg4 from "../../assets/images/saleimg4.png";
import saleimg5 from "../../assets/images/saleimg5.png";
import saleimg6 from "../../assets/images/saleimg6.png";
import saleimg7 from "../../assets/images/saleimg7.png";
import saleimg8 from "../../assets/images/saleimg8.png";
import saleimg9 from "../../assets/images/saleimg9.png";
function Userline() {
  return (
    <div className="">
      <div className="flex gap-[25px]">
        <div className="flex flex-col gap-[10px] mt-[60px] ml-[10px]">
          <p className="text-[10px] text-[#FFFFFF] font-bold">500</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">400</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">300</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">200</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">100</p>
          <p className="text-[10px] text-[#FFFFFF] font-bold">0</p>
        </div>

        <div className="flex gap-[30px] ">
          <div  className="mt-[140px]">
            <img src={saleimg1} className="w-[5px] h-[60px] "></img>
          </div>
          <div className="mt-[148px]" >
            <img src={saleimg2} className="w-[5px] h-[50px] "></img>
          </div>
          <div className="mt-[158px]">
            <img src={saleimg3} className="w-[5px] h-[40px] "></img>
          </div>
          <div className="mt-[144px]">
            <img src={saleimg4} className="w-[5px] h-[55px] "></img>
          </div>
          <div className="mt-[109px]">
            <img src={saleimg5} className="w-[5px] h-[90px] "></img>
          </div>
          <div className="mt-[129px]">
            <img src={saleimg6} className="w-[5px] h-[70.5px] "></img>
          </div>
          <div className="mt-[109px]">
            <img src={saleimg7} className="w-[5px] h-[90px] "></img>
          </div>
          <div className="mt-[138px]">
            <img src={saleimg8} className="w-[5px] h-[60px] "></img>
          </div>
          <div className="mt-[166px]">
            <img src={saleimg9} className="w-[5px] h-[30px] "></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userline;
