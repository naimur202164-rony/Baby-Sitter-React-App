import React from "react";
import pic from "../../assets/contact/line-blue-small.png";
import "./Opps.css";
import opps from "../../assets/contact/icon_error.png";

export default function SendMessage() {
  const sendParent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-nav-white  relative mb-10">
      <div className="lg:container relative mx-auto pb-16">
        <div className="flex flex-col justify-center items-center pt-12 mb-12">
          <h1 className="text-nav-pink text-5xl font-bold  my-4">
            Send Message{" "}
          </h1>
          <img className="block" src={pic} alt="" />
        </div>
        <div className="px-10 ">
          <form onSubmit={sendParent}>
            <div className="grid grid-cols-2 gap-5 mb-8">
              <input
                class=" bg-input border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-black focus:outline-none ease-in duration-500 focus:shadow-lg  placeholder-black "
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                class=" bg-input border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-black focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-black"
                type="email"
                name="email"
                placeholder="Your e-mail"
              />
            </div>
            <div>
              <textarea
                class=" bg-input border focus:border-none rounded w-full h-48 py-2 px-3 text-xl font-semibold text-black focus:outline-none  ease-in duration-500 focus:shadow-lg placeholder-black"
                type="number"
                name="Phone"
                placeholder="Your Massage..."
              />
            </div>
            <div className="bg-[url('https://freebw.com/templates/jobby/images/icon/btn-01.png')] w-44 h-16 bg-cover text-center bg-no-repeat mx-auto cursor-pointer scale-75 hover:scale-90 transition ease-linear duration-300 ">
              <input
                type="submit"
                value="SUBMIT >>"
                className="  hover:scale-110 transition ease-linear duration-300 cursor-pointer mt-4  text-lg font-semibold text-black  rounded"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="oppsColor">
        <div className="lg:container relative mx-auto pb-16">
          <div className="flex flex-col justify-center items-center pt-12 mb-12">
            <img className="block" src={opps} alt="" />
            <h1 className="text-nav-black text-5xl  my-4">
              Oops! Something went wrong.
            </h1>
            <p>
              This page didn't load Google Maps correctly. See the JavaScript
              console for technical details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
