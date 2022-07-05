import React from "react";
import pic from "../../../assets/teacher/line-blue-small.png";
export default function ContactUsFro() {
  const contactusfrom = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:container mx-auto  py-10">
      <div>
        <div className="flex flex-col justify-center items-center mb-8 ">
          <h2 className="text-nav-pink text-6xl mb-2 font-mono font-bold">
            Send Message
          </h2>
          <img className="mb-4" src={pic} alt="" />
        </div>
        <div>
          {" "}
          <form onSubmit={contactusfrom}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 px-10 mb-8">
              <input
                class=" bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg  focus:outline-none "
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                class=" bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg  focus:outline-none"
                type="text"
                name="name"
                placeholder="Your E-Mail"
              />
            </div>
            <div className="px-10">
              <textarea
                className="bg-input border border-blue focus:border-nav-pink rounded w-full py-2 px-3 text-lg   focus:outline-none  "
                name="message"
                id=""
                cols="30"
                rows="7"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="bg-[url('https://freebw.com/templates/jobby/images/icon/btn-01.png')] w-44 h-16 bg-cover text-center bg-no-repeat mx-auto cursor-pointer scale-75 hover:scale-90 transition ease-linear duration-300 ">
              <input
                type="submit"
                value="SUBMIT"
                className="  hover:scale-110 transition ease-linear duration-300 cursor-pointer mt-4  text-lg font-semibold text-white  rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
