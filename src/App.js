import './App.css';
import {useEffect, useState} from 'react';

import Header from './components/Header/Header';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY; ////// check back!
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch(`${url}popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(fetchData => {
        setMoviesData(fetchData.results);
        console.log(fetchData);
      });
  }, []);

  return (
    <div className="main-app">
      <Header />
      <div className="movie__container">
        {moviesData.map(movie => (
          <div className="movie__single" key={movie.id}>
            Image here
            <h3 className="movie__title">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
