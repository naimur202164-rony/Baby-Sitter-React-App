import React from "react";
import ClassesItems from "../ClassesItem/ClassesItems";

export default function Banner() {
  return (
    <div className="">
      <div className="bg-[url('https://freebw.com/templates/jobby/images/bg-heading-03.jpg')] w-screen h-96 bg-cover bg-no-repeat relative mb-10">
        <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
          <h2 className="text-nav-pink text-4xl mb-2 font-mono ">Teacher</h2>
          <img
            className="mb-4"
            src="https://freebw.com/templates/jobby/images/icon/line-blue-small.png"
            alt=""
          />
          <p className="font-mono">Home - Teacher</p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center p-3">
          <div className="bg-nav-pink p-2 font-semibold text-white rounded">
            All Class
          </div>
          <div className="bg-blue p-2 font-semibold text-white rounded">
            Play GROUP
          </div>
          <div className="bg-blue p-2 font-semibold text-white rounded">
            PRIMARY
          </div>
          <div className="bg-blue p-2 font-semibold text-white rounded">
            Story
          </div>
        </div>
        <ClassesItems />
      </div>
    </div>
  );
}
