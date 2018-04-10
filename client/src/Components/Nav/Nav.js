
import React from "react";
import { Link } from 'react-router-dom'

 const Nav =(props) => {
    return (
      <div>
      <Link className={window.location.pathname === "/" ? "active" : ""}  to="/" className="nav-item nav-link active nav-text">  Home </Link>
      <Link className={window.location.pathname === "/Teacher" ? "active" : ""}  to="/Teacher" className="nav-item nav-link active nav-text">  Teacher </Link>
      <Link className={window.location.pathname === "/Game" ? "active" : ""}  to="/Game" className="nav-item nav-link active nav-text"> Game </Link>
      </div>
    )
};
export default Nav;
