import React, { useEffect, useState } from "react";
import SingleChef from "../SingleChef";
import { useLoaderData } from "react-router-dom";

const Chefs = () => {
  /* const chefs = useLoaderData();
  console.log(chefs); */
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then(
        (data) => setChefs(data.chefs)
        //   .catch(error=>console.error(error))
      );
  }, []);
  return (
    <div className="my-container">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">OUR CHEFS</h2>
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