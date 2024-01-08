import React from "react";

import orderline from "../../assets/images/orderline.png";
function Orders({dateandtime,amount,order,className}) {
  return (
    <div>
      <div className="flex gap-[30px]">
        <div className=" flex flex-col gap-[5px]">
          <div
            className="h-[27px] w-[20px] flex justify-center items-center">
            <img src={order} className={`w-[16px] h-[16px] ${className}`}></img>
          </div>
          <div className=" flex justify-center">
            <img src={orderline}></img>
          </div>
        </div>

        <div className=" flex flex-col gap-[5px]">
          <div>
            <h2 className="text-[12px] text-[#2D3748] font-bold">
              {amount}
            </h2>
          </div>
          <div>
            <p className="text-[#A0AEC0] text-[10px] font-bold">
              {dateandtime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
