import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planet, setPlanet] = useState([]);
  const { store, actions } = useContext(Context);

  console.log(store.Characters);
  console.log(store.Planet);
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
    </>
  );
};
