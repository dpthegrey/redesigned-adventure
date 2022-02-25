import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="mb-4 text-6xl">About GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React.js app to search GitHub profiles and see profile details. This
        app uses the Context API along with the useContext and useReducer hooks
        for state management
      </p>
      <p className="mb-4 text-2xl font-light">
        Uses <strong>TailwindCSS</strong> &amp; <strong>DaisyUI</strong> to make
        it look even better and user-friendly.
      </p>
      <p className="text-lg text-gray-600">Version 0.1.0</p>
    </div>
  );
};

export default About;
