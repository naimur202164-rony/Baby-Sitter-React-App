import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import "./Header";
export default function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full reletive top-0 left-0 z-50 ">
      {/* <div className="header_content flex justify-between items-center"> */}
      {/* <div className="logo">
          <a href="/#">
            <img
              className="h-auto max-w-full align-middle"
              src={logo}
              alt="logo"
            />
          </a>
        </div> */}
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-40  ">
        <div
          className="font-bold  cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <div className="logo">
            <a href="/#">
              <img
                className="h-auto max-w-full align-middle"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }
          z-50
          `}
        >
          <li className=" md:ml-8  md:my-0 my-7">
            <a className="  hover:text-cyan-500 duration-500" href="/">
              {/* li-header-navbar_item has-sub, a-inline-block py-6 px-2.5 */}
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                HOME
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/about">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                ABOUT US
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/class">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                CLASSES
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/teacher">
              <span className="hover:text-amber hover:bg-nav-pink  p-1 rounded	">
                TEACHER
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/blog">
              <span className="hover:text-amber hover:bg-nav-pink p-1 rounded">
                BLOG
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/contact">
              <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                CONTACT US
              </span>
            </a>
          </li>
          <li className=" md:ml-8  md:my-0 my-7">
            <a className=" hover:text-cyan-500 duration-500" href="/login">
              <span className="hover:text-amber hover:bg-nav-pink p-1   rounded">
                LOGIN
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </div>
  );
}
