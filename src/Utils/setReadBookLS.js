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


