import React from "react";
import teacher1 from "../../../assets/teacher/teacher_2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Teachers() {
  return (
    <div className="rounded-lg shadow-md grid grid-cols-12">
      <div className="col-span-5 overflow-hidden ">
        <img
          className="rounded-l-lg h-full scale-100 hover:scale-[1.1] ease-in duration-500"
          src={teacher1}
          alt=""
        />
      </div>
      <div className="col-span-7 p-10">
        <h1 className=" text-3xl hover:text-red-300 ease-in duration-300">
          Rose Alexander
        </h1>
        <h4 className="text-base mb-4">Managing Director</h4>
        <p className="mb-6">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe
        </p>
        <div className="grid grid-cols-5">
          <p className="bg-blue-300 w-9 h-9 flex justify-center items-center hover:bg-red-300 rounded-full cursor-pointer ease-in duration-300">
            <FaFacebook className="text-white text-xl" />
          </p>
          <p className="bg-blue-300 w-9 h-9 flex justify-center items-center hover:bg-red-300 rounded-full cursor-pointer ease-in duration-300">
            <FaTwitter className="text-white text-xl" />
          </p>
          <p className="bg-blue-300 w-9 h-9 flex justify-center items-center hover:bg-red-300 rounded-full cursor-pointer ease-in duration-300">
            <FaInstagram className="text-white text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
}
