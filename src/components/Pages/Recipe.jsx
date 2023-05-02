import React, { useState } from "react";

const Recipe = ({ recipe }) => {
  const [fold, setFold] = useState(true);
  //   console.log(recipe);
  const { name, cooking_method, rating, ingredients } = recipe;
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
      <p className="text-gray-700 font-bold">Rating: {rating}</p>
    </div>
  );
};

export default Recipe;
