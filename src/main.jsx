import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Main/Main';
import Home from './Component/Main/Home';
import Product from './Component/Main/Product';
import Signup from './Component/Main/Signup';
import Login from './Component/Main/Login';
import Update from './Component/Main/Navigate/Update';
import AuthControl from './Component/AuthProvider/AuthControl';
import Card from './Component/Card';
import Error from './Component/Main/Error';
import Private from './Component/Main/Private';
import SingleProduct from './Component/Main/SingleProduct';
import Detail from './Component/Main/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Brand.json')
      },
      {
        path: '/product',
        element: <Private><Product></Product></Private>,
        loader: () => fetch('https://backend-site-o1pg1mbn8-junayet-shiblus-projects.vercel.app/coffee')
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/card',
        element: <Private><Card></Card></Private>,
        loader: () => fetch('https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/user')
      },
      {
        path: '/update/:id',
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => fetch(`https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/update/${params.id}`)
      },
      {
        path: `/detail/:id`,
        element: <Private><Detail></Detail></Private>,
        loader: ({ params }) => fetch(`https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/detail/${params.id}`)
      },
      {
        path: '/card/:name',
        element: <SingleProduct></SingleProduct>,
        loader: ({ params }) => fetch(`https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/card/${params.name}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthControl>
      <RouterProvider router={router} />
    </AuthControl>

  </React.StrictMode>,
)
