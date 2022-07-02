import React from "react";
import bg from "../../../assets/bg-cloud-01.jpg";
import white from "../../../assets/line-white.png";
import class1 from "../../../assets/our-class-01.jpg";
import class2 from "../../../assets/our-class-02.jpg";
import class3 from "../../../assets/our-class-03.jpg";
import class4 from "../../../assets/our-class-04.jpg";
import buttonbg from '../../../assets/link-hover.png';

export default function ClassRoom() {
  return (
    <div className="bg-bottom  bg-blue">
      <section className="pt-32 pb-60 container mx-auto mt-4">
        <h2 className=" text-4xl font-bold text-center hover:text-nav-pink text-white">
          Our Rooms & Classes
        </h2>
        <div className=" flex justify-center pt-4">
          <img src={white} alt="white" />
        </div>
    <div className="my-10">
      <div className="grid lg:grid-cols-2 gap-4">
          <div className="lg:flex  ">
            <div className="p-5 bg-white  px-20 w-full rounded">
              <h2 className="text-2xl hover:text-nav-pink px-3">Music Classes</h2>
              <p className="text-sm px-3 py-2">08:00 am - 05:00 pm</p>
              <p className="text-sm  px-3 py-2">April 29, 2020</p>
              <h3 className="text-sm px-3 py-2 ">Age: 30</h3>
            </div>
            <div className="h-auto max-w-full">
              <img className="" src={class1} alt=""/>
            </div>
          </div>
          <div className="lg:flex  ">
            <div className="p-5 bg-white  px-20 w-full rounded">
              <h2 className="text-2xl hover:text-nav-pink px-3">Music Classes</h2>
              <p className="text-sm px-3 py-2">08:00 am - 05:00 pm</p>
              <p className="text-sm  px-3 py-2">April 29, 2020</p>
              <h3 className="text-sm px-3 py-2 ">Age: 30</h3>
            </div>
            <div className="h-auto max-w-full">
              <img className="" src={class2} alt=""/>
            </div>
          </div>
          <div className="lg:flex  ">
            <div className="p-5 bg-white  px-20 w-full rounded">
              <h2 className="text-2xl hover:text-nav-pink px-3">Music Classes</h2>
              <p className="text-sm px-3 py-2">08:00 am - 05:00 pm</p>
              <p className="text-sm  px-3 py-2">April 29, 2020</p>
              <h3 className="text-sm px-3 py-2 ">Age: 30</h3>
            </div>
            <div className="h-auto max-w-full">
              <img className="" src={class3} alt=""/>
            </div>
          </div>
          <div className="lg:flex  ">
            <div className="p-5 bg-white  px-20 w-full rounded">
              <h2 className="text-2xl hover:text-nav-pink px-3">Music Classes</h2>
              <p className="text-sm px-3 py-2">08:00 am - 05:00 pm</p>
              <p className="text-sm  px-3 py-2">April 29, 2020</p>
              <h3 className="text-sm px-3 py-2 ">Age: 30</h3>
            </div>
            <div className="h-auto max-w-full">
              <img className="" src={class4} alt=""/>
            </div>
          </div>  
      </div>
      <div className="lg:flex justify-center pt-8">
        <img src={buttonbg} alt=""/>
      </div>
    </div>


     
      </section>
      <div>
        <img className="h-auto max-w-full" src={bg} alt="bg" />
      </div>
    </div>
  );
}
