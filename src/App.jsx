import React from 'react'
import Nav from './Nav.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Products from './Products.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  {
    path:"/",
    element:<Nav/>,
    children:[
      {
      path:"signup",
      element:<Signup/>
      },
      {
      path:"login",
      element:<Login/>
      },
      {
      path:"products",
      element:<Products/>
      }]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
