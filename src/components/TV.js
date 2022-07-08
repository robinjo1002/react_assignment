import React, { useContext } from "react";
import ecommerceContext from "../context/EcommerceContext";
import "../assets/css/App.css";


const TV = () => {
  const { movies } = useContext(ecommerceContext);

  return (
    <div>
     
      <main>
      <h2>Featured TV Shows</h2>
        {movies
          .filter((movie) =>  movie.isFeatured === true && movie.isMovie === false)
          .map((movie) => (
            <>
              <img
                className="featured_movies"
                src={movie.poster}
                height="200"
                width="120"
              />
            </>
          ))}
      </main>
   
    </div>
  );
};

export default TV;
