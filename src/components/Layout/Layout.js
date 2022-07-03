import React from "react";
import { Topbar } from "./";
import Navbar from "./Navbar";
import { SidebarContent } from "../UI";
import { useSelector } from "react-redux";

const SIDEBAR_ID = process.env.REACT_APP_SIDEBAR_ID;

const Layout = (props) => {
  const isRtl = useSelector((state) => state.ui.sidebar.rtl);
  const sidebarClasses = `drawer ${isRtl ? "drawer-end" : ""}`.trim();

  return (
    <div className={sidebarClasses}>
      <input id={SIDEBAR_ID} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Topbar />
        <Navbar />
        <main>{props.children}</main>
      </div>
      <SidebarContent />
    </div>
  );
};

export default Layout;
