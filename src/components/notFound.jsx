import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main id="notFound">
      <h1 className="lg-heading">
        Not
        <span className="text-secondery"> Found</span>
      </h1>
      <h2 className="sm-heading">Are you lost?</h2>
      <h3 className="sm-heading">
        <Link to="/contact-me" className="text-secondery">
          Contact Me!
        </Link>
      </h3>
    </main>
  );
};

export default NotFound;
