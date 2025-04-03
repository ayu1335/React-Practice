import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = () => {
  return (
    <div className=" bg-zinc-100 rounded-full px-4 py-2 w-40 flex justify-between items-center">
      <span className="text-sm font-medium font-mono ">Get Started</span>
      <BsArrowReturnRight />
    </div>
  );
};

export default Button;
