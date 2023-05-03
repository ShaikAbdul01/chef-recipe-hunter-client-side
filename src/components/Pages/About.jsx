import React from "react";
import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mt-10">REVIEWS USER</h2>
      <Marquee className="">
        <div className="m-16">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 px-16 mb-24">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=" image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                AlexBrown
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Subjective assessment of a chef's cooking abilities and
                performance.
              </span>
            </div>
          </div>
        </div>
        <div className="m-16">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 px-16 mb-24 ">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=" image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                EmilyDavis
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Evaluation of a chef's culinary skills and job performance.
              </span>
            </div>
          </div>
        </div>
        <div className="m-16">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 px-16 mb-24 ">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=" image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                MichaelLee
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Critique of a chef's abilities and performance in the kitchen.
              </span>
            </div>
          </div>
        </div>
        <div className="m-16">
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 px-16 mb-24 ">
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=" image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                SamanthaTaylor
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Analysis of a chef's cooking proficiency and work performance.
              </span>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default About;
