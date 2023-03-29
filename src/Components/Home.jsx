import React from "react";
import Dash from "../assets/Dash.png";
import Rectangle from "../assets/Rectangle.png";
import job from "../assets/job.png";
import job1 from "../assets/job1.png";
import Message from "../assets/messages.png";
import calender from "../assets/calender.png";
import calender1 from "../assets/calender1.png";
import calender2 from "../assets/calender2.png";
import logout from "../assets/logout.png";
import logout1 from "../assets/logout1.png";
import logout2 from "../assets/logout2.png";

const Home = () => {
  return (
    <div className="h-[560px] w-20 bg-[#22506C]">
      <div>
        <div className="p-5">
          <img src={Dash} alt="" />
          <img className="mt-1" src={Dash} alt="" />
          <img className="mt-1" src={Dash} alt="" />
        </div>

        <div className="mt-16">
          <div className="flex">
            <img className="ml-7" src={Rectangle} alt="" />
            <img src={Rectangle} alt="" />
          </div>
          <div className="flex">
            <img className="ml-7" src={Rectangle} alt="" />
            <img src={Rectangle} alt="" />
          </div>
          <p className="font-medium text-white text-sm ml-1">Dashboard</p>
        </div>

        <div className="mt-5">
          <img className="ml-7" src={job} alt="" />
          <img className="ml-6" src={job1} alt="" />
          <p className="font-medium text-white text-sm ml-2">My Jobs</p>
        </div>

        <div className="mt-5">
          <img className="ml-6" src={Message} alt="" />
          <p className="font-medium text-white text-sm ml-2">Messages</p>
        </div>

        <div className="mt-5 relative">
          <img className="ml-6" src={calender} alt="" />
          <img className="ml-6 absolute top-1.5" src={calender1} alt="" />
          <img
            className="ml-6 absolute -top-0.5 left-1"
            src={calender2}
            alt=""
          />

          <img
            className="ml-6 absolute -top-0.5 left-3"
            src={calender2}
            alt=""
          />

          <p className="font-medium text-white text-sm ml-2">Upcoming Events</p>
        </div>
      </div>
      <div className="mt-20 mb-7">
        <div className="bg-[#FFFFFF] h-6 w-14 font-medium rounded-md text-center m-3">HELP</div>
      </div>
      <div className="relative">
        
        <img className="absolute left-5" src={logout} alt="" />
        <img className="absolute left-6 top-2" src={logout1} alt="" />
        <img className="absolute left-9 top-0.5" src={logout2} alt="" />
        
      <p className="absolute font-medium text-white text-sm ml-2 top-6">Log Out</p>
      </div>
    </div>
  );
};

export default Home;
