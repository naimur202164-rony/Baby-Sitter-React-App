import React from "react";
import linBlur from "../../../assets/line-blue.png";
import blog1 from "../../../assets/blog-01.jpg";
import blog2 from "../../../assets/blog-02.jpg";
export default function OurBlog() {
  return (
    <div className="container mx-auto">
      <div className="">
        <div>
          <h2 className="text-center text-4xl text-nav-pink font-bold">
            Our Blog
          </h2>
          <div className="h-auto  max-w-full flex justify-center pt-5 mt-2 ">
            <img src={linBlur} alt="" />
          </div>
          <p className="text-center  mt-10">
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias consequatur aut perferendis
            doloribus asperiores repellat et voluptates repudiandae sint et
            molestiae non recusandae.
          </p>
        </div>
      </div>
    </div>
  );
}
