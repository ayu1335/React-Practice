import React, { useState } from "react";

const Work = () => {
  const [image, setimage] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);
  return (
    <div className=" w-full font-mono">
      <div className=" relative max-w-screen-xl text-center mx-auto  ">
        <h1 className="text-[30vw] font-medium tracking-tight select-none leading-none mt-24 text-white">
          work
        </h1>
        <div className="absolute w-full h-full top-0">
          {image.map((elem) =>
            elem.isActive ? (
              <img
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
                className="w-80 rounded-md absolute -translate-x-[50%] -translate-y-[50%] "
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
