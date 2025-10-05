import React from 'react';
import { createBrowserRouter,

} from "react-router";
import Root from '../Components/Root';
import Error from '../../Error';
import Home from '../Components/Home';

export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement: <Error/>,
   children:[
    {
        index: true,
        path:"/",
        Component: Home,
    },
    {

    }
   ]
  },
]);

