import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className=" bg-amber-50 rounded-md text-base font-semibold outline-none px-2  py-1"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className=" bg-amber-50 rounded-md text-base font-semibold outline-none px-2  py-1"
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className=" bg-amber-50 rounded-md ounded-md text-base font-semibold outline-none px-2  py-1"
          type="text"
          placeholder="img"
        />
        <button className="px-3 py-1 bg-sky-400 text-xs rounded-full font-semibold text-white ">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
