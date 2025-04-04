import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className=" bg-zinc-100 rounded-full px-4 py-2 w-40 flex justify-between items-center text-black">
      <span className="text-sm font-medium font-mono ">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
};

export default Button;
