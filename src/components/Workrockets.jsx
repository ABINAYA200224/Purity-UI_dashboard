import React from "react";
import rocket from "../assets/images/rocket.png";
import arrowmark2 from "../assets/images/arrowmark2.png";
function Workrockets() {
  return (
    <div className="mt-[20px] ">
      <div className="relative">
        <img
          src={rocket}
          alt="Image"
          class="w-[588px] h-[250px] object-cover  rounded-md"
        />
        <div className="absolute inset-x-0 top-0 flex ">
          <div className="text-[#FFFFFF] flex flex-col gap-[7.5rem]">
            <div>
              <p className="text-[14px] font-bold ml-[10px] mt-[10px]">
                Work with the Rockets
              </p>
              <p className="text-[12px] font-bold w-[416px] ml-[10px] mt-[10px]">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
            </div>

            <div className="flex gap-[5px] ml-[10px]">
              <div>
                <p className="text-[12px] font-bold text-[#FFFFFF]">
                  Read more
                </p>
              </div>
              <div className="flex justify-center items-center ">
                <img src={arrowmark2} className="w-[12px] h-[12px]"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workrockets;
