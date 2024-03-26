export const getReadBookLS=()=>{
    const booksLS = JSON.parse(localStorage.getItem("readedBook")) || []
    return booksLS
}