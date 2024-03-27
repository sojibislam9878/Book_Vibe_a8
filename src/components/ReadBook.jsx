import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ReadBook = ({items}) => {
  const { 
    bookId,
    bookName,
    author,
    imageLink,
    category,
    rating,
    totalPage,
    yearOfPublishing,
    publisher,
    tags,}=items
    const [firstTag, secondTag] = tags;
  return (
    <div className="md:flex lg:gap-12 gap-6 border p-6 rounded-xl mt-6">
      <div className="md:w-1/3 w-full">
        <img 
        className='md:h-[300px] w-full h-full object-cover'
        src={imageLink} alt="" />
      </div>
      <div className='md:w-2/3'>
        <h1 className="text-2xl font-bold playfair">{bookName}</h1>
        <p className="font-medium opacity-80 mt-4">By: {author}</p>
        <div className="lg:flex gap-6 mt-4">
          <p className="flex flex-wrap items-center font-bold gap-2">
            Tags:
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              #{firstTag}
            </button>
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              #{secondTag}
            </button>
          </p>
          <div className="flex items-center mt-4 lg:mt-0">
            <span className="material-symbols-outlined">location_on</span>
            <h1 className="opacity-80">Year of publishing: {yearOfPublishing}</h1>
          </div>
        </div>
        <div className="flex flex-wrap md:gap-24 gap-6 border-b-2 mt-4 pb-4">
          <div className="flex gap-1">
            <span className="material-symbols-outlined">group</span>
            <h1 className="opacity-80">Publisher: {publisher}</h1>
          </div>
          <div className="flex gap-1">
            <span className="material-symbols-outlined">news</span>
            <h1 className="opacity-80">Page: {totalPage}</h1>
          </div>
        </div>
        <div className="mt-4 flex gap-6 flex-wrap">
          <button className="btn rounded-full bg-[#328EFF80] text-[#328EFF]">Category: {category}</button>
          <button className="btn rounded-full bg-[#FFAC3380] text-[#FFAC33]">Rating: {rating}</button>
          <Link to={`book-details/${bookId}`}><button className="btn rounded-full bg-[#23BE0A] text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  items: PropTypes.object
};
export default ReadBook;
