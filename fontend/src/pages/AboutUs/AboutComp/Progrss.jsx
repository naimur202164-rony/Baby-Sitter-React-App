import React from "react";
import pic from "../../../assets/teacher/line-blue-small.png";

export default function Progrss() {
  return (
    <div className="lg:container mx-auto my-40">
      <div className="grid grid-cols-2 gap-10">
        <div className="pl-10">
          <h1 className="text-5xl text-nav-pink mb-4">Welcome to JOBBY</h1>
          <img src={pic} alt="" />
          <div>
            <div className="my-8">
              <p className="text-xl   text-progresscolor mb-4">Pass Rate A</p>
              <div className="w-full  border-2 border-progess1  rounded-full">
                <div
                  className="bg-progess1 text-xs font-medium  text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "82%" }}
                >
                  {" "}
                  50%
                </div>
              </div>
            </div>
            <div className="my-8">
              <p className="text-xl  mb-4 text-progresscolor">Happy Children</p>
              <div className="w-full  border-2 border-progess2  rounded-full">
                <div
                  className="bg-progess2 text-xs font-medium  text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "82%" }}
                >
                  {" "}
                  50%
                </div>
              </div>
            </div>
            <div className="my-8">
              <p className="text-xl  mb-4 text-progresscolor">Happy Parents</p>
              <div className="w-full  border-2 border-progess3  rounded-full">
                <div
                  className="bg-progess3 text-xs font-medium  text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: "100%" }}
                >
                  {" "}
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-4  border-social relative rounded-lg rel w-4/5  mx-auto ">
            <img
              className="rounded-lg relative w-full h-full top-[-30px] right-[-30px]   "
              src="https://freebw.com/templates/jobby/images/welcome-09.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
