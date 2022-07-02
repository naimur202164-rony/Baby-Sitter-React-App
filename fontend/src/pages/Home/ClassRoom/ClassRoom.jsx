import React from "react";
import bg from "../../../assets/bg-cloud-01.jpg";
import white from "../../../assets/line-white.png";
export default function ClassRoom() {
  return (
    <div className="bg-bottom  bg-blue">
      <section className="pt-32 pb-60 container mx-auto mt-4">
        <h2 className=" text-4xl font-bold text-center hover:text-nav-pink text-white">
          Our Rooms & Classes
        </h2>
        <div className=" flex justify-center pt-4">
          <img src={white} alt="white"/>
        </div>
      </section>
      <div>
        <img className="h-auto max-w-full" src={bg} alt="bg" />
      </div>
    </div>
  );
}
