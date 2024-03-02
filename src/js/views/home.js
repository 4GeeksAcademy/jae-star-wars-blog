import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const { store, actions } = useContext(Context);

  console.log(store.Characters);
  console.log(store.Planet);
  console.log(store.Vehicle);
  return (
    <>
      <div className=" mt-5 ps-5 d-flex " style={{ overflowX: "auto" }}>
        <section>
          <div
            className="d-flex scrolling-wrapper"
            style={{ overflowX: "auto" }}
          >
            {store.Characters.map((character, index) => (
              <CharacterCard key={index} index={index} character={character} />
            ))}
          </div>
        </section>
      </div>
      <div className=" mt-5 ps-5 d-flex " style={{ overflowX: "auto" }}>
        <section>
          <div className="d-flex scrolling-wrapper">
            {store.Planet.map((planet, index) => (
              <PlanetCard key={index} index={index} planet={planet} />
            ))}
          </div>
        </section>
    </div>
      <div className=" mt-5 ps-5 d-flex " style={{ overflowX: "auto" }}>
        <section>
          <div className="d-flex scrolling-wrapper">
            {store.Vehicle.map((vehicle, index) => (
              <VehicleCard key={index} index={index} vehicle={vehicle} />
            ))}
          </div>
        </section>
      </div>
  );
  </>
  )
};
