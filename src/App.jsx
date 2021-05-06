
import { useState, useEffect, } from "react";
import { Container } from "@material-ui/core";
import MovieList from "./components/MovieList";
import SectionTitle from "./components/SectionTitle";
import SearchBox from "./components/SearchBox";
import AddNomination from "./components/AddNomination";
import RemoveNomination from "./components/RemoveNomination";
import MovieERR from "./components/MovieERR";
import * as API from "./utilities/OMDbAPI";

import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  useEffect((searchval) => {
    if(searchVal) {
      API.getMoives(searchVal)
        .then(data =>  {
          if(data.Search) {
            setMovies(data.Search);
          }
        });
    };
}, [searchVal]);

useEffect(() => {
  const nominatedMovies = JSON.parse(localStorage.getItem('react-moive-nominations'));
  setNominations(nominatedMovies);
}, []);

function handleAddNomination(movie) {
  const newNomination = [...nominations, movie];
  setNominations(newNomination);
  saveToLocalStorage(newNomination)
}

function handleRemoveNomination(movie) {
  const newNomination = nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
  setNominations(newNomination);
}

function saveToLocalStorage(item) {
  localStorage.setItem('react-moive-nominations', JSON.stringify(item));
}

  return (
    <Container className="moive-list">
      <div className="heading">
        <SectionTitle title="Movies" />
        <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
      <div className="row">
        {(movies.length > 0) 
        ? 
          <MovieList
            MovieERR={MovieERR}
            movies={movies} 
            NominationBtn={AddNomination}
            handleAddNomination={handleAddNomination}
          />
        : <MovieERR />
        }
      </div>
      <div className="heading">
        <SectionTitle title="Nominations" />
      </div>
      <div className="row">
        <MovieList 
          movies={nominations} 
          NominationBtn={RemoveNomination}
          handleAddNomination={handleRemoveNomination}
        />
      </div>
    </Container>
  );
}

export default App;
