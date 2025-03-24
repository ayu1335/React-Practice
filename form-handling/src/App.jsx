import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setusers] = useState([]);
  const handleFormSubmitData = (data) => {
    setusers([...users, data]);
  };
  const remove = (id) => {
    setusers(() => users.filter((item, index) => index != id));
  };
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto ">
        <Cards remove={remove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
};

export default App;
