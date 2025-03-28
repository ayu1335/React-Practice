import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="mr-3 mb-3 p-3 w-[18%] h-[30vh] border shadow rounded flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url(https://picsum.photos/200/300?grayscale)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
