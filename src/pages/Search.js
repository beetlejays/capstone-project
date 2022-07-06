import {useState, useEffect} from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Search() {
  const [search, setSearch] = useState('');
  const [fetchMovies, setFetchMovies] = useState([]);

  useEffect(() => fetchAllMovieData(), []);

  async function fetchAllMovieData() {
    const response = await fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=48df9844b36694ca2599c11952ddc9a6&query=hulk'
    );
    const responseJson = response.json();
    console.log(responseJson);
    setFetchMovies();
  }

  function handleSearchMovie(event) {
    const baseUrl =
      'https://api.themoviedb.org/3/search/movie?api_key=48df9844b36694ca2599c11952ddc9a6&query=' + search;

    if (event.key === 'Enter') {
      setSearch(baseUrl);
      console.log(baseUrl.toLocaleLowerCase());
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
