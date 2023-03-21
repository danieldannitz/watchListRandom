import { useState } from "react";
import "./RandomMovie.css";

export function RandomMovie() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function generateRandomMovie() {
    fetch("../movies.json").then((response) =>
      response
        .json()
        .then((data) => {
          const randomMovie = data[Math.floor(Math.random() * data.length)];
          setSelectedMovie(randomMovie);
        })
        .catch((error) => console.log(error))
    );
  }

  return (
    <div className="main">
      <h1>Random Watchlist Movie Generator</h1>
      <button onClick={generateRandomMovie}>Click!</button>
      {selectedMovie && (
        <div className="mapdiv">
          <h2>{selectedMovie.Name}</h2>
          <img src={selectedMovie.image} alt="" srcset="" />
        </div>
      )}
    </div>
  );
}
