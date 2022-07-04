import React from "react";
import blueLine from "../../../assets/line-blue.png";
const cardData = [
  {
    id: 1,
    img: "https://freebw.com/templates/jobby/images/blog-04.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 2,
    img: "https://freebw.com/templates/jobby/images/blog-05.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },

  {
    id: 3,
    img: "https://freebw.com/templates/jobby/images/blog-06.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 4,
    img: "https://freebw.com/templates/jobby/images/blog-10.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },

  {
    id: 5,
    img: "https://freebw.com/templates/jobby/images/blog-11.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 6,
    img: "https://freebw.com/templates/jobby/images/blog-12.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 7,
    img: "https://freebw.com/templates/jobby/images/blog-12.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 8,
    img: "https://freebw.com/templates/jobby/images/blog-14.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
  {
    id: 9,
    img: "https://freebw.com/templates/jobby/images/blog-15.jpg",
    heading: "How to coax children",
    name: "By jhon Doe",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  },
];
export default function HomeBlogs() {
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
      <div className="grid lg:grid-cols-3 gap-3 ">{cardData.map((item=>(
          <div> <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src={item.img} alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-2xl text-gray-700">{item.heading}</h3>
        <h3 class="mt-4 text-sm text-gray-700">{item.text}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p></div>
        )))}</div>
    </div>
  );
}
