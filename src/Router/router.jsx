import React from 'react';
import { createBrowserRouter,

} from "react-router";
import Root from '../Components/Root';
import Error from '../../Error';
import Home from '../Components/Home';
import BookDetails from '../Components/Pages/BookDetails';
import Listedbooks from '../Components/Pages/Listedbooks';
import Wishlist from '../Components/Pages/Wishlist';
import ReadBook from '../Components/Pages/ReadBook';

export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement: <Error/>,
   children:[
    {
        index: true,
        loader:()=>fetch('booksData.json'),
        path:"/",
        Component: Home,
    },
    {
      path:"/book/:id",
      Component:BookDetails,
    },
    {
      path:"/listed-books",
      loader:()=>fetch('booksData.json'),
      Component: Listedbooks,
    },
    {
      path:"/Wishlist",
      Component: Wishlist,
    },
    {
      path: "/book/:id/read",
        Component: ReadBook,
    }
   ]
  },
]);

