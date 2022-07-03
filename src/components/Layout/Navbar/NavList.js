import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", text: "home" },
  { to: "/shop", text: "shop" },
  { to: "/about-us", text: "about us" },
  { to: "/contact-us", text: "contact us" },
];

const NavList = (props) => {
  const classes = `menu ${props.className}`.trim();
  const navLinkClasses = (props) => {
    const defaultClasses = "hover:text-primary capitalize text-lg";
    return props.isActive ? `${defaultClasses} text-primary ` : defaultClasses;
  };

  const navItems = navLinks.map((navLink, indx) => (
    <li key={indx}>
      <NavLink className={navLinkClasses} to={navLink.to}>
        {navLink.text}
      </NavLink>
    </li>
  ));
  return (
    <ul tabIndex="0" className={classes}>
      {navItems}
    </ul>
  );
};

export default NavList;
