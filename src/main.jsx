import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import TrendingBooks from './Pages/TrendingBooks';
import ContactUs from './Pages/ContactUs';
import BookDetails from './Pages/BookDetails';
import ReadBooks from './Pages/ReadBooks';
import WishlistBooks from './Pages/WishlistBooks';
import Error from './Pages/Error ';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>
          },
          {
            path:"wishlistbooks",
            element:<WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path:"/pagestoread",
        element:<PagesToRead></PagesToRead>,
      },
      {
        path:"/trendingbooks",
        element:<TrendingBooks></TrendingBooks>,
      },
      {
        path:"/contactus",
        element:<ContactUs></ContactUs>,
      },
      {
        path:"/book-details/:bookId",
        element:<BookDetails></BookDetails>,
      },
      {
        path:"listedbooks/book-details/:bookId",
        element:<BookDetails></BookDetails>,
      },
      {
        path:"listedbooks/wishlistbooks/book-details/:bookId",
        element:<BookDetails></BookDetails>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
