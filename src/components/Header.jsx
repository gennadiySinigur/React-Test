import React from 'react';
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <div className="logo-shape"></div>
          <p>Logo</p>
        </div>
      </Link>
      <ul className="nav-list">
        <li><Link className="nav-link" to="/">home</Link></li>
        <li><Link className="nav-link" to="/signin">sign in</Link></li>
        <li><Link className="nav-link" to="/login">log in</Link></li>
      </ul>
    </div>
  )
}

export default Header;
