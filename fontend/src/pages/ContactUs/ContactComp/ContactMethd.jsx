import React from "react";
import { FaPhoneAlt, FaRegMap } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";
import { GoMail } from "react-icons/go";
// import { FiPhone } from "@react-icons/all-files/fa/FiPhone";

export default function ContactMethd() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 justify-items-center lg:container mx-auto px-10 my-28">
      <div className="flex flex-col  items-center ">
        <div className="flex justify-center items-center w-32 h-32 rounded-full bg-blue mb-8">
          <FaPhoneAlt className="text-6xl text-white" />
        </div>
        <h1 className="text-4xl font-semibold mb-4">Phone</h1>
        <h3 className="text-lg">(363) 287 6443</h3>
        <h3 className="text-lg">(996) 406 3959</h3>
      </div>
      <div className="flex flex-col  items-center ">
        <div className="flex justify-center items-center w-32 h-32 rounded-full bg-progess1  mb-8">
          <FaRegMap className="text-6xl text-white" />
        </div>
        <h1 className="text-4xl font-semibold mb-4">Address</h1>
        <h3 className="text-lg">No 40 Baria Sreet 133/2</h3>
        <h3 className="text-lg">NewYork 13589</h3>
      </div>
      <div className="flex flex-col  items-center ">
        <div className="flex justify-center items-center w-32 h-32 rounded-full bg-nav-pink mb-8">
          <GoMail className="text-6xl text-white" />
        </div>
        <h1 className="text-4xl font-semibold mb-4">Email</h1>
        <h3 className="text-lg">cheryl-hart@example.com</h3>
        <h3 className="text-lg">sandraburns@example.com</h3>
      </div>
      <div className="flex flex-col  items-center ">
        <div className="flex justify-center items-center w-32 h-32 rounded-full bg-progess3 mb-8">
          <BsAlarm className="text-6xl text-white" />
        </div>
        <h1 className="text-4xl font-semibold mb-4">Open Time</h1>
        <h3 className="text-lg">Monday-Saturday: 6AM – 9PM</h3>
        <h3 className="text-lg">Sunday: Closed</h3>
      </div>
    </div>
  );
}
