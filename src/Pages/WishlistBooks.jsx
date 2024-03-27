import useWishBookLs from "../Hooks/useWishBookLs";
import WishBook from "../components/WishBook";


const WishlistBooks = () => {
    const {wishBookLS=[]}=useWishBookLs()
    console.log(wishBookLS);
    return (
        <div  className="container mx-auto p-4">
            {
                wishBookLS.map(items=><WishBook key={items.bookId} items={items}></WishBook>)
            }
        </div>
    );
};

export default WishlistBooks;