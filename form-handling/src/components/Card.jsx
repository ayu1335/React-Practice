import React from "react";

const Card = ({ user, id, remove }) => {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2 font-mono">
      <div className="image w-[3vw] h-[3vw] rounded-full overflow-hidden bg-zinc-700">
        <img
          className="w-full h-full object-cover "
          src="https://static.toiimg.com/photo/112398032/112398032.jpg?v=3"
          alt=""
        />
      </div>
      <h1 className="mt-1 text-xl font-semibold "> {user.name}</h1>
      <h4 className="opacity-60 text-xs font-semibold "> {user.email}</h4>
      <p className=" mt-2 text-center tesxt-xs font-semibold leading-4 tracking-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ea
        ut quam?
      </p>
      <button
        onClick={() => remove(id)}
        className="px-3 py-1 bg-red-400 text-xs rounded-full font-semibold text-white mt-4"
      >
        remove it!
      </button>
    </div>
  );
};

export default Card;
