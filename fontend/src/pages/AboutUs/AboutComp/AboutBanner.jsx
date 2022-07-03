import React from "react";
import pic from "../../../assets/teacher/line-blue-small.png";

export default function AboutBanner() {
  return (
    <div className="bg-[url('https://freebw.com/templates/jobby/images/bg-heading-01.jpg')]   bg-cover bg-no-repeat relative mb-10">
      <div className="reletive">
        <div className="h-96">
          <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
            <h2 className="text-nav-pink text-4xl mb-2 font-mono ">Teacher</h2>
            <img className="mb-4" src={pic} alt="" />
            <p className="font-mono">Home - Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}
