import useWishBookLs from "../Hooks/useWishBookLs";
import WishBook from "../components/WishBook";


const WishlistBooks = () => {
    const {wishBookLS=[]}=useWishBookLs()
    console.log(wishBookLS);
    return (
        <div>
            {
                wishBookLS.map(items=><WishBook key={items.bookId} items={items}></WishBook>)
            }
        </div>
    );
};

export default WishlistBooks;