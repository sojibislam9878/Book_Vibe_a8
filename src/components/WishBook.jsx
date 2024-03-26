const WishBook = () => {
    return (
        <div>
            <div className="flex lg:gap-12 gap-6 border p-6 rounded-xl mt-6">
      <div className="">
        <img 
        className='h-[300px] object-cover'
        src="https://i.ibb.co/xH72gSM/4.jpg" alt="" />
      </div>
      <div className=''>
        <h1 className="text-2xl font-bold playfair">alu</h1>
        <p className="font-medium opacity-80 mt-4">By: potol</p>
        <div className="lg:flex gap-6 mt-4">
          <p className="flex items-center font-bold gap-2">
            Tags:
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              #torkari
            </button>
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              #dim
            </button>
          </p>
          <div className="flex items-center mt-4 lg:mt-0">
            <span className="material-symbols-outlined">location_on</span>
            <h1 className="opacity-80">Year of publishing: anda</h1>
          </div>
        </div>
        <div className="flex gap-24 border-b-2 mt-4 pb-4">
          <div className="flex gap-1">
            <span className="material-symbols-outlined">group</span>
            <h1 className="opacity-80">Publisher: mula</h1>
          </div>
          <div className="flex gap-1">
            <span className="material-symbols-outlined">news</span>
            <h1 className="opacity-80">Page: vendi</h1>
          </div>
        </div>
        <div className="mt-4 flex justify-between flex-wrap">
          <button className="btn rounded-full bg-[#328EFF80] text-[#328EFF]">Category: gegum</button>
          <button className="btn rounded-full bg-[#FFAC3380] text-[#FFAC33]">Rating: goru</button>
          <button className="btn rounded-full bg-[#23BE0A] text-white">View Details</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default WishBook;