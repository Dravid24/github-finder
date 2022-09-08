import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container px-4 my-20">
      <p className="pt-2  text-3xl font-bold text-gray-600 ">
        About Github Finder App
      </p>
      <p className="my-3 text-base text-gray-500 sm:text-lg ">
        A simple Reactjs{" "}
        <span className="text-gray-800 font-bold">Github Finder</span> app is
        used to search github user and check the latest Repository, Followers,
        Followings and so on.
      </p>
      <p className="text-gray-600">
        <span className="text-lg font-bold">Developer: </span>
        Dravid R.
      </p>
      <p className="my-3 text-gray-600">
        <span className="text-lg font-bold">Contact us:</span>
        <Link
          to="#"
          target={"_blank"}
          onClick={(e) => {
            window.location.href = "mailto:dravidmani1998@gmail.com";
            e.preventDefault();
          }}
          className="text-blue-400 pl-2"
        >
          dravidmani1998@gmail.com
        </Link>
      </p>
    </div>
  );
};

export default About;
