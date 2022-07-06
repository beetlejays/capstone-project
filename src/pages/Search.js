import {useState, useEffect} from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Search() {
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);

  useEffect(() => {
    function fetchAllMovieData() {
      fetch(searchUrl)
        .then(response => response.json())
        .then(fetchedMovies => setFetchMovies(fetchedMovies.results));
    }

    fetchAllMovieData();
  }, [searchUrl]);

  function handleSearchMovie(event) {
    const baseUrl =
      'https://api.themoviedb.org/3/search/movie?api_key=48df9844b36694ca2599c11952ddc9a6&query=' + search;
    if (event.key === 'Enter') {
      setSearchUrl(baseUrl);
    }
  }

  return (
    <>
      <Header displayBackButton={true} />
      <SearchContainer>
        <h1>Please type in your movie search</h1>
        <SearchInput
          type="text"
          name="movieinput"
          value={search}
          onKeyPress={handleSearchMovie}
          onChange={event => setSearch(event.target.value)}
        />
      </SearchContainer>
      <main>
        {fetchMovies.map(movie => (
          <Movie
            key={movie.id}
            movieTitle={movie.title}
            movieVoteAverage={movie.vote_average}
            moviePoster={movie.poster_path}
            movieAltText={movie.original_title}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45vh;
  h1 {
    color: #3083dc;
    font-size: 1.5rem;
  }
`;

const SearchInput = styled.input`
  margin-top: 2rem;
  padding: 1.2rem;
  border-radius: 40px;
  max-width: 80vw;
  background-color: #666;
  border: none;
  font-size: 2.4rem;
  font-weight: 300;
  color: darkgrey;
`;
