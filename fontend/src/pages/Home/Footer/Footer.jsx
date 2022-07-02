import React from "react";
import logo from "../../../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="footer-wrap py-5">
      <div className="w-full h-full flex justify-center py-2.5 ">
        <img src={logo} alt="logo" />
      </div>
      <ul className="  flex justify-center lg:flex-row  flex-col items-center my-2  ">
        <li className="py-3 px-2.5 hover:text-nav-pink">About US</li>
        <li className="py-3 px-2.5 hover:text-nav-pink">CONTACT US</li>
        <li className="py-3 px-2.5  hover:text-nav-pink">CLASSES</li>
        <li className="py-3 px-2.5  hover:text-nav-pink">TEACHER</li>
        <li className="py-3 px-2.5 hover:text-nav-pink ">BLOG</li>
        <li className="py-3 px-2.5 hover:text-nav-pink">SHOP</li>
      </ul>
    <from className="flex justify-center">
       <input
          type="text"
          className="  rounded text-nav-pink p-3   border-4 border-nav-pink"
          placeholder="Enter Your Email"
        />
        <button className="p-3 px-5 bg-nav-pink  rounded text-white ">
          <AiOutlineMail></AiOutlineMail>
        </button>
      </from>
      <div className="container mx-auto">
        <div>
          <hr className="my-5" />
        </div>
      </div>
    </div>
  );
}
