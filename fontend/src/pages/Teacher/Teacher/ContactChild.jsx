import React from "react";

export default function ContactChild() {
  const ContactParent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-nav-pink  relative mb-10">
      <div className="lg:container relative mx-auto pb-16">
        <div className="flex flex-col justify-center items-center pt-12 mb-12">
          <h1 className="text-white text-5xl font-bold  my-4">
            How To Enroll Your Child{" "}
          </h1>
          <img
            className="block"
            src="https://freebw.com/templates/jobby/images/icon/line-white.png"
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="absolute top-16 right-12">
          <img
            src="https://freebw.com/templates/jobby/images/icon/cloud-02.png"
            alt=""
          />
        </div>
        <div className="px-10 ">
          <form onSubmit={ContactParent}>
            <div className="grid grid-cols-2 gap-5 mb-8">
              <input
                class=" bg-input border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg  placeholder-white "
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                class=" bg-input  border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-white"
                type="text"
                name="addus"
                placeholder="Add us to waiting list"
              />
              <input
                class=" bg-input border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                class=" bg-input  border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none  ease-in duration-500 focus:shadow-lg placeholder-white"
                type="text"
                name="number"
                placeholder="Phone"
              />
            </div>
            <div>
              <textarea
                class=" bg-input border focus:border-none rounded w-full h-48 py-2 px-3 text-xl font-semibold text-white focus:outline-none  ease-in duration-500 focus:shadow-lg placeholder-white"
                type="number"
                name="Phone"
                placeholder="Your Massage"
              />
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
        <div data-aos="fade-right" className="absolute bottom-20 left-16">
          <img
            src="https://freebw.com/templates/jobby/images/icon/cloud-02.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="absolute bottom-0 scale-150"
        src="https://freebw.com/templates/jobby/images/icon/bg-cloud-08.png"
        alt=""
      />
    </div>
  );
}
