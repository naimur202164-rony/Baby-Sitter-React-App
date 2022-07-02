import React from "react";

export default function ContactChild() {
  return (
    <div className="bg-red-400/75 h-screen relative mb-10">
      <div className="lg:container mx-auto">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-5xl font-bold text-white my-4">
            How To Enroll Your Child{" "}
          </h1>
          <img
            className="block"
            src="https://freebw.com/templates/jobby/images/icon/line-white.png"
            alt=""
          />
        </div>
        <div className="px-10">
          <form>
            <div className="grid grid-cols-2 gap-5 mb-8">
              <input
                class=" bg-red-300  border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-white"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                class=" bg-red-300  border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-white"
                type="text"
                name="addus"
                placeholder="Add us to waiting list"
              />
              <input
                class=" bg-red-300  border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none ease-in duration-500 focus:shadow-lg placeholder-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                class=" bg-red-300 border focus:border-none rounded w-full py-2 px-3 text-xl font-semibold text-white focus:outline-none  ease-in duration-500 focus:shadow-lg placeholder-white"
                type="number"
                name="Phone"
                placeholder="Phone"
              />
            </div>
            <div>
              <textarea
                class=" bg-red-300 border focus:border-none rounded w-full h-64 py-2 px-3 text-xl font-semibold text-white focus:outline-none  ease-in duration-500 focus:shadow-lg placeholder-white"
                type="number"
                name="Phone"
                placeholder="Your Massage"
              />
            </div>
            <input
              type="submit"
              value="SUBMIT"
              className="mx-auto block text-lg font-semibold text-white px-5 py-2 rounded bg-blue-400"
            />
          </form>
        </div>
      </div>
      <img
        className="absolute bottom-0 scale-125"
        src="https://freebw.com/templates/jobby/images/icon/bg-cloud-08.png"
        alt=""
      />
    </div>
  );
}
