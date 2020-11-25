import React, { useState } from "react";
import "./App.css";
import HomePageHeader from "./HomePageHeader";
import { movieData } from "./data";
import Search from "./Search";
import Submit from "./Submit";
import { MovieList } from "./MovieList";

function App() {
  const [word, setWord] = useState("");
  const [movies,setMovies] = useState( movieData)
  
  const [filterDisplay, setFilterDisplay] = useState([]);

  const handleChange = e => {
    setWord(e);
    const oldList = movies.map(movie => {
      return { Name: movie.Name.toLowerCase(), Rating: movie.Rating, Duration: movie.Duration, id: movie.id }
    })
  

    if (word !== "") {
      let newList = []

      newList = oldList.filter(movie =>
        movie.Name.includes(word.toLowerCase()))
      setFilterDisplay(newList)
    } else {
      setFilterDisplay(movies);
    }
  };
  return (
    <div className="App">
      {" "}
      <HomePageHeader />
      <Submit
        movies={movies}
        setMovies={setMovies}
        handleChange={(e) => handleChange(e.target.value)}
      />
      <Search value={word} handleChange={(e) => handleChange(e.target.value)} />
      <MovieList movies={word.length < 1 ? movies : filterDisplay} />
    </div>
  );
}

export default App;
