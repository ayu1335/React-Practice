import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 text-white px-4 py-5 flex items-center justify-between">
      <span>
        <img className="h-6" src="{val.url}" alt="" />
      </span>
      <span className="font-semibold">{val.number}</span>
    </div>
  );
};

export default Stripe;
