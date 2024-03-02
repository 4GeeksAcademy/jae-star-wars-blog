import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = ({ planet, index }) => {
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  useEffect(() => {
    actions
      .getPlanet(planet.uid)
      .then((detailPlanet) => setDetail(detailPlanet));
  }, []);

  return (
    <div className="card mx-2" style={{ width: "18rem" }} key={planet.uid}>
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt="Planet"
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">
          Population: {detail?.properties.population}
          <br />
          Terrain: {detail?.properties.terrain}
          <br></br>
        </p>
        <div className="d-flex justify-content-between">
          <Link
            to={"/planets/" + planet.uid}
            className="btn bg-transparent text-primary border-primary hover-blue"
          >
            Learn more!
          </Link>

          <i
            className="far fa-heart"
            style={{
              color: "#F1E040",
              border: "2px solid #F1E040",
              borderRadius: "5px",
              width: "50px",
              height: "50px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
