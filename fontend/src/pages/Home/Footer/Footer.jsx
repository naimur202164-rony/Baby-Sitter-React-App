import React from "react";
import logo from "../../../assets/logo.png";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="footer-wrap py-5">
      <div className="w-full h-full flex justify-center py-2.5 ">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex  justify-center my-2 ">
        <li className="py-3 px-2.5 hover:text-pink-600">About US</li>
        <li className="py-3 px-2.5 hover:text-pink-600">CONTACT US</li>
        <li className="py-3 px-2.5   hover:text-pink-600">CLASSES</li>
        <li className="py-3 px-2.5  hover:text-pink-600">TEACHER</li>
        <li className="py-3 px-2.5 hover:text-pink-600  ">BLOG</li>
        <li className="py-3 px-2.5 hover:text-pink-600">SHOP</li>
      </ul>
      <from className="flex justify-center">
        <input
          type="text"
          className="  rounded text-pink-300 p-3   border-4 border-pink-300"
          placeholder="Enter Your Email"
        />
        <button className="p-3 px-5 bg-pink-300  rounded text-white ">
          <AiOutlineMail></AiOutlineMail>
        </button>
       
      </from>
      <div className="container mx-auto">

        <div><hr className="my-5" /></div>
      </div>
    </div>
  );
}
