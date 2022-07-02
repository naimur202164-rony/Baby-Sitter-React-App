import React from "react";
import blueline from "../../../assets/line-blue.png";
import video from "../../../assets/video-01.jpg";
import flag from "../../../assets/flag.png";
import dancling from "../../../assets/dancing.png"
export default function Activites() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center :hover-bg-nav text-nav-pink text-5xl font-bold my-5">
        Activities in the Week
      </h2>
      <div className="h-auto max-w-full  flex justify-center my-5">
        <img src={blueline} alt="" />
      </div>
      <div className=" lg:flex ">
        <div className="flex-1">
          <div className="h-auto max-w-full ">
            <img className="rounded" src={video} alt="" />
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="  lg:w-96 w-full pl-2 ">
          <div className="border-2">
            <div className="pl-1 h-auto max-w-full">
              <img src={flag} alt="" />
            </div>
            <div className="text-center font-bold text-3xl">
              <h2>
                How to Enroll
                <br />
                Your Child to
                <br /> A Class?
              </h2>
              <div className="h-auto max-w-full flex justify-center"><img src={dancling} alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
