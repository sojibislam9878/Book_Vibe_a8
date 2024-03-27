import useReadedBooksLS from "../Hooks/useReadedBooksLS";
import ReadBook from "../components/ReadBook";
const ReadBooks = () => {
    const {readedBooksLS=[]}=useReadedBooksLS()
    console.log(readedBooksLS);
    readedBooksLS.sort((a, b) => a.bookName.localeCompare(b.bookName) )
    return (
        <div>
            {
                readedBooksLS.map(items=><ReadBook key={items.bookId} items={items}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;