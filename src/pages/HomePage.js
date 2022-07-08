import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import ecommerceContext from "../context/EcommerceContext";
import Slider from "../components/Slider";
import MovieContainer from "../components/MovieContainer";
import TV from "../components/TV";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Footer from "./Footer";

const HomePage = () => {
  const { setMovies } = useContext(ecommerceContext);

  useEffect(() => {
    //Async operation //POST,PUT OR DELETE
    fetch("http://localhost:5000/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      <Slider />

      <MovieContainer />
      <TV />
      <Content1 />
      <Content2 />
      <Footer/>
    </div>
  );
};

export default HomePage;
