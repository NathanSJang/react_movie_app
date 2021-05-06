import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

export default function MovieList({ movies }) {

  return (
    <>
      {movies.map((movie, idx) => <div>
        <img src={movie.Poster} alt="movie-poster"></img>
      </div>)}
    </>
  );
}