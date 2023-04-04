import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Badge from "../Badge/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const cartLength = useSelector((state) => state.vinylStore.cart.length);
  const navActive = ({ isActive }) => (isActive ? "selected" : "");

  return (
    <header>
      <div className="container">
        <div className="row__header">
          <div className="header__nav">
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <NavLink className={navActive} to={"/"} end>
                  Home
                </NavLink>
                <NavLink className={navActive} to={"/new"}>
                  New
                </NavLink>
                <NavLink className={navActive} to={"/contact"}>
                  Contact
                </NavLink>
                <NavLink className={navActive} to={"/blog"}>
                  Blog
                </NavLink>
                <Badge handleToggle={handleToggle} badge={cartLength}/>
                <Cart toggle={toggle} handleToggle={handleToggle} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

