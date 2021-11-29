import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero d-flex align-items-center justify-content-center">
      <div className="text-white">
        <h1 className="text-large">Welcome to Tour BD</h1>
        <Link to="/alldeals">
          <button className="btn btn-danger">View All Offers</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
