import React from 'react'
import aviate_logo from "../assets/aviate_logo.png";
import Ellipse from "../assets/Ellipse.png";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector1.png";
import Messages from "../assets/Messages.png";
import YellowDot from "../assets/YellowDot.png";
import bell from "../assets/bell.png";
import bell1 from "../assets/bell1.png";
import Reward from "../assets/Reward.png";
import Reward1 from "../assets/Reward1.png";

const NavBar = () => {
  return (
    <>
        <div className="top-nav-bar bg-[#22506C] h-24 flex items-center justify-between">
          <div className="w-48 h-14 m-5">
            <img src={aviate_logo} alt="" />
          </div>

          <div className="w-[600px] h-[53px] relative">
            <img className="absolute top-3 left-5" src={Vector} alt="" />
            <img className="absolute top-8 left-9" src={Vector1} alt="" />
            <input
              type="text"
              placeholder="                  Type for Search"
              className="rounded-xl w-full h-full"
            />
          </div>
          <div className="flex">
          <div className="ml-6 relative mt-1">
              <img
                className="h-[18px] absolute left-5 top-1"
                src={YellowDot}
                alt=""
              />
              <div className="mt-4">
                <img className="" src={Messages} alt="" />
                
              </div>
            </div>

            <div className="ml-9 relative">
              <img
                className="h-[18px] absolute left-5 top-1"
                src={YellowDot}
                alt=""
              />
              <div className="mt-4">
                <img className="" src={bell} alt="" />
                <img className="ml-2" src={bell1} alt="" />
              </div>
            </div>

            <div className="ml-9 relative">
              <img
                className="h-[18px] absolute left-3 top-1"
                src={YellowDot}
                alt=""
              />
              <div className="mt-4">
                <img className="" src={Reward} alt="" />
                <img className="ml-0.5" src={Reward1} alt="" />
              </div>
            </div>
          </div>

          <div className="w-44 h-16 flex justify-between mr-6">
            <div>
              <img src={Ellipse} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[#FFFFFF]">Akash Mishra</div>
              <button className="bg-[#FFFFFF] w-24 h-5 font-medium text-[8px] rounded shadow-md">
                EDIT MY PROFILE
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default NavBar