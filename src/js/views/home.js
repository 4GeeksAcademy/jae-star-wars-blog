import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className=" mt-5 ps-5">
    <h1 className="text-danger mb-5">Characters</h1>
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt="placeholder image"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
		<div className="d-flex justify-content-between">
        <a href="#" className="btn learn-more-btn bg-transparent text-primary border-primary ">
          Learn more!
        </a>
        <i className="btn bg-white far fa-heart" style={{ color:"#F1E040", border: "2px solid #F1E040", borderRadius: "5px", width: "50px", height: "50px", padding: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}></i>
		</div>
      </div>
    </div>
  </div>
);
