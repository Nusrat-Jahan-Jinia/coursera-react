import React from 'react'
import logo from "../logo.jpg"

function Nav() {
  return (
      <>
          <img src={logo} alt='logo' />
          <ul>
              <li>Home</li>
              <li>ABOUT</li>
              <li>MENU</li>
              <li>RESERVATIONS</li>
              <li>ONLINE ORDERS</li>
              <li>LOGIN</li>
          </ul>
      </>
  )
}

export default Nav