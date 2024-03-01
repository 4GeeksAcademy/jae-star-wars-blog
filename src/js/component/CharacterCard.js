import React, {useContext, useEffect} from "react";
import { Link, useActionData } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterCard = ({character,index}) => {
  const {store,actions} = useContext(Context)
    

return (

  <div className="card mx-2" style={{ width: "18rem" }} key={character.uid}>
  <img
    src="https://placehold.co/400x200"
    className="card-img-top"
    alt="Character"
  />
  <div className="card-body">
    <h5 className="card-title">{character.name}</h5>
    <p className="card-text">
      Gender: {character.gender}<br />
      Hair color: {character.hair_color}<br></br>
      Eye color: {character.eye_color}
    </p>
    <div className="d-flex justify-content-between">
      <a href="#" className="btn bg-transparent text-primary border-primary hover-blue">
        Learn more!
      </a>
      <i className="far fa-heart" style={{ color:"#F1E040", border: "2px solid #F1E040", borderRadius: "5px", width: "50px", height: "50px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}></i>
    </div>
  </div>
</div>
    );

  };
  
