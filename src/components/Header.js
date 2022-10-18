import React from "react";
import {Link, NavLink } from "react-router-dom";

const Header = () => {

    const activeStyle = {
      backgroundColor: "rgb(75, 85, 99)",
    };

  return (
    <div>
      <div className="navbar sticky top-0 bg-emerald-200">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-black text-xl">
            Auth Router Context
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-black p-0">
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="btn bg-transparent bg-gray  hover:bg-gray-600 border-none hover:text-white btn-primary mr-2"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="btn bg-transparent hover:bg-gray-600 border-none hover:text-white btn-primary mr-2"
                to="/login"
              >
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="btn bg-transparent  hover:bg-gray-600 border-none hover:text-white btn-primary"
                to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
