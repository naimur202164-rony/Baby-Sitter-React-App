import React from "react";
import pic from "../../../assets/teacher/line-blue-small.png";

export default function Storyus() {
  return (
    <div className="lg:container mx-auto my-20">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="border-4  border-social relative rounded-lg rel w-4/5  mx-auto ">
            <img
              className="rounded-lg relative w-full h-full top-[-30px] right-[-30px]   "
              src="https://freebw.com/templates/jobby/images/welcome-08.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="pl-10 mt-28">
          <div className="mb-10">
            <h1 className="text-5xl text-nav-pink mb-4">Our Story</h1>
            <img src={pic} alt="" />
          </div>
          <div className="w-5/6">
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat sit voluptatem accusantium
              doloremque laudantium.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-16">
            <div>
              <img
                src="https://freebw.com/templates/jobby/images/icon/sign.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>Catherine Shaw</p>
              <p>- Director -</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
