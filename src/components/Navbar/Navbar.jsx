import React from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="nav--container">
      <h2 className="nav--logo">AG</h2> 
      
      <div className="nav--auth-container">
         <p className="nav--auth-greeting">Hi, kevin</p>
      </div>

      <div className="nav--search-container">
         <MagnifyingGlass size={15} />
      </div>
    </div>
  )
}

export default Navbar;
