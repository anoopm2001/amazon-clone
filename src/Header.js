import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU"
          alt="amazon logo"
        />
      </Link>
      <div className="header_search">
        <input
          className="header_searchInput "
          type="text"
          placeholder="Search for Items"
        ></input>
        <SearchIcon className="header_searchicon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option">
            <span className="header_option1">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header_option2" onClick={handleAuth}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
        <Link to="/cart">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="basket header_option2">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
