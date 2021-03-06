
export default function MovieList({ movies, NominationBtn, handleAddNomination }) {
  return (
    <>
      {movies.map((movie, idx) => 
      <div className="movie-poster" key={idx}>
        <img className="poster-img" src={movie.Poster} alt="movie-poster" />
        <div 
          className="add-nomination-container"
          onClick={() => handleAddNomination(movie)}
        >
          <NominationBtn />
        </div>
      </div>
      )}
    </>
  );
}