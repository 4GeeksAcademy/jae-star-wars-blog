import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { Context } from "../store/appContext";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  const {store,actions} = useContext(Context)
  
console.log(store.Characters)
  return (
    <div className=" mt-5 ps-5" style={{ overflowX: "auto" }}>
      <div className="scrolling-wrapper">
        {store.Characters.map((character,index) => (
          <CharacterCard key={index} index={index} character={character}/>
          
        ))}
      </div>
    </div>
  );
};

