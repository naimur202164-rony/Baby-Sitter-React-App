import React from "react";
import lineblue from "../../../assets/line-blue.png";
import wellcome1 from "../../../assets/welcome-01.jpg";
import wellcome2 from "../../../assets/welcome-02.jpg";
import wellcome3 from "../../../assets/welcome-03.jpg";
import wellcome4 from "../../../assets/welcome-03.jpg";
export default function Wellcome() {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="  text-center text-5xl font-semibold text-nav-pink hover:text-pink-600    ">
          Welcome to JOBBY
        </h2>
        <div className="h-full w-full flex justify-center  my-4 pt-2  ">
          <img className="h-auto  max-w-full" src={lineblue} alt="" />
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4  gap-4">
          <div>
            <div>
              <div className=" flex justify-center">
                <img
                  className="lg:h-60  h-auto max-w-full"
                  src={wellcome1}
                  alt="Wellcome"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl my-2  hover:text-nav-pink font-bold ">
                  Healthy Meals
                </h2>
                <p className="text-center">
                  Nemo enim ipsam voluptatem quia
                  <br /> voluptas sit aspernatur aut
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div>
            <div>
              <div className="flex justify-center">
                <img
                  className="lg:h-60 h-auto max-w-full"
                  src={wellcome2}
                  alt="Wellcome"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl my-2    font-bold hover:text-nav-pink">
                  Healthy Meals
                </h2>
                <p className="text-center">
                  Nemo enim ipsam voluptatem quia
                  <br /> voluptas sit aspernatur aut
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div>
              <div className="flex justify-center">
                <img
                  className="lg:h-60 h-auto max-w-full"
                  src={wellcome3}
                  alt="Wellcome"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl  my-2 hover:text-nav-pink  font-bold text-pink-400">
                  Healthy Meals
                </h2>
                <p className="text-center">
                  Nemo enim ipsam voluptatem quia
                  <br /> voluptas sit aspernatur aut
                </p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div>
            <div>
              <div className="flex justify-center">
                <img
                  className="lg:h-60 mty-2 h-auto max-w-full"
                  src={wellcome4}
                  alt="Wellcome"
                />
              </div>
              <div>
                <h2 className="text-center text-2xl  my-2 hover:text-nav-pink  font-bold text-pink-400">
                  Healthy Meals
                </h2>
                <p className="text-center">
                  Nemo enim ipsam voluptatem quia
                  <br /> voluptas sit aspernatur aut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
