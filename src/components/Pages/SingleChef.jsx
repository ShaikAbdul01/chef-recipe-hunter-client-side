import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const SingleChef = ({ chef }) => {
  // console.log(chef);
  const { id, picture, name, likes, years_of_experience, num_recipes } = chef;
  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg text-center">
      <LazyLoad offsetVertical={500} debounce={500}>
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={picture}
          alt=""
        />
      </LazyLoad>

      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
      <p className="text-gray-700 ">
        Years of Experience: {years_of_experience}
      </p>
      <p className="text-gray-700 font-bold">
        Numbers of recipes: {num_recipes}
      </p>
      <p className="text-gray-700 font-bold">Likes: {likes}</p>
      <Link to={`/details/${id}`}>
        <button type="button" className="btn-primary w-full block mt-4">
          View Recipes
        </button>
      </Link>
    </div>
  );
};

export default SingleChef;
