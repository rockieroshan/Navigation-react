import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>React navigation</h1>
    <NavLink to="/" exact={true} className="navi">
      Home
    </NavLink>
    <NavLink to="/portfolio" exact={true} className="navi">
      Portfolio
    </NavLink>
    <NavLink to="/contact" className="navi">
      Contact
    </NavLink>
  </header>
);

export default Header;
