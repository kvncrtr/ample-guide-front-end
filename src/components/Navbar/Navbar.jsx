import React from 'react';
import { MagnifyingGlass, List } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav--container">

      <div className="nav--case">
        <h2 className="nav--logo">AG</h2> 

        <div className="nav--list">
          <Link className={"nav--list-item"} to={"/"}>Latest</Link>
          <p className={"nav--list-item"}>Faith</p>
          <p className={"nav--list-item"}>Music</p>
          <p className={"nav--list-item"}>Business</p>
          <p className={"nav--list-item"}>Biblical Breakdowns</p>
          <p className={"nav--list-item"}>Personal</p>
        </div>
        
        <div className="nav--utilities">
          <div className="nav--auth-container">
            <p className="nav--auth-greeting">Hi, kevin</p>
          </div>

          <div className="nav--search-container">
            <MagnifyingGlass size={18} />
          </div>

          <div className="nav--menu-container">
            <List size={21} />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;
