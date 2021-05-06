
import { useState, useEffect, useRef } from "react";
import { Container } from "@material-ui/core";
import MovieList from "./components/MovieList";
import SectionTitle from "./components/SectionTitle";
import SearchBox from "./components/SearchBox";
import * as API from "./utilities/OMDbAPI";

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  
  
  useEffect((searchval) => {
    console.log(searchVal)
    if(searchVal) {
      API.getMoives(searchVal)
        .then(data =>  {
          if(data.Search) {
            setMovies(data.Search)
          }
        })
    }
}, [searchVal]);

  return (
    <Container className="moive-list">
      <div className="heading">
        <SectionTitle title="Movies" />
        <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </Container>
  );
}

export default App;
