import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Movie from '../components/Movie/Movie';

export default function Search({fetchMovies, search, setSearch}) {
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <>
      <Header displayBackButton={true} />
      <SearchContainer>
        <h1>Please type in your movie search</h1>
        <SrOnly htmlFor="Moviesearch">Moviesearch</SrOnly>
        <SearchInput id="Moviesearch" type="text" name="movieinput" value={search} onChange={handleSearch} />
      </SearchContainer>
      <main>
        <MovieContainer>
          {fetchMovies && fetchMovies.length > 0 ? (
            fetchMovies.map(movie => (
              <Link key={movie.id} to={`/search/${movie.id}`}>
                <Movie
                  key={movie.id}
                  movieTitle={movie.title}
                  movieVoteAverage={movie.vote_average}
                  moviePoster={movie.poster_path}
                  movieAltText={movie.original_title}
                />
              </Link>
            ))
          ) : (
            <MessageContainer>
              <p>No search results</p>
            </MessageContainer>
          )}
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
  max-width: 800px;
  margin: auto;
  padding: 0 10px;
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
  p {
    font-size: 2rem;
    text-align: center;
    color: #ccc;
  }
`;

const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
