import React from 'react';
import { createBrowserRouter,

} from "react-router";
import Root from '../Components/Root';
import Error from '../../Error';
import Home from '../Components/Home';
import BookDetails from '../Components/Pages/BookDetails';

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
    }
   ]
  },
]);

