import React from "react";
import Card from "./Card";

const Cards = ({ users, remove }) => {
  return (
    <div className="w-full  p-4 max-h-96 overflow-auto flex flex-wrap justify-center gap-4">
      {users.map((item, index) => {
        return <Card remove={remove} id={index} user={item} />;
      })}
    </div>
  );
};

export default Cards;
