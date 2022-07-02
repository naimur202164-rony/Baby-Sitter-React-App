import React from "react";
import blueline from "../../../assets/line-blue.png";
import video from "../../../assets/video-01.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Activites() {

  return (
    <div className="container mx-auto">
      <h2 className="text-center :hover-bg-nav text-nav-pink text-5xl font-bold my-5">
        Activities in the Week
      </h2>
      <div className="h-auto max-w-full  flex justify-center my-5">
        <img src={blueline} alt="" />
      </div>
      <div className=" lg:flex  ">
        <div className="flex-1">
          <div className="h-auto max-w-full ">
            <img className="rounded" src={video} alt="" />
            <div>
              
            </div>
          </div>
          <div>
        
          </div>
        </div>
        <div className="  lg:w-96 w-full ">
          <h1>div2</h1>
        </div>
      </div>
    </div>
  );
}
