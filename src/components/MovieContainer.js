import { useContext } from "react";
import ecommerceContext from "../context/EcommerceContext";
import Movie from "./Movie";
import React from "react";

const MovieContainer = () => {
  const { movies } = useContext(ecommerceContext);

  return (
    <>
      <div>
      <h2>Featured movies</h2>
      {movies
          .filter((movie) => movie.isFeatured === true && movie.isMovie === true).map((movie) => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            qty={movie.qty}
            rentPrice={movie.rentPrice}
            buyPrice={movie.buyPrice}
            poster={movie.poster}
          />
        ))}
      </div>
    </>
  );
};

export default MovieContainer;
