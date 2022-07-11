import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/random">Random</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/relaxation">Relaxation</NavLink>
        <NavLink to="/social">Social</NavLink>
        <NavLink to="/charity">Charity</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
