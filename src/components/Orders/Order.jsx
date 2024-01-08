import React from "react";

import order1 from "../../assets/images/order1.png";
import order2 from "../../assets/images/order2.png";
import order3 from "../../assets/images/order3.png";
import order4 from "../../assets/images/order4.png";
import order5 from "../../assets/images/order5.png";
import order6 from "../../assets/images/order7.png";
import Orders from "./Orders";
function Order() {
  return (
    <div className="mt-[20px]">
      <div className="w-[400px] h-[500px] bg-[#FFFFFF] rounded-2xl ml-[20px]">
        <div className="flex flex-col gap-[20px]">
        <div className="ml-[20px] mt-[10px]">
          <div>
            <h1 className="text-[14px] font-bold text-[#2D3748]">
              Orders overview
            </h1>
          </div>

          <div className="flex">
            <div className=" text-[12px] font-bold text-[#48BB78]">+30% </div>
            <div className=" flex justify-center items-center">
              <p className="text-[12px] font-bold text-[#A0AEC0]">this month</p>
            </div>
          </div>
        </div>
        <div className="ml-[20px]">
          <Orders
           dateandtime="22 DEC 7:20 PM"
           amount="$2400, Design changes"
           order={order1}
       
          />
           
          <Orders
            dateandtime="21 DEC 11:21 PM"
            amount="New order #4219423"
            order={order2}
          />
          <Orders
            dateandtime="21 DEC 9:28 PM"
            amount="Server Payments for April"
            order={order3}
          />
          <Orders
            dateandtime="21 DEC 9:28 PM"
            amount="New card added for order #3210145"
            order={order4}
          />
          <Orders
            dateandtime="19 DEC 11:35 PM"
            amount="Unlock packages for Development"
            order={order5}
          />
          <Orders
            dateandtime="18 DEC 4:41 PM"
            amount="New order #9851258"
            order={order6}
            className="w-[20px] h-[19.5px]"
          />
        </div>
        </div>
      
      </div>
    </div>
  );
}

export default Order;
