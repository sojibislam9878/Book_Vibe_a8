import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Book({ book }) {
  const {bookId, bookName, author, imageLink, category, tags, rating } = book;
  const [firstTag, secondTag] = tags;
  return (
    <Link to={`book-details/${bookId}`}>
    <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img src={imageLink} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex gap-5 mt-2">
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              {firstTag}
            </button>
            <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
              {secondTag}
            </button>
          </div>
          <h2 className="card-title playfair text-2xl font-bold mt-4">
            {bookName}
          </h2>
          <p className=" font-medium opacity-80">By: {author}</p>
          <div className="flex mb-3 mt-3 pt-2 border-t-2 border-dashed">
            <p className="font-medium text-lg opacity-70">{category}</p>
            <div className="flex items-center gap-2  font-medium text-lg opacity-70">
              <p>{rating}</p>
              <span className="material-symbols-outlined">kid_star</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
Book.propTypes = {
    book: PropTypes.object
  };
export default Book;
