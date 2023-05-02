import React, { useState } from "react";

const Recipe = ({ recipe }) => {
    const [fold,setFold]=useState(true)
  console.log(recipe);
  const { name, cooking_method, rating, ingredients } = recipe;
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
      {/* {ingredients.map((ingredient) => {
        <ul className="text-gray-700 font-bold">
          <li>{ingredient}</li>
        </ul>;
      })} */}
      <ul className="text-gray-700 font-bold mb-4">
        Ingredients:
        <li className="font-normal">{ingredients}</li>
      </ul>
      <>fold &&
        <p className=" text-gray-500">{cooking_method.substring(0, 100)}.....</p>
        <span
          className="cursor-pointer text-blue-600 "
          onClick={() => setFold(!fold)}
        >
          Read More
        </span>
      </>
      
      
     
      {/* <ul className="text-gray-700 font-bold mb-4">
        Cooking method:
        <li className="font-normal">{cooking_method}</li>
      </ul> */}
      ;<p className="text-gray-700 font-bold">Rating: {rating}</p>
    </div>
  );
};

export default Recipe;
