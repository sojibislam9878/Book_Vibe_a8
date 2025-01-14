import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto p-4 lg:mt-12 mt-6">
      <div className=" bg-base-200 md:p-20 p-6 rounded-xl">
        <div className=" flex flex-col lg:flex-row-reverse  ">
          <img
            src="https://i.ibb.co/jW3RH3C/1.jpg"
            className=" rounded-lg shadow-2xl w-[400px] mx-auto"
          />
          <div className="mt-12">
            <h1 className="md:text-5xl text-3xl font-bold lg:w-2/3 text-center lg:text-left playfair lg:leading-[84px] md:leading-[60px]">
              Books to freshen up your bookshelf
            </h1>
            <div className="text-center lg:text-left mt-12">
              <Link to="/listedbooks">
                <button className="btn bg-green-600 text-white">
                  View The List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
