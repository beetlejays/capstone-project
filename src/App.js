import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(null);

  const yearDate = new Date().getFullYear();

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
        <Route path="/movie-details" element={<DetailsPage />} />
        <Route path="./" element={<Home />} />
      </Routes>
      <div className="main-app">
        <Header />
        <Home yearDate={yearDate} error={error} moviesData={moviesData} />
      </div>
    </>
  );
}

export default App;
