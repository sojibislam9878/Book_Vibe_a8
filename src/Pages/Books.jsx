import useFetchData from "../Hooks/useFecthData";
import Book from "../components/Book";

const Books = () => {
 const {data}=useFetchData()
  return (
    <div className="lg:mt-24 mt-12">
      <h1 className="text-4xl font-bold text-center playfair">Books</h1>
      {/* cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-9">
        {
          data.map(book=><Book key={book.id} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
