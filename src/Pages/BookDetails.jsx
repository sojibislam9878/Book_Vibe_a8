import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFecthData";
import { useEffect, useState } from "react";
import { setReadBookLS, setWishBook } from "../Utils/setReadBookLS";

const BookDetails = () => {
  const { data } = useFetchData();
  const { bookId } = useParams();
  const [singleBook, setSingleBook] = useState();
  useEffect(() => {
    const singleBook = data.find((items) => items.bookId == bookId);
    setSingleBook(singleBook);
  }, [data, bookId]);
  const {
    bookName,
    author,
    imageLink,
    category,
    rating,
    longReview,
    totalPage,
    yearOfPublishing,
    publisher,
    tags,
  } = singleBook || {};
  const [firstTag, secondTag] = tags || [];
  return (
    <div className="lg:flex gap-4 mt-12">
      <div className=" lg:w-1/3 flex justify-center items-center">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={imageLink}
          alt=""
        />
      </div>
      <div className=" lg:w-2/3 mt-6 lg:mt-0">
        <h1 className="text-4xl font-bold playfair">{bookName}</h1>
        <p className="text-xl font-medium opacity-80 mt-4">By: {author}</p>
        <div>
          <h6 className="border-y-2 text-xl font-medium opacity-80 py-4 mt-6">
            {category}
          </h6>
        </div>
        <p className="mt-6">
          <span className="font-bold leading-6">Review:</span>{" "}
          <span className="opacity-70 leading-6">{longReview}</span>
        </p>
        <div className="border-b-2 pb-5 flex items-center mt-7">
          <p className="font-bold">Tag:</p>
          <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
            #{firstTag}
          </button>
          <button className="bg-slate-100 px-3 py-2 rounded-full text-green-400 font-medium">
            #{secondTag}
          </button>
        </div>
        <div className="mt-6">
          <table className="w-full lg:w-2/3">
            <tr className="">
              <td className="w-2/3 opacity-70">Number Of Pages:</td>
              <td className="font-medium">{totalPage}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Publisher:</td>
              <td className="font-medium">{publisher}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Year of Publishing:</td>
              <td className="font-medium">{yearOfPublishing}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Rating:</td>
              <td className="font-medium">{rating}</td>
            </tr>
          </table>
          <div className="mt-8">
            <button
              onClick={() => {
                setReadBookLS(singleBook);
              }}
              className="btn bg-transparent border-2 mr-6"
            >
              Read
            </button>
            <button
              onClick={() => {
                setWishBook(singleBook);
              }}
              className="btn bg-[#50B1C9] text-white"
            >
              wish list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
