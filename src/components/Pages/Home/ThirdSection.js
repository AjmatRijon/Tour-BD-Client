import React from "react";
import { Link } from "react-router-dom";

const ThirdSection = () => {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <div className="d-md-flex align-items-center container p-5 my-5 text-dark overflow-hidden">
        <div>
          <h1>Make your Journey Safe and memorial with us </h1>
          <button className="btn btn-danger text-white mx-2">
            Contact us{" "}
          </button>
          <Link to="/alldeals">
            <button className="btn btn-dark text-white">View Deals </button>
          </Link>
        </div>
        <div className="mt-3">
          {" "}
          <iframe
            style={{ width: "560px", height: "315px" }}
            src="https://www.youtube.com/embed/rDYdeq3JW_E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
