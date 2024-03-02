import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = ({ vehicle, index }) => {
  const { store, actions } = useContext(Context);
  const [detail, setDetail] = useState();
  useEffect(() => {
    actions
      .getVehicle(vehicle.uid)
      .then((detailvehicle) => setDetail(detailvehicle));
  }, []);

  return (
    <div className="card mx-2" style={{ minWidth: "18rem" }} key={vehicle.uid}>
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt="Vehicle"
      />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <p className="card-text">
          Model: {detail?.properties.model}
          <br />
          Vehicle_Class: {detail?.properties.vehicle_class}
          <br></br>
          Manufacturer: {detail?.properties.manufacturer}
        </p>
        <div className="d-flex justify-content-between">
          <Link
            to={"/vehicle/" + vehicle.uid}
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
