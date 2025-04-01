import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import instance from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // let filteredProducts = products && products;
  const [filteredProducts, setfilteredProducts] = useState(null);

  const getProrductCategory = async () => {
    try {
      const { data } = await instance(`/products/category/${category}`);
      setfilteredProducts(data);
      console.log(filteredProducts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") getProrductCategory();
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 p-3 w-[18%] h-[30vh] border shadow rounded flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
