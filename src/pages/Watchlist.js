import styled from 'styled-components';

import defaultPoster from '../assets/default-movie-poster.jpg';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export default function Watchlist({watchlist, onAddToWatchList}) {
  return (
    <>
      <Header displayBackButton={true} />

      <MainContainer>
        {watchlist.length === 0 && (
          <WatchlistHeadline>There are currently no movies in your watchlist</WatchlistHeadline>
        )}

        {watchlist.map(addedMovies => (
          <MovieRow key={addedMovies.id}>
            {addedMovies.poster_path === null ? (
              <img src={defaultPoster} alt={addedMovies.title} />
            ) : (
              <img src={`https://image.tmdb.org/t/p/w300/${addedMovies.poster_path}`} alt={addedMovies.title} />
            )}

            <MovieTitle>{addedMovies.title}</MovieTitle>
            <DeleteButton onClick={() => onAddToWatchList(addedMovies)}>delete</DeleteButton>
          </MovieRow>
        ))}
      </MainContainer>

      <Footer />
    </>
  );
}

const DeleteButton = styled.button`
  padding: 0.3rem 0.8rem;
  color: white;
  background: #3083dc;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: 0.3s;
  margin-left: auto;

  &:hover {
    background: #ccc;
    color: #3083dc;
    transform: translateX(-8px);
    cursor: pointer;
  }
`;

const MovieTitle = styled.p`
  font-size: 1.3rem;
  padding-left: 1.5rem;
  color: white;
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

const MovieRow = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  img {
    width: 80px;
    height: auto;
  }
  &:nth-child(odd) {
    background-color: #333;
  }
`;

const MainContainer = styled.main`
  max-width: 800px;
  margin: 5rem auto 0 auto;
  padding: 0 20px;
`;

const WatchlistHeadline = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #3083dc;
  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
`;
