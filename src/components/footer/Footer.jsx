import React from "react";

function Footer() {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between ">
        <div className="flex gap-[5px]">
          <h2 className="text-[12px] text-[#A0AEC0] font-bold">
            @ 2021, Made with ❤️ by
          </h2>
          <h2 className="text-[12px] text-[#38B2AC] font-bold">
            Creative Tim & Simmmple
          </h2>
          <h2 className="text-[12px] text-[#A0AEC0] font-bold">
            for a better web
          </h2>
        </div>
        <div className="flex gap-[20px]">
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">
              Creative Tim
            </p>
          </div>
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">Simmmple</p>
          </div>
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">Blog</p>
          </div>
          <div>
            <p className="text-[#A0AEC0] text-[12px] font-normal">License</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
