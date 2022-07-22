import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import blueLine from "../../../assets/line-blue.png";

export default function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/blogs").then((data) => {
      // console.log(data.data.blogs);
      setBlogs(data.data.blogs);
    });
  }, []);
  return (
    <div className="container mx-auto ">
      <div className="bg-[url('https://freebw.com/templates/jobby/images/bg-heading-04.jpg')] w-screen h-96 bg-cover bg-no-repeat relative mb-10">
        <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
          <h2 className="text-nav-pink text-4xl mb-2 font-mono ">
            Blog Masonry
          </h2>
          <img className="mb-4" src={blueLine} alt="" />
          <p className="font-mono">Home - blog</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 ">
        {blogs.map((item) => (
          <div>
            {" "}
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={item.image}
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                class="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-2xl text-gray-700">{item.name}</h3>
            <h3 class="mt-4 text-sm text-gray-700">{item.description}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
