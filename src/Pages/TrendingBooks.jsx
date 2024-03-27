const TrendingBooks = () => {
  return (
    <div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Top 3 Books:</h1>
      </div>
      {/* card1 */}
      <div className="flex lg:gap-12 gap-6 p-6 rounded-xl mt-6 bg-[#FFD700CC] text-[#75230b]">
        <div className="w-1/3">
          <img
            className="h-[300px] object-cover"
            src="https://i.ibb.co/68fTXxh/7.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl font-bold playfair">The Hobbit</h1>
          <p className="font-medium opacity-80 mt-4">By: J.R.R. Tolkien</p>
          <div className="lg:flex gap-6 mt-4">
            <p className="flex items-center font-bold gap-2">
              Tags:
              <button className="px-3 py-2 rounded-full font-medium">
                #Adventure
              </button>
              <button className=" px-3 py-2 rounded-full font-medium">
                #Quest
              </button>
            </p>
            <div className="flex items-center mt-4 lg:mt-0">
              <span className="material-symbols-outlined">location_on</span>
              <h1 className="opacity-80">Year of publishing: 1937</h1>
            </div>
          </div>
          <div className="flex gap-24 mt-4 pb-4">
            <div className="flex gap-1">
              <span className="material-symbols-outlined">group</span>
              <h1 className="opacity-80">Publisher: Allen & Unwin</h1>
            </div>
            <div className="flex gap-1">
              <span className="material-symbols-outlined">news</span>
              <h1 className="opacity-80">Page: 310</h1>
            </div>
          </div>
          <p className=" opacity-60 pb-2 text-white">
            Someone marked as Rread 28 seconds ago
          </p>
          <div className="mt-2 pt-2 flex gap-6 flex-wrap  border-t-2">
            <button className="btn border-0 rounded-full bg-[#23BE0A] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* card2 */}
      <div className="flex lg:gap-12 gap-6 p-6 rounded-xl mt-6 bg-[#C0C0C0CC] text-[#75230b]">
        <div className="w-1/3">
          <img
            className="h-[300px] object-cover"
            src="https://i.ibb.co/19zWFLY/9.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl font-bold playfair">
            The Chronicles of Narnia: The Lion, the Witch and the Wardrobe
          </h1>
          <p className="font-medium opacity-80 mt-4">C.S. Lewis</p>
          <div className="lg:flex gap-6 mt-4">
            <p className="flex items-center font-bold gap-2">
              Tags:
              <button className="px-3 py-2 rounded-full font-medium">
                #Adventure
              </button>
              <button className=" px-3 py-2 rounded-full font-medium">
                #Quest
              </button>
            </p>
            <div className="flex items-center mt-4 lg:mt-0">
              <span className="material-symbols-outlined">location_on</span>
              <h1 className="opacity-80">Year of publishing: 1950</h1>
            </div>
          </div>
          <div className="flex gap-24 mt-4 pb-4">
            <div className="flex gap-1">
              <span className="material-symbols-outlined">group</span>
              <h1 className="opacity-80">Publisher: Geoffrey Bles</h1>
            </div>
            <div className="flex gap-1">
              <span className="material-symbols-outlined">news</span>
              <h1 className="opacity-80">Page: 206</h1>
            </div>
          </div>
          <p className=" opacity-60 pb-2 text-white">
            Someone marked as Rread 36 seconds ago
          </p>
          <div className="mt-2 border-t-2 pt-2 flex gap-6 flex-wrap">
            <button className="btn border-0 rounded-full bg-[#23BE0A] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* card3 */}
      <div className="flex lg:gap-12 gap-6 p-6 rounded-xl mt-6 bg-[#CD7F32CC] text-black">
        <div className="w-1/3">
          <img
            className="h-[300px] object-cover"
            src="https://i.ibb.co/p4BJj7b/8.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl font-bold playfair">The Lord of the Rings</h1>
          <p className="font-medium opacity-80 mt-4">By: J.R.R. Tolkien</p>
          <div className="lg:flex gap-6 mt-4">
            <p className="flex items-center font-bold gap-2">
              Tags:
              <button className="px-3 py-2 rounded-full font-medium">
                #Adventure
              </button>
              <button className=" px-3 py-2 rounded-full font-medium">
                #Quest
              </button>
            </p>
            <div className="flex items-center mt-4 lg:mt-0">
              <span className="material-symbols-outlined">location_on</span>
              <h1 className="opacity-80">Year of publishing: 1954</h1>
            </div>
          </div>
          <div className="flex gap-24 mt-4 pb-4">
            <div className="flex gap-1">
              <span className="material-symbols-outlined">group</span>
              <h1 className="opacity-80">Publisher: Allen & Unwin</h1>
            </div>
            <div className="flex gap-1">
              <span className="material-symbols-outlined">news</span>
              <h1 className="opacity-80">Page: 1178</h1>
            </div>
          </div>
          <p className=" opacity-60 pb-2 text-white">
            Someone marked as Rread 39 seconds ago
          </p>
          <div className="mt-2 pt-2 border-t-2 flex gap-6 flex-wrap">
            <button className="btn border-0 rounded-full bg-[#23BE0A] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBooks;
