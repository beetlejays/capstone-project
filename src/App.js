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

  const [search, setSearch] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);

  //////////////////////////// start add watchlist

  const [watchlist, setWatchList] = useState(['']);

  function addToWatchList(movie) {
    setWatchList([...watchlist, movie]);
    console.log(watchlist);
  }

  ////////////////////////////  end add watchlist

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

  useEffect(() => {
    setError(null);
    if (search === '') {
      return;
    }

    async function fetchSearchMovieData() {
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
      const response = await fetch(url + API_KEY + '&query=' + search);
      try {
        if (response.ok) {
          const fetchedMovieSearch = await response.json();
          setFetchMovies(fetchedMovieSearch.results);
        } else {
          setError(new Error());
        }
      } catch (error) {
        setError(new Error('Sorry Data can not be fetched'));
      }
    }

    fetchSearchMovieData();
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Routes>
        <Route path="/" element={<Home moviesData={moviesData} error={error} />} />
        <Route path="/:id" element={<DetailsPage moviesData={moviesData} onAddToWatchList={addToWatchList} />} />
        <Route path="/search" element={<Search fetchMovies={fetchMovies} search={search} setSearch={setSearch} />} />
        <Route
          path="/search/:id"
          element={<DetailsPage moviesData={fetchMovies} onAddToWatchList={addToWatchList} />}
        />
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} moviesData={fetchMovies} />} />
      </Routes>
    </>
  );
}

export default App;
