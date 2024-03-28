import useWishBookLs from "../Hooks/useWishBookLs";
import NoData from "../components/NoData";
import WishBook from "../components/WishBook";


const WishlistBooks = () => {
    const {wishBookLS=[]}=useWishBookLs()
    if (wishBookLS.length <= 0) {
        return (
          <NoData></NoData>
        );
      }
    return (
        <div  className="container mx-auto p-4">
            {
                wishBookLS.map(items=><WishBook key={items.bookId} items={items}></WishBook>)
            }
        </div>
    );
};

export default WishlistBooks;