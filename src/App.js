import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchMovieData() {
    setError(null);
    try {
      const response = await fetch(`${url}popular?api_key=${API_KEY}`);

      if (response.ok) {
        const fetchedMovieData = await response.json();
        setMoviesData(fetchedMovieData.results);
      } else {
        setError(new Error());
      }
    } catch (error) {
      setError(new Error('Sorry Data can not be fetched'));
    }
  }

  useEffect(() => {
    fetchMovieData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Routes>
        <Route path="/" element={<Home moviesData={moviesData} error={error} />} />
        <Route path="/:id" element={<DetailsPage moviesData={moviesData} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
