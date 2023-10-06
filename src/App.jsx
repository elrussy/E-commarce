import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Catgories from './components/Catgories/Catgories';
import Cart from './components/Cart/Cart';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Brands from './components/Brands/Brands';
import { tokenContext } from './context/tokenContext';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';
import WishList from './components/WishList/WishList';



let routers = createBrowserRouter([{
  path: '/', element: <Layout />, children: [
    { index: true, element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
    { path: 'products', element:<ProtectedRoutes> <Products />  </ProtectedRoutes> },
    { path: 'categories', element: <ProtectedRoutes> <Catgories /> </ProtectedRoutes> },
    { path: 'cart', element: <ProtectedRoutes> <Cart />  </ProtectedRoutes>},
    { path: 'brands', element: <ProtectedRoutes> <Brands /> </ProtectedRoutes> },
    { path: 'detalis/:id', element: <ProtectedRoutes> <Details /> </ProtectedRoutes> },
    { path: 'checkout', element: <ProtectedRoutes> <Checkout /> </ProtectedRoutes> },
    { path: 'allorders', element: <ProtectedRoutes> <AllOrders /> </ProtectedRoutes> },
    { path: 'wishlist', element: <ProtectedRoutes> <WishList /> </ProtectedRoutes> },
    { path: 'register', element:  <Register />  },
    { path: 'login', element:  <Login />  },

    { path: '*', element: <NotFound /> },



  ]
}])

export default function App() {
 let { setToken } = useContext(tokenContext)

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"))
    }

  }, [])

  return (
    <>

      <RouterProvider router={routers}/>

    </>
  )
}
