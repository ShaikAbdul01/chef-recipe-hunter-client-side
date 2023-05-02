import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return <div></div>;
};

export default ChefDetails;
