import React from "react";
import logo from "../../assets/images/logoimg.png";
import Navcard from "./Navcard";
import home from "../../assets/images/home.png";
import table from "../../assets/images/table.png";
import builing from "../../assets/images/builing.png";
import rtl from "../../assets/images/rtl.png";
import line from "../../assets/images/line.png";
import profile from "../../assets/images/profile.png";
import signin from "../../assets/images/signin.png";
import signup from "../../assets/images/signup.png";
import Navimg from "./Navimg";
function Navbar() {
  return (
    <div className="ml-[10px]">
      <div className="w-[200.5px] h-[800px] bg-[#F8F9FA]">
        <div className="flex flex-col fixed top-0 ">
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px] mt-[20px]">
              <div>
                <img src={logo} className="w-[22px] h-[22px]"></img>
              </div>

              <div className="flex justify-center items-center">
                <h2 className="font-bold text-[12px] text-[#2D3748]">
                  PURITY UI DASHBOARD
                </h2>
              </div>
            </div>
            <div className="mb-[20px] ">
              <img src={line} className=""></img>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-[200px] h-[40px] bg-[#FFFFFF] rounded-2xl ">
                <div className="flex gap-[10px] w-[100%]">
                  <div className="flex justify-center items-center ">
                    <div className="bg-[#4FD1C5] w-[30px] h-[30px] flex rounded-xl">
                      <img
                        src={home}
                        alt="card1"
                        className="flex m-auto justify-center h-[15px] w-[15px]"
                      ></img>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[40px]">
                    <p className="font-bold text-[#2D3748] text-[10px]">
                      Dashboard
                    </p>
                  </div>
                </div>
              </div>
              <div />
              <div className="flex flex-col gap-[25px]">
                <div>
                  <Navcard user_img={table} dashboard_name="Tables" />
                </div>
                <div>
                  <Navcard user_img={builing} dashboard_name="Billing" />
                </div>
                <div>
                  <Navcard user_img={rtl} dashboard_name="RTL" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[25px] ">
              <div>
                <h2 className="font-bold text-[10px] text-[#2D3748] mt-[25px]">
                  ACCOUNT PAGES
                </h2>
              </div>
              <div>
                <Navcard user_img={profile} dashboard_name="Profile" />
              </div>
              <div>
                <Navcard user_img={signin} dashboard_name="Sign In" />
              </div>
              <div>
                <Navcard user_img={signup} dashboard_name="Sign Up" />
              </div>
            </div>

            <div className="mt-[20px]">
              <Navimg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
