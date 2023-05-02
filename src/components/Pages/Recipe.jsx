import React, { useState } from "react";
import Rating from "react-rating";
import { BsBookmark, BsBookmarkFill, BsStar, BsStarFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const [fold, setFold] = useState(true);
  const [bookmark, setBookmark] = useState(true);
  const { name, cooking_method, rating, ingredients } = recipe;
  //   console.log(recipe);

  const handleClick = () => {
    toast.success("Your favourite recipe added!!");
  };
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
      <span className="font-bold">Ingredients: </span>

      <p className="text-gray-700 mb-4">{ingredients}</p>
      <span className="font-bold">Cooking Method: </span>
      {fold ? (
        <>
          <p className=" text-gray-500">
            {cooking_method.substring(0, 100)}.....
          </p>
          <span
            className="cursor-pointer text-blue-600 "
            onClick={() => setFold(!fold)}
          >
            Read More
          </span>
        </>
      ) : (
        <>
          <p className=" text-gray-900">{cooking_method}.....</p>
          <span
            className="cursor-pointer text-blue-600 "
            onClick={() => setFold(!fold)}
          >
            Read Less
          </span>
        </>
      )}

      {/*  <p className="text-gray-700 font-bold mt-4 mb-2">
        Rating</p> */}
      <div className="flex justify-between items-center mt-4">
        <div className="">
          <Rating
            className="mr-2"
            placeholderRating={rating}
            emptySymbol={<BsStar></BsStar>}
            placeholderSymbol={
              <BsStarFill className="text-warning"></BsStarFill>
            }
            fullSymbol={<BsStarFill></BsStarFill>}
          />
          {rating}
        </div>
        <div className="text-xl">
          {bookmark ? (
            <span
              onClick={() => setBookmark(!bookmark) || handleClick()}
              className="text-blue-600"
            >
              <BsBookmark></BsBookmark>
              <ToastContainer />
            </span>
          ) : (
            <span
              onClick={() => setBookmark(!bookmark)}
              className="text-blue-600"
            >
              <BsBookmarkFill />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
