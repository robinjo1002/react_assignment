import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/HomePage";
import MovieDescriptionPage from "../pages/MovieDescriptionPage";
import AllMovies from "./AllMovies";
import AllTv from "./AllTv";
import TVDescriptionPage from "../pages/TVDescriptionPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ecommerceContext from "../context/EcommerceContext";
import "../assets/css/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <ecommerceContext.Provider value={{ movies, setMovies }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<AllMovies />} />
          <Route path="/tv" element={<AllTv />} />
          <Route path="/movies/:id" element={<MovieDescriptionPage />} />
          <Route path="/tvs/:id" element={<TVDescriptionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ecommerceContext.Provider>
  );
};

export default App;
