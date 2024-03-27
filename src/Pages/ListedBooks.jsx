import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);
  return (
    <div>
      <div className="text-3xl font-bold text-center bg-slate-200 p-8 rounded-xl mt-8">
        Books
      </div>
      {/* dropdown */}
      <div className="text-center lg:mt-8 mt-4">
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
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
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
    </div>
  );
};

export default ListedBooks;
