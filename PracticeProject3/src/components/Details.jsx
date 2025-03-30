import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import instance from "../utils/axios";

const Details = () => {
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getSingleProduct = async () => {
    try {
      const { data } = await instance(`/products/${id}`);
      setproduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return product ? (
    <div className="flex w-[70%] h-full p-[10%] justify-between items-center m-auto">
      <img className="w-[40%] h-[80%]" src={`${product.image}`} alt="" />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h2 className="text-sm text-zinc-400 my-5 ">{product.category}</h2>
        <h3 className="mb-3 text-zinc-400">{product.title}</h3>
        <p className="mb-5">{product.description}</p>
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
