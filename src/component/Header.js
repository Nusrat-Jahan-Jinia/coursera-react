import React from 'react';
import logo from '../logo.jpg';
import Nav from "./Nav";

function Header() {
  return (
      <header className='header-container'>
            <div>
            <img src={logo} alt='Little Lemon Logo'/>
            </div>
            <div>
                <Nav/>
            </div>
        </header>
  )
}

export default Header