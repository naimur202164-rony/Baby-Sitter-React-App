import React from "react";
import pic from "../../assets/about/line-blue-small.png";
import Footer from "../Home/Footer/Footer";
import SendMessage from "./SendMessage";
// import { FaEmail, FaInstagram, FaTwitter } from "react-icons/fa";
import phone from "../../assets/contact/phone.PNG";
import address from "../../assets/contact/address.PNG";
import email from "../../assets/contact/email.PNG";
import opentime from "../../assets/contact/opentime.PNG";

export default function Contact() {
  return (
    <div>
      <div>
        <div className="bg-[url('https://freebw.com/templates/jobby/images/landing/slide-landing-02.png')] w-screen h-96 bg-cover bg-no-repeat relative mb-10">
          <div className="absolute  w-80 bg-white bottom-0 left-10 pl-10 pt-6 rounded-t-lg">
            <h2 className="text-nav-pink text-4xl mb-2 font-mono ">
              Contact Us
            </h2>
            <img className="mb-4" src={pic} alt="" />
            <p className="font-mono">Home - Contact Us</p>
          </div>
        </div>
      </div>
      <div className="col-span-7 p-10 ml-12">
        <div className="grid grid-cols-5">
          <div className="rounded-l-lg h-full scale-100 hover:scale-[1.1] ease-in duration-500">
            <img src={phone} alt="" />
            <div className="ml-12">
              {" "}
              <h1 className="text-4xl font-bold ">Phone</h1>
              <p>
                (363) 287 6443 <br /> (996) 406 3959
              </p>
            </div>
          </div>
          <div className="rounded-l-lg h-full scale-100 hover:scale-[1.1] ease-in duration-500">
            <img src={address} alt="" />
            <div className="ml-12">
              {" "}
              <h1 className="text-4xl font-bold ">Address</h1>
              <p>
                No 40 Baria Sreet 133/2
                <br /> NewYork 13589
              </p>
            </div>
          </div>
          <div className="rounded-l-lg h-full scale-100 hover:scale-[1.1] ease-in duration-500">
            <img src={email} alt="" />
            <div className="ml-12">
              {" "}
              <h1 className="text-4xl font-bold ">Email</h1>
              <p>
                cheryl-hart@example.com
                <br /> sandraburns@example.com
              </p>
            </div>
          </div>
          <div className="rounded-l-lg h-full scale-100 hover:scale-[1.1] ease-in duration-500">
            <img src={opentime} alt="" />
            <div className="ml-12">
              {" "}
              <h1 className="text-4xl font-bold ">Open Time</h1>
              <p>
                Monday-Saturday: 6AM – 9PM
                <br /> Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      <Footer />
    </div>
  );
}
