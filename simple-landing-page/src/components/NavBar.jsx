import React from "react";

const NavBar = () => {
  return (
    <div className="border-b-1 w-[100vw] h-[8vh] ">
      <nav className="flex justify-around items-center w=full h-full mx-auto   ">
        <div>logo</div>
        <div className="">
          <ul className=" hidden lg:flex flex gap-7">
            <li>MANU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <button className="border-1 px-4 py-1 bg-red-500 cursor-pointer">
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
