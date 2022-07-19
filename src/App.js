import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import Loader from './components/Loader/Loader';
import useLocalStorage from './hooks/useLocalStorage';
import Credits from './pages/Credits';
import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);
  const [watchlist, setWatchList] = useLocalStorage('mov.me watchlist', []);

  function addToWatchList(movie) {
    if (watchlist.includes(movie)) {
      const newList = watchlist.filter(movieItem => movieItem.id !== movie.id);
      setWatchList(newList);
    } else {
      setWatchList([...watchlist, movie]);
    }
  }

  async function fetchMovieData() {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`${url}popular?api_key=${API_KEY}`);

      if (response.ok) {
        const fetchedMovieData = await response.json();
        setMoviesData(fetchedMovieData.results);
        setIsLoading(false);
      } else {
        setError(new Error());
      }
    } catch (error) {
      setError(new Error('Sorry Data can not be fetched'));
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchMovieData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
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
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home moviesData={moviesData} error={error} />} />
          <Route
            path="/:id"
            element={<DetailsPage watchlist={watchlist} moviesData={moviesData} onAddToWatchList={addToWatchList} />}
          />
          <Route path="/search" element={<Search fetchMovies={fetchMovies} search={search} setSearch={setSearch} />} />
          <Route
            path="/search/:id"
            element={<DetailsPage moviesData={fetchMovies} onAddToWatchList={addToWatchList} watchlist={watchlist} />}
          />
          <Route
            path="/watchlist"
            element={<Watchlist watchlist={watchlist} moviesData={fetchMovies} onAddToWatchList={addToWatchList} />}
          />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      )}
    </>
  );
}

export default App;
