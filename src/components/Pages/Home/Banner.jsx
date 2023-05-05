import React from "react";
import Lottie from "lottie-react";
import food from "../../../assets/food.json";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
const Banner = () => {
  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row border-2 border-sky-600 mt-4">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 ">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-4xl xl:mb-8">
              Experience the authentic taste of Bangladesh with our curated
              recipes <br />
              <span className="text-blue-500 mb-4">- BD Chef Hub</span>
            </h2>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              <Link to="register" className="flex items-center">
                Sing Up <HiArrowSmallRight />
              </Link>
            </button>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={food} loop={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
