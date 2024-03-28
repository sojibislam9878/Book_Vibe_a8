import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleReadSort=(e)=>{
      const localStorageBooks =JSON.parse(localStorage.getItem("readedBook")) || [];
      const localStorageWishBooks =JSON.parse(localStorage.getItem("wishbook")) || [];
      // console.log("hi");
      if (localStorageBooks.length===0 && localStorageWishBooks.length ===0) {
        return toast.error('There is no data for sort !!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }else if (localStorageBooks.length===0 && localStorageWishBooks.length > 0) {
        toast.error('Read Book data not found only Wishlist data sorted', {
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
      if (e === "Rating") {
        const sortLoclStorageBooks =localStorageBooks.sort((a,b)=>b.rating -a.rating );
        const sortLoclStorageWishBooks =localStorageWishBooks.sort((a,b)=>b.rating -a.rating );
        localStorage.setItem("readedBook" , JSON.stringify(sortLoclStorageBooks));
        localStorage.setItem("wishbook" , JSON.stringify(sortLoclStorageWishBooks));
      }else if (e === "Number of Pages") {
        const sortLoclStorageBooks =localStorageBooks.sort((a,b)=>b.totalPage -a.totalPage );
        const sortLoclStorageWishBooks =localStorageWishBooks.sort((a,b)=>b.totalPage -a.totalPage );
        localStorage.setItem("wishbook" , JSON.stringify(sortLoclStorageWishBooks));
        localStorage.setItem("readedBook" , JSON.stringify(sortLoclStorageBooks));
      }else{
        const sortLoclStorageBooks =localStorageBooks.sort((a,b)=>b.yearOfPublishing -a.yearOfPublishing );
        const sortLoclStorageWishBooks =localStorageWishBooks.sort((a,b)=>b.yearOfPublishing -a.yearOfPublishing );
        localStorage.setItem("wishbook" , JSON.stringify(sortLoclStorageWishBooks));
        localStorage.setItem("readedBook" , JSON.stringify(sortLoclStorageBooks));
      }
      toast.success('Sorted done but need a reload 😅', {
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
  
  return (
    <div  className="container mx-auto p-4">
      <div className="text-3xl font-bold text-center bg-slate-200 p-8 rounded-xl mt-8">
        Books
      </div>
      {/* dropdown */}
      <div 
      className="text-center lg:mt-8 mt-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 text-white"
          >
            Sort by {""}
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          <ul
          onClick={()=>{handleReadSort(event.target.innerText)}}
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publishd Year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* read books wish books */}
      <div className="flex gap-5 mt-16 text-lg opacity-80 ">
        <div role="tablist" className="tabs tabs-lifted">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            role="tab"
            className={`tab ${tabIndex === 0 ? "tab-active" : ""}`}
          >
            Read Books
          </Link>
          <Link
            to="wishlistbooks"
            onClick={() => setTabIndex(1)}
            role="tab"
            className={`tab ${tabIndex === 1 ? "tab-active" : ""}`}
          >
            Wishlist Books
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default ListedBooks;
