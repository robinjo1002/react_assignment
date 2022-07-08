import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const MovieDescriptionPage = () => {
  const [movie, setMovie] = useState({
    title: "",
    rentPrice: 0,
    buyPrice: 0,
    poster: "",
    synopsis: "",
  });

  const { id } = useParams();

  useEffect(() => {
    //Async operation //POST,PUT OR DELETE
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMovie(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  return (
    <div id="container">
      <Header />
      <main>
        <h2>{movie.title}</h2>
        <img className="productimage" src={movie.poster} height="300" width="600"/>

        <p>{movie.synopsis}</p>
        <button className="buy-button">Buy: ${movie.buyPrice}</button>

        <button className="rent-button">Rent: ${movie.rentPrice}</button>
      </main>
      <Footer/>
    </div>
  );
};

export default MovieDescriptionPage;
