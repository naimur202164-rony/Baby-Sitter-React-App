import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Teachers({ teacher }) {
  const { name, position, description, images } = teacher;
  return (
    <div className="rounded-lg shadow-2xl grid grid-cols-12 mb-20">
      <div className="col-span-5 overflow-hidden ">
        <img
          className="rounded-l-lg  h-full scale-100 hover:scale-[1.1] ease-in duration-500"
          src={images}
          alt=""
        />
      </div>
      <div className="col-span-7 py-5 px-3">
        <h1 className=" text-3xl hover:text-red-300 ease-in duration-300">
          {name}
        </h1>
        <h4 className="text-base mb-2">{position}</h4>
        <p className="mb-6">{description}</p>
        <div className="grid grid-cols-5">
          <p className="bg-social w-9 h-9 flex justify-center items-center hover:bg-nav-pink rounded-full cursor-pointer ease-in duration-300">
            <FaFacebook className="text-white text-xl" />
          </p>
          <p className="bg-social w-9 h-9 flex justify-center items-center hover:bg-nav-pink rounded-full cursor-pointer ease-in duration-300">
            <FaTwitter className="text-white text-xl" />
          </p>
          <p className="bg-social w-9 h-9 flex justify-center items-center hover:bg-nav-pink rounded-full cursor-pointer text-white ease-in duration-300">
            <FaInstagram className=" text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
}
