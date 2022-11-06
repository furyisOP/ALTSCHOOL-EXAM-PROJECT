import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>USERly</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link>HOME</Link>
        </li>
        <li>
          <Link>USERS</Link>
        </li>
        <li>
          <Link>ERROR PAGE</Link>
        </li>
      </ul>
      <div className="user">
        <img src="" alt="" />
        <p></p>
      </div>
    </header>
  );
}

export default Header;
