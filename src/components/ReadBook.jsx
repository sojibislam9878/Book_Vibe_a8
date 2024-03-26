const ReadBook = () => {
  return (
    <div className="flex gap-6 border p-6 rounded-xl mt-6">
      <div className="w-1/3">
        <img
          className="h-full w-full object-cover rounded-xl"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold playfair">The catcher in the rye</h1>
        <p className="font-medium opacity-80 mt-4">By: hero alom</p>
        <div className="lg:flex gap-6 mt-4">
          <p className="flex items-center font-bold gap-2">
            Tags:
            <button className="btn">aslfjslkf</button>
            <button className="btn">sahjdflksaj</button>
          </p>
          <div className="flex items-center mt-4 lg:mt-0">
            <span className="material-symbols-outlined">location_on</span>
            <h1 className="opacity-80">Year of publishing:</h1>
          </div>
        </div>
        <div className="flex gap-24 border-b-2 mt-4 pb-4">
          <div className="flex gap-1">
            <span className="material-symbols-outlined">group</span>
            <h1 className="opacity-80">Publisher: Hero alom</h1>
          </div>
          <div className="flex gap-1">
            <span className="material-symbols-outlined">news</span>
            <h1 className="opacity-80">Page: 192</h1>
          </div>
        </div>
        <div className="mt-4 flex justify-between flex-wrap">
          <button className="btn">Category: matha</button>
          <button className="btn">Rating: 2.5</button>
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
