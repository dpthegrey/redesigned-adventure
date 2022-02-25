import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-lg">
            The page you are looking for does not exist.
          </p>
          <Link to="/" className="btn btn-primary btn-lg ">
            <FaHome className="inline mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
