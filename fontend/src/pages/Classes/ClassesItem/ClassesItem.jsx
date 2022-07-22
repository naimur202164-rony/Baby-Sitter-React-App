import React from "react";

export default function ClassesItem({ item }) {
  console.log(item);
  const { images, name, time, age } = item;
  return (
    <div className="w-64  bg-partner flex flex-col rounded shadow-2xl ">
      <div className="relative overflow-hidden">
        <img
          src={images}
          className="rounded-t scale-100 hover:scale-[1.1] ease-in duration-500"
          alt=""
        />
        <div className="absolute top-0 right-5 bg-classColor border-b-4 border-progess1 rounded-b-sm">
          <h2 className="text-2xl text-white font-semibold py-2 px-4">$22</h2>
        </div>
      </div>
      <div className="pb-5 pt-2">
        <div className="text-center">
          <h2 className="text-3xl font-semibold py-2 px-5">{name}</h2>
        </div>
        <div className="text-center pb-5">
          <p className="text-lg">{time}</p>
        </div>
        <div className="text-center text-lg">
          <p className="">Age</p>
          <p>{age}</p>
        </div>
      </div>
    </div>
  );
}
