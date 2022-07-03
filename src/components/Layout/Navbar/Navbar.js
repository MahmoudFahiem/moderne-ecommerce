import React from "react";
import { uiActions } from "../../../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { NavList } from "./";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.showCart());
  };

  const showNavListHandler = () => {
    dispatch(uiActions.showNavbar());
  };
  return (
    <nav className="container navbar">
      <div className="navbar-start xl:justify-between">
        <div className="flex-none xl:hidden">
          <button
            onClick={showNavListHandler}
            className="btn btn-square btn-ghost"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="hidden flex-none xl:block">
          <NavList className="menu-horizontal ml-auto" />
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-4xl font-light uppercase tracking-wider">
          moderne
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <SearchIcon className="h-5 w-5" />
        </button>
        <button className="btn btn-ghost btn-circle" onClick={showCartHandler}>
          <div className="indicator">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="badge indicator-item badge-xs badge-primary"></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
