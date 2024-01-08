import React from "react";
import endline from "../../assets/images/endline.png";
function Projectcard({
  compani_img1,
  compani_name,
  members_img,
  percentage,
  completion,
  amount,

  
}) {
  return (
    <div className="flex flex-col gap-[15px]">
      <table class="table-auto">
        <thead>
          <tr>
            <th class=" w-[310px]">
              <div className="flex gap-[10px]">
                <div>
                  <img src={compani_img1} className="w-[20px] h-[19.5px]"></img>
                </div>
                <div className="">
                  <p className="text-[14px] font-bold text-[#2D3748]">
                    {compani_name}
                  </p>
                </div>
              </div>
            </th>
            <th class=" w-[143px]">
              <div className="flex justify-start items-center ">
                <img src={members_img} className="w-[74px] h-[23px]"></img>
              </div>
            </th>
            <th class="w-[155px]">
              <div>
                <p className="text-[14px] font-bold text-[#2D3748]">{amount}</p>
              </div>
            </th>
            <th class="">
              <div className="flex flex-col">
                <div className="text-[#4FD1C5] text-[14px] font-bold">
                  <p className="flex justify-start">{percentage}</p>
                </div>
                <div>
                  <img src={completion} className=" w-[125px] h-[3px]"></img>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div>
        <img src={endline} className="w-[742px]"></img>
      </div>
    </div>
  );
}

export default Projectcard;
