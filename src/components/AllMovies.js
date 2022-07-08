import React, { useContext } from "react";
import ecommerceContext from "../context/EcommerceContext";
import "../assets/css/App.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "../pages/Footer";

const AllMovies = () => {
  const { movies } = useContext(ecommerceContext);

  return (
    <div id="container">
      <Header />
      <main>
        {movies
          .filter((movie) => movie.isMovie === true)
          .map((movie) => (
            <>
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="featured_movies"
                  src={movie.poster}
                  height="200"
                  width="120"
                />
              </Link>
            </>
          ))}
      </main>
      <Footer />
    </div>
  );
};

export default AllMovies;
