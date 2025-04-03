import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" max-w-screen-xl mx-auto flex items-center py-4 font-mono justify-between border-b border-zinc-700">
      <div className="left flex items-center">
        <img
          src="https://i.pinimg.com/736x/14/b9/0b/14b90bb343e8fe8b928dece37985a832.jpg"
          className="w-[8%] h-[100%]"
          alt=""
        />
        <div className="text-white flex ml-20 gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-0.5  h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-600"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
