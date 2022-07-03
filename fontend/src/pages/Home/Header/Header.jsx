import React from "react";
import logo from "../../../assets/logo.png";
import "./Header";
export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="header_content flex justify-between items-center">
        <div className="logo">
          <a href="/#">
            <img
              className="h-auto max-w-full align-middle"
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <nav className="header-navbar">
          <ul className="list-unstyled flex">
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                  Home
                </span>
              </a>
            </li>
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                  PAGE
                </span>
              </a>
            </li>
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                  CLASSES
                </span>
              </a>
            </li>
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink  p-1 rounded	">
                  TEACHER
                </span>
              </a>
            </li>
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                  BLOG
                </span>
              </a>
            </li>
            <li className="header-navbar_item has-sub">
              <a className="inline-block py-6 px-2.5" href="#/home">
                <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                  SHOP
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
