import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <nav className="w-[15%] h-full bg-zinc-100">
        <a href="/create">add new product</a>
        <h1>Category </h1>
        <ul>
          <li>Cat 1</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
