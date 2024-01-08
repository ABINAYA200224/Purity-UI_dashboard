import React from "react";

function Card({ amount, percentage, status_day, className ,img}) {
  return (
    <div className="ml-[7px] mt-[20px]">
      <div className="w-[300px] h-[50px] bg-[#fff] rounded-2xl ">
        <div className="flex justify-center m-auto">
          <div className="flex justify-between w-[100%]">
            <div className="w-[80%] flex flex-col justify-center m-auto ml-[10px]">
              <p className="font-bold text-[12px] text-[#A0AEC0]">
                {status_day}
              </p>
              <div className="flex gap-[10px]">
                <div>
                  <h2 className="font-bold text-[14px] text-[#2D3748]">{amount}</h2>
                </div>
                <div className="flex justify-center items-center">
                  <h2
                    className={`font-bold text-[11px] text-[#48BB78]  ${className}`}
                  >
                    {percentage}
                  </h2>                 
                </div>
              </div>
            </div>
            <div className="w-[20%] h-[50px] flex justify-center items-center m-auto">
              <div className="bg-[#4FD1C5] w-[30px] h-[30px] flex rounded-xl">
                <img
                  src={img}
                  alt="card1"
                  className="flex m-auto justify-center h-[22.5px] w-[22.5px]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
