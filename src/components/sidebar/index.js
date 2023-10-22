import React from "react";
import IconDashboard from "../../assets/icons/IconDashboard";
import IconUser1 from "../../assets/icons/IconUser1";
import Image from "../../assets/icons/IconImage";

function Sidebar(props) {
  const { isOpen, userWithId1 } = props;

  return (
    <>
      <div
        className={
          !isOpen
            ? `hidden lg:flex lg:flex-col bg-white w-64 pt-12 items-center px-5 `
            : `flex flex-col bg-white w-64 pt-12 items-center px-5`
        }
      >
        <div className="bg-gray-400 w-52 h-14 flex justify-center items-center">
          <Image />
        </div>
        <div className="bg-gray-200 w-52 h-16 mt-4 flex items-center rounded-xl">
          <IconUser1 />
          <div className="">
            <div className="text-secondary font-bold">
              {userWithId1 ? userWithId1.name : "Loading..."}
            </div>
            <div className="text-xs text-gray-400">
              {userWithId1 ? userWithId1.email : "Loading..."}
            </div>
          </div>
        </div>
        <div className="border-r-4 border-primary w-52 h-16 mt-4 flex items-center hover:bg-slate-200 hover:text-white">
          <IconDashboard />
          <div className="text-primary ">Dashboard</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
