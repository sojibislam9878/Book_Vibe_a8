export const setReadBookLS =(singleBook , toast)=>{
    const savedBook= JSON.parse(localStorage.getItem("readedBook")) || [];

    const  isExisted = savedBook.find(item=> item.bookId == singleBook.bookId);
    if (!isExisted) {
        savedBook.push(singleBook);
        localStorage.setItem("readedBook" , JSON.stringify(savedBook));
        toast.success('The book has been successfully added as read', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
        toast.warn('Book already added as read', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}




export const setWishBook =(singleBook ,toast)=>{
    const readBook = JSON.parse(localStorage.getItem("readedBook"))||[]
    const wishBook = JSON.parse(localStorage.getItem("wishbook"))||[]
    const isExisted = wishBook.find(items=> items.bookId == singleBook.bookId)
    const  readExisted = readBook.find(item=> item.bookId == singleBook.bookId);
    if (readExisted) {
        toast.error('The Book has already been read', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else if(isExisted){
        toast.warn('The book already added in wish list', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    
    }else{
        wishBook.push(singleBook)
        localStorage.setItem("wishbook", JSON.stringify(wishBook))
        toast.success('The book has been successfully added wish list', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}
