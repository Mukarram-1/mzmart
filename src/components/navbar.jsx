import React from "react";
import { Link } from "react-router-dom";
// import logo from "../public/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockOpenIcon from '@mui/icons-material/LockOpen'; //LOGIN
export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/home"><img src='./images/logo.png' alt="Logo" /></Link>
        </div>
        <div className="menu">
          <div className="menu-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/pricepredictor">Predictor</Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="actions">
          <div className="signuplogin hover-underlined"><Link to='/'><PersonAddIcon/></Link></div>
          <div className="signuplogin hover-underlined"><Link to='/'><LockOpenIcon/></Link></div>
          <div className="basket hover-underlined"><Link to='/'><ShoppingCartIcon sx={{ color: "white" }} /></Link></div>
        </div>
    </nav>
  );
}
