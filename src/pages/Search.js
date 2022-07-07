import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Search() {
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);
  const [message, setMessage] = useState('Sorry, no movies match this query ');

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
          onChange={event => setSearch(event.target.value.replace(/[^a-z]/gi, ' '))}
        />
        <MessageContainer> {message} </MessageContainer>
      </SearchContainer>
      <main>
        <MovieContainer>
          {fetchMovies.map(movie => (
            <Link key={movie.id} to={`/${movie.id}`}>
              <Movie
                movieTitle={movie.title}
                movieVoteAverage={movie.vote_average}
                moviePoster={movie.poster_path}
                movieAltText={movie.original_title}
              />
            </Link>
          ))}
        </MovieContainer>
      </main>

      <Footer />
    </>
  );
}

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  max-width: 800px;
  margin: 40px auto;
  gap: 1rem;
  padding: 0 10px 20px 10px;
  align-items: start;
`;

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

const MessageContainer = styled.div`
  color: white;
  padding-top: 1rem;
`;
