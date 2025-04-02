import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all fields correctly");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });

    navigate("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center p-[5%] w-screen h-screen"
      >
        <h1 className="text-3xl mb-5 w-1/2 font-mono">Add New Product</h1>
        <input
          type="text"
          placeholder="Enter title"
          className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-3"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Enter Image URL"
          className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-3"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Enter Category"
            className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-3"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="Enter Price"
            className="text-1xl bg-zinc-100 rounded w-[48%] mb-3 p-3"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          className="text-1xl bg-zinc-100 rounded w-1/2 mb-3 p-3"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter description"
          rows="4"
        ></textarea>
        <button className="py-3 px-5 border rounded bg-blue-500 text-white hover:bg-blue-600 transition">
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Create;
