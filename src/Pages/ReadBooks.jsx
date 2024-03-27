import useReadedBooksLS from "../Hooks/useReadedBooksLS";
import ReadBook from "../components/ReadBook";

const ReadBooks = () => {
  const {readedBooksLS=[]}=useReadedBooksLS()
  
    // readedBooksLS.sort((a, b) => a.bookName.localeCompare(b.bookName) )
    return (
        <div  className="container mx-auto p-4">
            {
                readedBooksLS.map(items=><ReadBook key={items.bookId} items={items}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;