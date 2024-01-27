"use client"
import { useState, useEffect } from 'react';
import NavLarge from './nav-large/NavLarge';
import NavSmall from './nav-small/NavSmall';


import './Navbar.css'

function Navbar() {

  const [showSmallNav, setShowSmallNav] = useState(false);
  const [scroll, setScroll] = useState(false)

  const smallNavToggle = () => {
    setShowSmallNav(prevState => !prevState)
  }

  return (
    <section className="navbar">
      <NavLarge
        smallNavToggle={smallNavToggle}
      />
      <NavSmall
        showSmallNav={showSmallNav}
        smallNavToggle={smallNavToggle}
      />
    </section>
  )
}

export default Navbar