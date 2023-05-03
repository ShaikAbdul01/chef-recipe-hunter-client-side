import React from "react";
import Lottie from "lottie-react";
import food from "../../../assets/food.json";
const Banner = () => {
  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row border-2 border-sky-600 mt-4">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 ">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Affordable Recipes Made Delicious{" "}
              <br className="hidden md:block " />{" "}
              <p className="inline-block text-blue-400 mt-4">
                My Chef Recipe Hunter
              </p>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Discover the best budget-friendly recipes on Budget Bytes. From
              quick weeknight meals to special treats, we've got you covered.
              Start exploring and eat deliciously without overspending!
            </p>
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
