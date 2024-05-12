import React, { useContext } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <a href="#explore-menu" className="menu-link">
            Menu
          </a>
        </li>
        <li>
          <a href="#app-download" className="menu-link">
            Mobile-app
          </a>
        </li>
        <li>
          <a href="#footer" className="menu-link">
            Contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" className="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart" className="menu-link">
            <img src={assets.basket_icon} alt="basket icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
