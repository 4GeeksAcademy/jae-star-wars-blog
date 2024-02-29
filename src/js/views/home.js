import React, { useEffect, useState } from "react";
import "../../styles/home.css";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://www.swapi.tech/api/people")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" mt-5 ps-5" style={{ overflowX: "auto" }}>
      <div className="scrolling-wrapper">
        {characters.map(character => (
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
        ))}
      </div>
    </div>
  );
};

