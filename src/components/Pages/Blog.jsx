import React, { useState } from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <>
    <div className="mx-auto text-center">

      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            type="button"
            className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-24 "
          >
            Download Pdf
          </button>
        )}
      </Pdf>
    </div>

      <div
        ref={ref}
        className="mt-10 bg-gray-100 p-6 rounded shadow-lg my-container mb-10"
      >
        <h1 className="text-4xl font-extrabold text-center mb-10">Question</h1>
        <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            1. What is differences between uncontrolled and controlled
            components?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>A controlled component is a
            component that manages its state through props, while an
            uncontrolled component manages its own state internally and reads
            values directly from the DOM. Controlled components offer more
            control over the form state, while uncontrolled components offer a
            simpler and more declarative API.
          </p>
        </article>
        <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            2. How to validate React props using PropTypes?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>To validate React props
            using PropTypes, i can import PropTypes from the 'prop-types'
            package and define the expected prop types and their corresponding
            data types in the component's propTypes object.
          </p>
        </article>
        <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            3. The difference between nodejs and express js?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>Node.js is a JavaScript
            runtime environment that allows you to run JavaScript on the
            server-side, while Express.js is a web application framework for
            Node.js that provides a set of tools and features for building web
            applications and APIs. Express.js is built on top of Node.js and
            provides additional functionality such as routing, middleware, and
            template engines.
          </p>
        </article>
        <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
          <h1 className="text-2xl font-bold mb-2">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-gray-600">
            <span className="font-bold">Ans: </span>A custom hook is a function
            in React that allows to extract and reuse logic across multiple
            components. It allows to encapsulate complex logic into a reusable
            function, making it easier to maintain and test. I can create a
            custom hook when i find myself repeating similar logic across
            multiple components or when i want to abstract away some of the
            complexity of a component.
          </p>
        </article>
      </div>
    </>
  );
};

export default Blog;
