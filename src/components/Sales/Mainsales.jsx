import React from "react";
import Salesoverview from "./Salesoverview";
import Harizontal from "./Harizontal";
import Overview from "./Overview";
import Vertical from "./Vertical";

function Mainsales() {
  return (
    <div>
      <div className=" bg-[#fff] w-[50rem] h-[420px] ml-[10px] mt-[20px] rounded-2xl">
        <div className="flex flex-col gap-[40px] m-[auto]">
          <div>
            <Salesoverview />
          </div>

          <div className="m-auto">
            <div className="relative bg-cover bg-center bg-no-repeat ">
              <Harizontal />
              <div className="absolute index-x-0 bottom-0 flex items-center justify-center">
                <Overview />
              </div>
            </div>
            <Vertical />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainsales;
