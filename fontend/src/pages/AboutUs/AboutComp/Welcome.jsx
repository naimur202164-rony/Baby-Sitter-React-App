import React from "react";
import pic from "../../../assets/teacher/line-blue-small.png";

export default function Welcome() {
  return (
    <div className="lg:container mx-auto my-28">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="border-4  border-social relative rounded-lg rel w-4/5  mx-auto ">
            <img
              className="rounded-lg relative w-full h-full top-[-30px] right-[-30px]   "
              src="https://freebw.com/templates/jobby/images/about-us-01.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="pl-10 mt-28">
          <div className="mb-10">
            <h1 className="text-5xl text-nav-pink mb-4">Welcome to JOBBY</h1>
            <img src={pic} alt="" />
          </div>
          <div className="w-5/6">
            <p className="mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p>
              By injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generator.
            </p>
          </div>
          <div className="bg-[url('https://freebw.com/templates/jobby/images/icon/btn-01.png')] w-44 h-16 bg-cover text-center bg-no-repeat cursor-pointer scale-95 hover:scale-100 transition ease-linear duration-300 mt-16">
            <span className="text-white text-2xl  font-semibold block">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
