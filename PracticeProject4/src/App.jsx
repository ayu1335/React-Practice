import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="bg-zinc-900 w-full h-full cursor-">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  );
};

export default App;
