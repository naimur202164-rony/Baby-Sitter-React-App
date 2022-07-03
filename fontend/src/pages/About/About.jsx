import React, { useEffect, useState } from "react";
import pic from "../../assets/about/line-blue-small.png";
import banner from "../../assets/about/about-us-01.jpg";
import welcome from "../../assets/about/welcome-09.jpg";
import welcome2 from "../../assets/about/welcome-08.jpg";
import Footer from "../Home/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";

AOS.init();
export default function About() {
  return (
    <div>
      <div>
        <div className="bg-[url('https://i.ibb.co/jbHfDwP/Bg-Teacher.jpg')] w-screen h-96 bg-cover bg-no-repeat relative mb-10">
          <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
            <h2 className="text-nav-pink text-4xl mb-2 font-mono ">About Us</h2>
            <img className="mb-4" src={pic} alt="" />
            <p className="font-mono">Home - About Us</p>
          </div>
        </div>
      </div>
      <div className="banner ">
        <div className="flex flex-row ml-12 ">
          <img src={banner} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <div className="ml-12 mt-12 px-12">
              <h1 className="text-nav-pink text-4xl mb-2 font-mono ">
                Welcome to JOBBY
              </h1>
              <img className="mb-4" src={pic} alt="" />
              <p className="py-6">
                There are many variations of passages of Lorem Ipsum available,
                but the <br /> majority have suffered alteration in some form.
              </p>
              <p className="py-6">
                {" "}
                By injected humour, or randomised words which don't look even
                slightly
                <br /> believable. If you are going to use a passage of Lorem
                Ipsum, you need to
                <br /> be sure there isn't anything embarrassing hidden in the
                middle of text. All
                <br /> the Lorem Ipsum generator.
              </p>
              <div className="bg-[url('https://freebw.com/templates/jobby/images/icon/btn-01.png')] w-44 h-16 bg-cover text-center bg-no-repeat mx-auto cursor-pointer scale-75 hover:scale-90 transition ease-linear duration-300 ">
                <input
                  type="submit"
                  value="LEARN MORE >>"
                  className="  hover:scale-110 transition ease-linear duration-300 cursor-pointer mt-4  text-lg font-semibold text-white  rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome ">
        <div className="flex flex-row ml-12 py-8">
          <div>
            <div className="ml-12 mt-12 px-12">
              <h1 className="text-nav-pink text-4xl mb-2 font-mono ">
                What We Bring
              </h1>
              <img className="mb-4" src={pic} alt="" />

              <div className="skill-container mt-2">
                <ul>
                  <li data-aos="fade-left">
                    <div className="flex">
                      <p>Pass Rate A</p>
                      <div className="ml-12"> 82%</div>
                    </div>
                    <span className="skill">
                      <span className="html flex justify-center items-center"></span>
                    </span>
                  </li>
                  <li data-aos="fade-right">
                    <div className="flex">
                      <p>Happy Children</p>
                      <div className="ml-12"> 90%</div>
                    </div>
                    <span className="skill">
                      <span className="css flex justify-center items-center"></span>
                    </span>
                  </li>
                  <li data-aos="fade-left">
                    <div className="flex">
                      <p>Happy Parents</p>
                      <div className="ml-12"> 100%</div>
                    </div>
                    <span className="skill">
                      <span className="js flex justify-center items-center"></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={welcome} className="max-w-sm rounded-lg shadow-2xl " />
        </div>
      </div>
      <div className="banner ">
        <div className="flex flex-row ml-12 ">
          <img src={welcome2} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <div className="ml-12 mt-12 px-12">
              <h1 className="text-nav-pink text-4xl mb-2 font-mono ">
                Our Story
              </h1>
              <img className="mb-4" src={pic} alt="" />
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                <br /> tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
                <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
                <br /> commodo consequat sit voluptatem accusantium doloremque
                laudantium.
              </p>
              <p className="py-6">
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
                <br /> eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="py-6 ml-12">
                <h3>Catherine Shaw</h3>
                <p>- Director -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
