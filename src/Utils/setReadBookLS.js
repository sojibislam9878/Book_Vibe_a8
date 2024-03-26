export const setReadBookLS =(singleBook)=>{
    const savedBook= JSON.parse(localStorage.getItem("readedBook")) || [];

    const  isExisted = savedBook.find(item=> item.bookId == singleBook.bookId);
    if (!isExisted) {
        savedBook.push(singleBook);
        localStorage.setItem("readedBook" , JSON.stringify(savedBook));
        alert("book readed succesfuly")
    }else{
        alert("book is all ready readed")
    }
}


export const setWishBook =(singleBook)=>{
    const readBook = JSON.parse(localStorage.getItem("readedBook"))
    console.log(readBook);
    const wishBook = JSON.parse(localStorage.getItem("wishbook"))||[]
    const isExisted = wishBook.find(items=> items.bookId == singleBook.bookId)
    if (!isExisted) {
        wishBook.push(singleBook)
        localStorage.setItem("wishbook", JSON.stringify(wishBook))
        alert("book added wish list")
    }else{
        alert("book is all ready wish list")
    }
}