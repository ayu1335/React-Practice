import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  let color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4 )`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 ">
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-300 "
        href="/create"
      >
        add new product
      </a>
      <hr className=" my-3  w-[80%] border-blue-200 " />
      <h1 className="text-2xl mb-3 w-[80%]">Category </h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link to={`/?category=${c}`} className="flex items-center mb-3">
            <span
              style={{ backgroundColor: color() }}
              className="rounded-full mr-2 w-[15px] h-[15px]"
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
