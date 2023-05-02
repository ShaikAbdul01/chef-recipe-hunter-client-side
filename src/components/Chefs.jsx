import React, { useEffect, useState } from "react";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => console.log(data.chefs)
    //   .catch(error=>console.error(error))
      );
      
  }, []);
  return <div>hello</div>;
};

export default Chefs;
