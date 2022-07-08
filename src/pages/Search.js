import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Search() {
  const [search, setSearch] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);
  const [searchUrl, setSearchUrl] = useState('');

  async function fetchSearchMovieData(event) {
    const KEY = process.env.REACT_APP_API_KEY;
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';

    try {
      const response = await fetch(baseUrl + KEY + '&query=' + search + 'hulk');
      const fetchedMovieSearch = await response.json();
      setFetchMovies(fetchedMovieSearch.results);
    } catch {
      console.log('Error');
    }
  }

  useEffect(() => {
    fetchSearchMovieData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header displayBackButton={true} />
      <SearchContainer>
        <h1>Please type in your movie search</h1>
        <form action="">
          <SearchInput
            type="text"
            name="movieinput"
            value={search}
            onChange={event => setSearch(event.target.value.replace(/[^a-z]/gi, ' '))}
          />
          <input type="submit" value="Search now" />
        </form>
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
    font-size: 1.6rem;
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
