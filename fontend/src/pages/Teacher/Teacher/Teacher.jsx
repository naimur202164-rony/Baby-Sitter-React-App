import React, { useEffect, useState } from "react";
import axios from "axios";
import pic from "../../../assets/teacher/line-blue-small.png";
import ContactChild from "./ContactChild";
import Teachers from "./Teachers";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/teachers").then((data) => {
      setTeachers(data.data.teacher);
    });
  }, []);
  return (
    <div>
      <div>
        <div className="bg-[url('https://i.ibb.co/jbHfDwP/Bg-Teacher.jpg')] w-screen h-96 bg-cover bg-no-repeat relative mb-10">
          <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
            <h2 className="text-nav-pink text-4xl mb-2 font-mono ">Teacher</h2>
            <img className="mb-4" src={pic} alt="" />
            <p className="font-mono">Home - Teacher</p>
          </div>
        </div>
        <div className=" lg:container mx-auto">
          <div className=" flex flex-col justify-center items-center  mx-auto">
            <h1 className="text-5xl text-nav-pink font-mono mb-2">
              Our Teacher
            </h1>
            <img src={pic} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-5 px-10 mt-5">
            {teachers.map((teacher, index) => (
              <Teachers key={index} teacher={teacher} />
            ))}
          </div>
        </div>
        {/* <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vitae eum ducimus nostrum iusto explicabo et, voluptas libero minima
          saepe! Voluptatem, magnam? Alias eum earum neque quos sequi facere
          minima.
        </div> */}
      </div>
      <ContactChild />
    </div>
  );
}
