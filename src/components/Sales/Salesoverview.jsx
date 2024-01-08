import React from "react";

function Salesoverview() {
  return (
    <div>
      <div className="mt-[20px] ml-[20px]">
        <h2 className="text-[14px] font-bold text-[#2D3748]">Sales overview</h2>
        <div className="flex gap-[5px]">
          <div>
            <p className="text-[12px] font-bold text-[#48BB78]">(+5) more </p>
          </div>
          <div className="h-[19px] flex items-center justify-center">
            <p className="text-[12px] text-[#A0AEC0] font-bold flex justify-center items-center m-auto">
              in 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salesoverview;
