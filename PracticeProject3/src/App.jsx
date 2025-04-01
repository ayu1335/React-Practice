import React from "react";
import Home from "./components/Home";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Details from "./components/Details";
const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="w-screen h-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link className="text-blue-700 absolute" to="/">
          home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
