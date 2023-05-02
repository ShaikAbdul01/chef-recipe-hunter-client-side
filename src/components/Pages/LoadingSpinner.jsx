import React from "react";

import { Blocks } from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-88px)">
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default LoadingSpinner;