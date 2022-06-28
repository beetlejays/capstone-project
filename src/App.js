import './App.css';
import {useEffect, useState} from 'react';

import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);

  async function fetchMovieData() {
    try {
      const data1 = await fetch(`${url}popular?api_key=${API_KEY}`);
      const moviesData = await data1.json();
      //  return moviesData.results;
      console.log(moviesData.results);
    } catch (error) {
      console.log(error.stack);
    }
  }

  useEffect(() => {
    fetchMovieData();
  });

  /*   useEffect(() => {
    fetch(`${url}popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(fetchData => {
        setMoviesData(fetchData.results);
      });
  }, []);  */ // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main-app">
      {}
      <Header />
      <main>
        <div className="movie__container">
          {moviesData.results && <p>Sorry, no movie data available at this moment</p>}
          {moviesData.map(movie => (
            <Movie
              key={movie.title}
              movie_id={movie.id}
              movie_vote_average={movie.vote_average}
              movie_title={movie.title}
              movie_poster={movie.poster_path}
              movie_alt_text={movie.original_title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
