import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activelink ="bg-transparent border border-[#23BE0A] text-[#23BE0A] hover:bg-transparent focus:bg-transparent focus:text-[#23BE0A] "
  const normalink =""
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <NavLink to="/" className={({isActive})=> isActive?activelink:normalink}>Home</NavLink>
              </li>
              <li>
                <NavLink to="listedbooks" className={({isActive})=> isActive?activelink:normalink}>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="pagestoread" className={({isActive})=> isActive?activelink:normalink}>Pages to Read</NavLink>
              </li>
              <li>
                <NavLink to="trendingbooks" className={({isActive})=> isActive?activelink:normalink}>Trending Books</NavLink>
              </li>
              <li>
                <NavLink to="contactus" className={({isActive})=> isActive?activelink:normalink}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg space-x-4">
            <li>
              <NavLink to="/" className={({isActive})=> isActive?activelink:normalink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="listedbooks" className={({isActive})=> isActive?activelink:normalink}>Listed Book</NavLink>
            </li>
            <li>
              <NavLink to="pagestoread" className={({isActive})=> isActive?activelink:normalink}>Pages to Read</NavLink>
            </li>
            <li>
              <NavLink to="trendingbooks" className={({isActive})=> isActive?activelink:normalink}>Trending Books</NavLink>
            </li>
            <li>
              <NavLink to="contactus" className={({isActive})=> isActive?activelink:normalink}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-6 ">
            <a className="btn bg-green-600 text-white">Sign In</a>
            <a className="btn bg-blue-600 text-white">Sign UP</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
