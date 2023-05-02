import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const detailsData = useLoaderData();
  //   console.log(detailsData);
  const {
    id,
    description,
    likes,
    name,
    num_recipes,
    picture,
    years_of_experience,
  } = detailsData.chef;
  return (
    <>
      <div className="my-container">
        {/* Container Box */}
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-2xl lg:flex-row sm:mx-auto ">
          {/* Image Container */}
          <div className=" lg:w-1/2 h-full">
            <img
              src={picture}
              alt="book cover"
              className="object-cover w-full  lg:h-[400px]"
            />
          </div>
          {/* Details Container */}
          <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {name}
            </h5>
            <p className="text-gray-900">
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className=" text-gray-900">
              <span className="font-bold">Number of Recipes:</span>{" "}
              {num_recipes}
            </p>
            <p className=" text-gray-900">
              <span className="font-bold">Years of Experience:</span>
              {years_of_experience}
            </p>

            <p className="mb-5 text-gray-900">
              <span className="font-bold">Likes:</span> {likes}
            </p>
          </div>
        </div>
      </div>

      <div className="my-container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Chef Recipes</h2>
        </div>
        <div className="product-container">
          {detailsData.recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
