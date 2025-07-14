import React from 'react'
import logo from "../logo.jpg"

function Nav() {
  return (
      <div className="container">
          <img src={logo} alt='logo' className='App-logo' />
          <ul className='inline'>
              <li href="/">Home</li>
              <li href="/about">ABOUT</li>
              <li href="/menu">MENU</li>
              <li href="/reservations">RESERVATIONS</li>
              <li href="/onlineorders">ONLINE ORDERS</li>
              <li href="/login">LOGIN</li>
          </ul>
      </div>
  )
}

export default Nav