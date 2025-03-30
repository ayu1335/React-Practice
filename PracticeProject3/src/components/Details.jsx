import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Details = () => {
  const [products] = useContext(ProductContext);
  return products ? (
    <div className="flex w-[70%] h-full p-[10%] justify-between items-center m-auto">
      <img
        className="w-[40%] h-[80%]"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <h2 className="text-sm text-zinc-400 my-5 ">men's clothing</h2>
        <h3 className="mb-3 text-zinc-400">$ 109.95</h3>
        <p className="mb-5">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <Link className="py-3 px-5 border rounded border-blue-200 text-blue-300 mr-5  ">
          Edit
        </Link>
        <Link className="py-3 px-5 border rounded border-blue-200 text-red-300 ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
