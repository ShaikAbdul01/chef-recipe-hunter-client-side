import React, { useEffect, useState } from "react";
import SingleChef from "../SingleChef";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const Chefs = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

   const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-shaikabdul01.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data.chefs));
  }, []); 

  // const chefs=useLoaderData()
  // console.log(chefs);

  return (
    <div className="my-container ">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center">OUR CHEFS</h2>
      </div>
      <div className="product-container">
        {chefs?.map((chef) => (
          <SingleChef key={chef.id} chef={chef}></SingleChef>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
