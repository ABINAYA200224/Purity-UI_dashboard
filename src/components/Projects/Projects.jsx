import React from "react";
import tickimg from "../../assets/images/tickimg.png";

import companiesimg1 from "../../assets/images/companiesimg1.png";
import membersimg1 from "../../assets/images/membersimg1.png";
import completion1 from "../../assets/images/completion1.png";
import companiesimg2 from "../../assets/images/companiesimg2.png";
import companiesimg3 from "../../assets/images/camponiesimg3.png";
import companiesimg4 from "../../assets/images/companiesimg4.png";
import companiesimg5 from "../../assets/images/companiesimg5.png";
import companiesimg6 from "../../assets/images/companiesimg6.png";
import membersimg2 from "../../assets/images/membersimg2.png";
import membersimg3 from "../../assets/images/membersimg3.png";
import membersimg4 from "../../assets/images/membersimg4.png";
import membersimg5 from "../../assets/images/membersimg5.png";
import membersimg6 from "../../assets/images/memberimg6.png";
import completion2 from "../../assets/images/completion2.png";
import completion3 from "../../assets/images/completion3.png";
import completion5 from "../../assets/images/completion5.png";
import completion6 from "../../assets/images/completion6 - Copy.png";

import moreimg from "../../assets/images/moreimg.png";
import Projectcard2 from "./Projectcard2";
import Projectcard from "./Projectcard";

function Projects() {
  return (
    <div className=" ml-[10px]">
      <div className="w-[54rem] h-[500px] bg-[#FFFFFF] rounded-2xl mt-[20px]">
        <div className=" flex justify-between ml-[20px]">
          <div className="mt-[20px]">
            <div>
              <h2 className="text-[14px] font-bold text-[#2D3748] ">
                Projects
              </h2>
            </div>

            <div className="flex">
              <div className="flex justify-center items-center">
                <img src={tickimg} className="w-[15px] h-[15px]"></img>
              </div>
              <div>
                <p className="text-[12px] font-normal text-[ #A0AEC0]">
                  30 done this month
                </p>
              </div>
            </div>
          </div>
          <div className="mr-[20px] mt-[20px]">
            <img src={moreimg}></img>
          </div>
        </div>

        <div className=" w-[95%] h-[500px] flex justify-center m-auto items-center">
          <div className="flex flex-col gap-[15px] mb-[40px]">
            <Projectcard2 />
            <Projectcard
              compani_img1={companiesimg1}
              compani_name="Chakra Soft UI Version"
              members_img={membersimg1}
              percentage="60%"
              completion={completion1}
              amount="$14,000"
            />
            <Projectcard
              compani_img1={companiesimg2}
              compani_name="Add Progress Track"
              members_img={membersimg2}
              percentage="10%"
              completion={completion2}
              amount="$3,000"
            />
            <Projectcard
              compani_img1={companiesimg3}
              compani_name="Fix Platform Errors"
              members_img={membersimg3}
              percentage="100%"
              completion={completion3}
              amount="Not set"
            />
            <Projectcard
              compani_img1={companiesimg4}
              compani_name="Launch our Mobile App"
              members_img={membersimg4}
              percentage="100%"
              completion={completion3}
              amount="$32,000"
            />
            <Projectcard
              compani_img1={companiesimg5}
              compani_name="Add the New Pricing Page"
              members_img={membersimg5}
              percentage="25%%"
              completion={completion5}
              amount="$400"
            />
            <Projectcard
              compani_img1={companiesimg6}
              compani_name="Redesign New Online Shop"
              members_img={membersimg6}
              percentage="40%"
              completion={completion6}
              amount="$7,600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
