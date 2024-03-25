const Banner = () => {
  return (
    <div className="lg:mt-12 mt-6">
      <div className="hero bg-base-200 p-20 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/jW3RH3C/1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold lg:w-2/3 text-center lg:text-left playfair lg:leading-[84px] leading-[60px]">
              Books to freshen up your bookshelf
            </h1>
            <div className="text-center lg:text-left mt-12">
              <button className="btn btn-primary">View The List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
