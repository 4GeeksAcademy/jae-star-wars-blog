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
        <a href="#" className="btn bg-transparent text-primary border-primary">
          Learn more!
        </a>
		<i class="far fa-heart"></i>
		</div>
      </div>
    </div>
  </div>
);
