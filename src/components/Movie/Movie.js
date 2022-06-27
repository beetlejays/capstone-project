export default function Movie({movie_id, movie_vote_average, movie_poster, movie_title, movie_alt_text}) {
  return (
    <div className="movie__single" key={movie_id}>
      <div className="movie__average">
        <span className="movie__average__number">{movie_vote_average}</span>
      </div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie_poster}`} alt={`${movie_alt_text}`} />

      <div>
        <h3 className="movie__title">{movie_title}</h3>
      </div>
    </div>
  );
}
