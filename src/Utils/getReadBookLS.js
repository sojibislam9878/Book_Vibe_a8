export const getReadBookLS=()=>{
    const booksLS = JSON.parse(localStorage.getItem("readedBook")) || []
    return booksLS
}

export const getWishList=()=>{
    const wishBook = JSON.parse(localStorage.getItem("wishbook"))||[]
    return wishBook
}