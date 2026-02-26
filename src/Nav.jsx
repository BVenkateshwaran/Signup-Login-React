import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="signup">Signup</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="products">Products</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      
    </div>
  )
}

export default Nav
